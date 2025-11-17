"use client";

import Footer from "@/components/layout/footer";
import ParallaxBanner from "@/components/elite/parallax-banner";
import WorkPartners from "@/components/elite/work-partners";
import IntroductionSection from "@/components/elite/introduction-section";
import IntroductionSectionWithIconList from "@/components/elite/introduction-section-with-icon-list";
import Image from "next/image";
import FindPracticeBox from "@/components/elite/find-practice-box";
import FaqSection from "@/components/elite/faq-section";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);

        if (status === "unauthenticated") {
            if (searchParams.size) {
                signIn('credentials', { searchParams });
            } else {
                router.push('/login');
            }
        }

    }, [session, router, status]);

    if (status === "authenticated") {
        return (
            <>
                <main>
                    <ParallaxBanner/>
                    <WorkPartners/>
                    <IntroductionSection reversed={false}/>
                    <IntroductionSectionWithIconList reversed={false}/>
                    <div className="md:py-[80px] pt-[24px] bg-[#005EB8]">
                        <div className="max-w-[960px] mx-auto px-[20px] xl:px-0 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-24 gap-[27px]">
                                <div className="md:col-span-19">
                                    <iframe
                                        className="w-full aspect-video rounded-[20px]"
                                        loading="lazy"
                                        src="https://player.vimeo.com/video/1101496152?h=fa0795ffbe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                    />
                                </div>
                                <div
                                    className="md:col-span-5 flex justify-between flex-row md:flex-col gap-[10px] lg:gap-[50px]">
                                    <Image src="/images/elite/img3.webp"
                                           alt="Video Image" width={180} height={185}/>
                                    <Image src="/images/elite/img4.webp"
                                           alt="Video Image" width={180} height={185}/>
                                </div>
                            </div>
                            <div className="md:hidden mt-[80px]">
                                <FindPracticeBox/>
                            </div>
                            <div className="mt-[80px] md:mt-[92px]">
                                <h2 className="mb-[24px] text-[48px] lg:text-[64px] md:text-center font-kanedaGothic font-medium">Behandeln
                                    Sie bis zu 10 Körperbereiche<sup>1,9</sup></h2>
                                <Image src="/images/elite/img5.webp"
                                       alt="Behandeln Sie bis zu 11 Körperbereiche1,9" width={960} height={581}/>
                                <p className="text-[10px] mt-[20px]">Abbildung nach: CoolSculpting<sup>®</sup> ELITE Benutzerhandbuch. </p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden md:block">
                        <FindPracticeBox/>
                    </div>
                    <section className="pt-[80px] lg:pt-[120px] px-[20px] lg:px-[0] bg-[#005EB8] text-white">
                        <div className="max-w-[720px] mx-auto">
                            <Image className="mb-[45px] md:mb-[50px]" src="/images/elite/img6.webp"
                                   alt="Profitieren Sie von" width={720} height={325}/>
                            <div className="mb-[60px]">
                                <h2 className="mb-[40px] md:mb-[32px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium leading-none">Profitieren
                                    Sie von:</h2>
                                <ul className="flex flex-col gap-2 list-disc pl-3 lg:text-[20px]">
                                    <li>Der Partnerschaft mit individueller Unterstützung und Schulung</li>
                                    <li>Dem Weltmarktführer mit mehr als 17 Millionen Behandlungszyklen weltweit<sup>6</sup>
                                    </li>
                                    <li>25 Jahre Forschung und Entwicklung<sup>7</sup></li>
                                    <li>Dem Wissen aus mehr als 120 Publikationen<sup>8</sup></li>
                                </ul>
                            </div>
                            <h2 className="mb-[40px] md:mb-[32px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium leading-none">Werden
                                Sie unser Partner!</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[30px] items-center">
                                <Image className="md:order-3" src="/images/elite/img7.webp"
                                       alt="" width={355} height={264}/>
                                <div className="text-[18px] md:text-[16px] lg:text-[20px] leading-7">
                                    <b>Practice Development Manager</b>
                                    <p>Ihr PDM unterstützt Sie bei der reibungslosen Einrichtung von CoolSculpting<sup>®</sup> in Ihrer
                                        Klinik und hilft Ihnen bei der Implementierung der „5 Schritte zum Erfolg“.</p>
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[30px] items-center mt-[70px] md:mt-[60px]">
                                <Image src="/images/elite/img8.webp"
                                       alt="" width={355} height={277}/>
                                <div className="text-[18px] md:text-[16px] lg:text-[20px] leading-7">
                                    <b>CoolSculpting<sup>®</sup> Education</b>
                                    <p>Praxen, die an unserem Trainingsprogramm CoolSculpting<sup>®</sup> Education teilnahmen,
                                        verzeichneten eine um 58 % höhere klinische Ausnutzung.<sup>5</sup></p>
                                    <br/>
                                    <b>CoolConnect</b>
                                    <p>CoolConnect ist eine vernetzte Plattform, die es Ihnen ermöglicht, Ihre Nutzung von
                                        CoolSculpting<sup>®</sup> zu analysieren. Zusammen mit Ihrem PDM erarbeiten Sie die Bereiche mit
                                        Chancen.</p>
                                </div>
                            </div>


                        </div>
                    </section>
                    <FaqSection/>
                    <div className="bg-[#0A2959] text-white">
                        <div className="container">
                            <div className="border-b py-[40px] md:py-[60px]">
                                <ol className="list-decimal pl-4 mt-8 text-[16px] break-words">
                                    <li>CoolSculpting<sup>®</sup> ELITE Benutzerhandbuch. CS-UM-CM3-04-DE-B; Stand 02/2025.</li>
                                    <li>Allergan Aesthetics, a division of AbbVie, Unpublished Data RES-215215, CoolSculpting<sup>®</sup> Clinical Fit and Function study testing of V003 cups, November 2021.</li>
                                    <li>Allergan Aesthetics, a division of AbbVie, Unpublished Data, REF-76759, Applicator cooling and distribution dye test, August 2020.</li>
                                    <li>FDA 510(K) summary document, November 2017. Available at:  https://www.accessdata.fda.gov/cdrh_docs/pdf17/K171069.pdf. [Accessed March 2024].</li>
                                    <li>Allergan Aesthetics, a division of AbbVie, Unpublished Data REF-86122, CoolSculpting<sup>®</sup> Ed attendance, September 2018.</li>
                                    <li>Allergan Aesthetics, a division of AbbVie. Unpublished data. REF-112195. CoolSculpting® – 17 million treatment cycles, September 2023.</li>
                                    <li>Allergan Aesthetics, a division of AbbVie, Unpublished Data REF-86139, CoolSculpting<sup>®</sup> science and evolution (over 20 years), June 2021.</li>
                                    <li>Allergan Aesthetics, a division of AbbVie, Unpublished data REF-105612, CoolSculpting<sup>®</sup> and competitor publications (2022 update).</li>
                                    <li>Altman J et al. Aesthet Surg J Open Forum. 2022; 4: ojac008.</li>
                                    <li>Avram MM & Rosemary SH. Lasers Surg Med. 2009; 41:703-708.</li>
                                    <li>Allergan Aesthetics, a division of AbbVie, Unpublished Data REF-105671, CoolSculpting<sup>®</sup> ELITE chiller specifications – Date of preparation: July 2020.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer referenceCode="DE-CSC-240037" />
            </>
        );
    }

    return (
        <>
            <main>
                <section className="py-[32px] lg:py-[48px]">
                    <div className="max-w-[720px] mx-auto">
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
                    </div>
                </section>
            </main>
            <Footer referenceCode="DE-CSC-240037" />
        </>
    );
}
