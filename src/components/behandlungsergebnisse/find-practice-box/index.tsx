import Link from "next/link";
import Image from "next/image";

export default function FindPracticeBox() {
    return (
        <div className="relative flex flex-col items-center justify-center h-[325px] bg-white p-[20px] w-full max-w-[720px] mx-auto rounded-[20px] text-[#002554] text-center z-0">
            <Image
                className="md:hidden -z-[1]"
                alt="Bg"
                src="/images/service/stats-section-bg.svg"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    transform: 'scale(0.9)',
                    transformOrigin: 'top center',
                    objectFit: 'contain',
                    objectPosition: 'center top',
                }}
            />
            <Image
                className="hidden md:block -z-[1]"
                alt="Bg"
                src="/images/service/stats-section-bg.svg"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    transform: 'scale(0.75)',
                    transformOrigin: 'top center',
                    objectFit: 'contain',
                    objectPosition: 'center top',
                }}
            />
            <h3 className="font-kanedaGothic text-[40px] lg:text-[72px] font-bold mb-[8px]">CoolSculpting<sup className={"font-avenirNext"}>®</sup> ELITE</h3>
            <p className="text-[18px] lg:text-[20px] mb-[24px]">Wir freuen uns von Ihnen zu lesen.</p>
            <Link className="rounded-[100px] px-[24px] py-[12px] bg-[#002554] text-white text-[16px] font-[600]" href="mailto:cs-elite@allergan.com">Jetzt kontaktieren</Link>
        </div>
    )
}
