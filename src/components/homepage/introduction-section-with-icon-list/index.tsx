import Image from "next/image";
import WindRoseSwipe from "./WindRoseSwipe";


const IntroductionSectionWithIconList: React.FC<{ reversed: boolean }> = ({ reversed }) => {
    return (
        <section className="bg-[#E8EAEF] pt-[38px] pb-[80px] md:pt-[117px] md:pb-[53px] px-[20px] xl:px-0">
            <div className="flex flex-col md:flex-row items-center md:gap-[50px] xl:gap-[166px] max-w-[1179px] mx-auto">
                <div className="flex-shrink-0 w-[100%] md:w-[30%] xl:w-[40%] 2xl:w-auto">
                    <WindRoseSwipe />
                </div>
                <div className="text-[#002554] mt-[24px] md:mt-0">
                    <h2 className="mb-[24px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium">Wie funktioniert CoolSculpting<sup className="font-avenirNext">®</sup>?</h2>
                    <div className="flex flex-col gap-8 text-[18px] md:text-[20px]">
                        <p>
                            Die CoolSculpting<sup>®</sup> Technologie zielt darauf ab, Fettzellen durch gezielte Kälteeinwirkung zu behandeln und ist ein Verfahren zur Körperformung.<sup>1</sup> Dabei wird das subkutane Fett behandelt, das über dem Muskel liegt.<sup>1,6</sup>
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[35px] md:gap-[15px]">
                            <li className="flex flex-row items-center gap-[16px] font-bold text-[20px]">
                                <Image src={"/images/homepage/checkmark.svg"} width={32} height={32} alt="Kontrolliert 1" />
                                <p>Kontrolliert<sup>1</sup></p>
                            </li>
                            <li className="flex flex-row items-center gap-[16px] font-bold text-[20px]">
                                <Image src={"/images/homepage/support.svg"} width={32} height={32} alt="Meist schmerzarm & schonend 1,7" />
                                <p>Meist schmerzarm & schonend<sup>1,7</sup></p>
                            </li>
                            <li className="flex flex-row items-center gap-[16px] font-bold text-[20px]">
                                <Image src={"/images/homepage/block.svg"} width={32} height={32} alt="Ohne Operation 1" />
                                <p>Ohne Operation<sup>1</sup></p>
                            </li>
                            <li className="flex flex-row items-center gap-[16px] font-bold text-[20px]">
                                <Image src={"/images/homepage/time.svg"} width={32} height={32} alt="Kurze Erholungszeit 1,8,9" />
                                <p>Kurze Erholungszeit<sup>1,8,9</sup></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default IntroductionSectionWithIconList;
