import Image from "next/image";

const IntroductionSection: React.FC<{ reversed: boolean }> = ({ reversed }) => {
    return (
        <section className="bg-[#f7f8fa] pt-[38px] pb-[80px] md:pt-[117px] md:pb-[53px] px-[20px] xl:px-0">
            <div className="flex flex-col md:flex-row-reverse items-center md:gap-[45px] max-w-[940px] mx-auto">
                <div className="flex-shrink-0 md:w-[40%] lg:w-auto">
                    <Image src="/images/homepage/img1.webp" alt="Was ist CoolSculpting®?" width={372} height={432} />
                </div>
                <div className="text-[#002554] mt-[24px] md:mt-0">
                    <h2 className="mb-[24px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium">Was ist CoolSculpting<sup className="font-avenirNext text-[50%] align-middle">®</sup>?</h2>
                    <div className="flex flex-col gap-8 text-[18px] md:text-[20px]">
                        <p>
                            CoolSculpting<sup>®</sup> ist das Original der Kryolipolyse.<sup>3</sup> Eine nicht-invasive Behandlung von Körperfett mit Kälte.<sup>1</sup> Hartnäckige Fettpölsterchen, die trotz Sport und gesunder Ernährung nicht weichen wollen, können behandelt werden.<sup>1</sup>
                        </p>
                        <p>In der Regel sind die ersten Ergebnisse nach wenigen Wochen sichtbar, das Endergebnis der Behandlung nach 3 Monaten.<sup>4,5</sup></p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default IntroductionSection;
