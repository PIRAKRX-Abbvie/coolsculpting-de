import axios from 'axios';

interface AccessTokenResponse {
    boolIsValid: boolean;
}

interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
}

async function getValidateAccessToken(access_token: string): Promise<boolean> {
    try {
        const response = await axios.get<AccessTokenResponse>('https://login.doccheck.com/service/oauth/access_token/checkToken.php', {
            params: {
                access_token
            }
        });

        if (response.data && response.data.boolIsValid) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('INVALID ACCESS TOKEN - DocCheck', error);
        return false;
    }
}

async function getAccessToken(code: string): Promise<TokenResponse | null> {
    try {
        const response = await axios.get<any>('https://login.doccheck.com/service/oauth/access_token', {
            params: {
                client_id: process.env.DOC_CHECK_CLIENT_ID,
                client_secret: process.env.DOC_CHECK_CLIENT_SECRET,
                code,
                grant_type: 'authorization_code'
            }
        });

        if (response.data && response.data.access_token) {
            return response.data as TokenResponse;
        } else if (response.data && response.data.error) {
            console.error('Error getting access token:', response.data.error);
            return null;
        } else {
            console.error('Unknown response:', response.data);
            return null;
        }
    } catch (error) {
        console.error('Error getting access token:', error);
        return null;
    }
}

export async function authenticateDocCheck(code: string) {
    try {
        const accessToken = await getAccessToken(code);

        if (accessToken !== null) {
            const isValid = await getValidateAccessToken(accessToken.access_token);

            if (isValid) {
                return { id: 1, name: 'example_user', email: 'example_user@gmail.com', image: null };
            } else {
                throw new Error('Invalid credentials');
            }
        } else {
            throw new Error('Error getting access token');
        }
    } catch (error) {
        console.error('Authentication error:', error);
        throw new Error('Authentication error');
    }
}
