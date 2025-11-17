import Image from "next/image";
import Checkmark from "@/icons/checkmark";

const IntroductionSectionWithIconList: React.FC<{ reversed: boolean }> = ({ reversed }) => {
    return (
        <section className="bg-[#002554] pb-[80px] md:py-[80px] lg:py-[120px] text-white relative overflow-hidden z-0">
            <div className="hidden md:block absolute top-0 left-0 w-full h-full z-[-1]">
                <Image src="/images/elite/img2-desktop.webp" alt="bg desktop" width={1440} height={900} />
            </div>
            <Image className="md:hidden" src="/images/elite/img2.webp" alt="bg mobile" width={1440} height={900} />
            <div className="container flex flex-col px-[20px]">
                <div className="max-w-[650px] ms-auto">
                    <h2 className="mb-[24px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium">Das C macht den Unterschied</h2>
                    <div className="flex flex-col gap-10 text-[18px] md:text-[20px]">
                        <p>Die C-förmigen Mulden der Applikatoren sind so gestaltet, dass sie den natürlichen Kurven
                            des Körpers entsprechen und dazu noch die Passform sowie den Komfort beim Gewebekontakt
                            verbessern.<sup>2,3</sup></p>
                        <p>Verlängerte, ergonomisch designte Vakuumkanäle sorgen für eine sehr gute Saugleistung und
                            sicheren Halt.<sup>2,3</sup></p>
                        <p>Die Applikatoren sorgen für eine gleichmäßige, effiziente Kühlung und behandeln dabei eine
                            größere Oberfläche.<sup>2,3</sup></p>

                        <ul className="flex flex-col md:grid md:grid-cols-2 gap-[20px]">
                            <li className="flex flex-row items-center gap-[14px]">
                                <Checkmark className="flex-shrink-0" fill="white" width={32} height={32} />
                                <b>C-förmige Applikatoren für mehr Komfort und bessere Vakuumbildung<sup>2,3</sup></b>
                            </li>
                            <li className="flex flex-row items-center gap-[14px]">
                                <Checkmark className="flex-shrink-0" fill="white" width={32} height={32} />
                                <b>Einzigartige Sicherheitsstandards für Ihre Patient*innen<sup>1</sup></b>
                            </li>
                            <li className="flex flex-row items-center gap-[14px]">
                                <Checkmark className="flex-shrink-0" fill="white" width={32} height={32} />
                                <b>Vielseitige, abnehmbare Applikatoren<sup>1</sup></b>
                            </li>
                            <li className="flex flex-row items-center gap-[14px]">
                                <Checkmark className="flex-shrink-0" fill="white" width={32} height={32} />
                                <b>Leistungsstarkes duales System<sup>1</sup></b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default IntroductionSectionWithIconList;
