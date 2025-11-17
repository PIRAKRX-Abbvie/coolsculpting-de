"use client";

import {useEffect, useState} from "react";
import axios from "axios";

interface Clinic {
    clinicName: string;
    clinic_address: {
        street: string;
        city: string;
        zip_code: string;
    };
    clinc_hours: {
        Monday: string;
        Tuesday: string;
        Wednesday: string;
        Thursday: string;
        Friday: string;
        Saturday: string;
        Sunday: string;
    };
    website_url: string;
    clinic_contact: string;
    email: string;
    clinicId: string;
}

interface Data {
    status: string;
    message: string;
}

export default function Index() {
    const [listShow, setListShow] = useState(true);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Clinic[]>([]);
    const [query, setQuery] = useState<string>('');

    function Loading() {
        return (
            <div className="text-center">
                <div role="status">
                    <svg aria-hidden="true"
                         className="inline w-[64px] h-[64px] text-[#c7c7c7] animate-spin fill-[#002554]"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    function ClinicItem({ clinic }: { clinic: Clinic }) {
        const [showDetails, setShowDetails] = useState(false);

        return (
            <div className="flex flex-col flex-grow bg-[#BDD6E6] p-5">
                <h2 className="text-[28px] text-[#002554] mb-[20px]">{clinic.clinicName}</h2>
                <p className="text-[16px] mb-[20px] flex-grow">{clinic.clinic_address.street}, {clinic.clinic_address.city} {clinic.clinic_address.zip_code}</p>
                {
                    showDetails && (
                        <table className="w-full mb-6">
                            <tbody>
                            <tr>
                                <td>Montag</td>
                                <td>{clinic.clinc_hours.Monday}</td>
                            </tr>
                            <tr>
                                <td>Dienstag</td>
                                <td>{clinic.clinc_hours.Tuesday}</td>
                            </tr>
                            <tr>
                                <td>Mittwoch</td>
                                <td>{clinic.clinc_hours.Wednesday}</td>
                            </tr>
                            <tr>
                                <td>Donnerstag</td>
                                <td>{clinic.clinc_hours.Thursday}</td>
                            </tr>
                            <tr>
                                <td>Freitag</td>
                                <td>{clinic.clinc_hours.Friday}</td>
                            </tr>
                            <tr>
                                <td>Samstag</td>
                                <td>{clinic.clinc_hours.Saturday}</td>
                            </tr>
                            <tr>
                                <td>Sonntag</td>
                                <td>{clinic.clinc_hours.Sunday}</td>
                            </tr>
                            </tbody>
                        </table>
                    )
                }
                <div className="flex flex-row gap-3">
                    <a className="bg-[#002554] text-white rounded-[27px] px-[15px] py-[7px] text-[16px]" href={clinic.website_url} target="_blank">Website</a>
                    <a className="bg-[#002554] text-white rounded-[27px] px-[15px] py-[7px] text-[16px]" href={`tel:${clinic.clinic_contact}`}>Anrufen</a>
                    {showDetails && <a className="bg-[#002554] text-white rounded-[27px] px-[15px] py-[7px] text-[16px]" href={`mailto:${clinic.email}`}>E-Mail</a>}
                    {!showDetails && <button type="button" className=" px-[15px] py-[7px] text-[16px] text-[#002554] underline underline-offset-4" onClick={e => setShowDetails(true)}>Details</button>}
                </div>
            </div>
        );
    }

    function ClinicError({ data }: { data: Data }) {
        return (
            <div className="max-w-[1080px] mx-auto px-[20px] xl:px-0">
                <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-[#fef2f2]" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <div>
                        {data.message || 'An error occurred.'}
                    </div>
                </div>
            </div>
        );
    }

    function RenderResults() {
        if (loading) return <Loading />;

        if (data) {
            if (Array.isArray(data)) {
                return (
                    <>
                        <h2 className="font-[600] text-[32px] lg:text-[48px] text-[#002554] mb-[30px] lg:mb-[60px]">Praxen in {query}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-[40px]">
                            {data.slice(0, 10).map(clinic => <ClinicItem clinic={clinic} key={clinic.clinicId} />)}
                        </div>
                    </>
                );
            } else {
                return <ClinicError data={data} />;
            }
        }


        return null;
    }

    const getData = () => {
        // Get the query parameters from the address bar
        const urlParams = new URLSearchParams(window.location.search);
        const lat = urlParams.get('lat');
        const lng = urlParams.get('lng');
        const query = urlParams.get('query');

        setQuery(query || '');

        if (lat && lng && query) {
            setListShow(false);

            const config = {
                method: 'get',
                url: '/api/get-clinics/',
                params: {
                    lat,
                    lng,
                    query,
                },
            };

            // Send the Axios GET request
            axios(config)
                .then(function (response) {
                    if (response.data) {
                        setData(response.data);
                    }

                    setLoading(false);
                })
                .catch(function (error) {
                    console.error(error);

                    if (error.response.data.status) {
                        setData(error.response.data);
                    }

                    setLoading(false);
                    // Handle the error
                });
        } else {
            setListShow(true);
        }
    };

    useEffect(() => {
        if (window.location.search.split('&').length) {
            getData();
        }
    }, []);

    return (
        <>
            {
                listShow ? '' : (
                    <section id="clinicListing" className="py-[50px] md:pt-[48px] md:pb-[48px] bg-[#f7f8fa]">
                        <div className="container">
                            <RenderResults />
                        </div>
                    </section>
                )
            }
        </>
    );
}
