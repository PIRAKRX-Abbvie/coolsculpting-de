import Image from "next/image";

export default function StatsSection() {
    return (
        <section className="bg-[#005EB8] py-[110px] min-h-[449px] text-white text-center relative overflow-hidden z-0">
            <Image
                className="hidden md:block -z-[1]"
                alt="Bg"
                src="/images/homepage/stats-section-bg.svg"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    objectPosition: '0 60%'
                }}
            />
            <Image
                className="md:hidden -z-[1]"
                alt="Bg Mobile"
                src="/images/homepage/stats-section-bg-mobile.svg"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    transform: 'translateY(-55%)',
                    objectFit: 'contain',
                }}
            />
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[80px]">
                    <div className="max-w-[264px] md:max-w-[332px] mx-auto">
                        <span className="font-kanedaGothic text-[64px] mb-[20px]">120+</span>
                        <p className="text-[17px] lg:text-[20px]">Mehr als 120+ Publikationen zu dem Thema<sup>10</sup></p>
                    </div>
                    <div className="max-w-[264px] md:max-w-[332px] mx-auto">
                        <span className="font-kanedaGothic text-[64px] mb-[20px]">17 Mio.+</span>
                        <p className="text-[17px] lg:text-[20px]">Mehr als 17 Millionen CoolSculpting<sup>®</sup> Behandlungszyklen wurden weltweit durchgeführt<sup>11</sup></p>
                    </div>
                    <div className="max-w-[264px] md:max-w-[332px] mx-auto">
                        <span className="font-kanedaGothic text-[64px] mb-[20px]">92%</span>
                        <p className="text-[17px] lg:text-[20px]">Hohe Patientenzufriedenheit: 92% der Patient*innen würden CoolSculpting<sup>®</sup> empfehlen<sup>7</sup></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
