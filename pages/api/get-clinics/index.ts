import axios from 'axios';

async function createToken(): Promise<any> {
    try {
        const params = {
            client_secret: process.env.TKN_CLIENT_SECRET,
            client_id: process.env.TKN_CLIENT_ID,
            username: process.env.TKN_USERNAME,
            password: process.env.TKN_PASSWORD,
            grant_type: 'password',
        };

        const config = {
            method: 'post',
            url: process.env.API_URL,
            params,
        };

        const response = await axios(config);
        return response.data;

    } catch (error) {
        const response = {'status': 'error', 'message': 'An error occurred. Please try again later.'};

        console.error(error);

        return response;
    }
}

async function getData(token: string, urlParams: { lat: number, lng: number }, dist: number): Promise<any> {
    const params = {
        lat: urlParams.lat,
        log: urlParams.lng,
        dist,
        reqsite: 'coolsculpting',
        country: 'DE',
    };

    const config = {
        method: 'get',
        url: process.env.DATA_URL,
        headers: {
            authorization: `Bearer ${token}`,
        },
        params,
    };

    const response = await axios(config);
    return response.data;
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Difference in latitude in radians
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Difference in longitude in radians

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

export default async function handler(req: any, res: any): Promise<void> {

    try {
        const token = await createToken();

        if (token.status === 'error') {
            res.status(500).json(token);
            return;
        }

        let dist = 30;
        let data = await getData(
            token.access_token,
            req.query,
            dist
        );

        while (!data.length && dist <= 150) {
            dist *= 2;
            data = await getData(
                token.access_token,
                req.query,
                dist
            );

            if (data.length === 0 && dist > 150) {
                throw new Error("Data retrieval failed.");
            }
        }

        const distances = data.map((coord: any) => {
            const distance = calculateDistance(
                req.query.lat,
                req.query.lng,
                coord.lat,
                coord.longi
            );
            return { ...coord, distance };
        });

        res.status(200).json(distances.sort((a: any, b: any) => a.distance - b.distance));

    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
}
