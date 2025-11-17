import Image from "next/image";

const IntroductionSection: React.FC<{ reversed: boolean }> = ({ reversed }) => {
    return (
        <section className="bg-[#005EB8] py-[60px] lg:py-[80px] px-[20px] xl:px-0">
            <div className="flex flex-col md:flex-row items-center md:gap-[45px] max-w-[1255px] mx-auto">
                <div className="text-[#ffffff] mt-[24px] md:mt-0">
                    <h2 className="mb-[24px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium">Sicherheit geht
                        vor</h2>
                    <div className="flex flex-col gap-8 text-[18px] md:text-[16px] lg:text-[20px]">
                        <p>Mit der Patient*innensicherheit als oberste Priorität verfügt CoolSculpting<sup>®</sup> ELITE über präzise
                            Technologien, die für optimale Ergebnisse sorgen.<sup>1,4</sup></p>

                        <p>
                            <b>FREEZE DETECT<sup>TM</sup></b>
                            <br/>
                            Patentierte Sensoren überwachen das Gewebe und unterbrechen sofort die Behandlung, sollte
                            die Temperatur auf der Haut zu kalt werden.<sup>1</sup>
                        </p>

                        <p>
                            <b>COOLCONTROL<sup>TM</sup></b>
                            <br/>
                            Sensoren überwachen die Behandlungstemperatur in Echtzeit und passen die Kühlleistung für
                            optimale Behandlungsergebnisse an.<sup>1</sup>
                        </p>

                        <p>
                            <b>Patentiertes Gelpad</b>
                            <br/>
                            Diese Maßnahme schützt zusätzlich die Haut der Patient*innen.<sup>1,4</sup>
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 md:w-[40%] lg:w-auto mt-[50px] md:mt-0">
                    <Image src="/images/elite/sicherheit-geht-vor.webp" alt="Sicherheit geht vor"
                           width={634} height={428} quality={100} />
                </div>
            </div>
        </section>
    )
};

export default IntroductionSection;
