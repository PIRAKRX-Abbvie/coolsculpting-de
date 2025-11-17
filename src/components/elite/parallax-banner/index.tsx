"use client"

import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import Image from "next/image";

export default function ParallaxBanner() {
    return (
        <section className="bg-[#005EB8] pt-[37px] md:pt-[95px] z-0 relative overflow-hidden">
            <div className={"absolute w-full h-full top-0 left-0"}>
                <MouseParallaxContainer containerStyle={{
                    overflow: 'inherit !important',
                    height: '100%'
                }} globalFactorX={0.3} globalFactorY={0.3}>
                    <MouseParallaxChild className={"absolute top-0 left-[25%] md:top-[20%] md:left-[25%] blur-sm"} factorX={0.3} factorY={0.1}>
                        <Image className={"w-[35px] md:w-auto"} src={"/images/service/parallax-item1.svg"} width={79} height={181} alt="Parallax Item 1" />
                    </MouseParallaxChild>
                    <MouseParallaxChild className={"absolute top-[12%] left-[55%] md:top-[45%] md:left-[40%] blur-sm"} factorX={0.14} factorY={0.22}>
                        <Image className={"w-[73px] md:w-auto"} src={"/images/service/parallax-item2.svg"} width={133} height={153} alt="Parallax Item 2" />
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
            <div className="container flex flex-col md:flex-row">
                <div className="md:my-[95px] mr-auto text-white mb-[12px] z-10">
                    <h1 className="text-[83px] xl:text-[198px] lg:text-[110px] font-kanedaGothic font-bold md:font-normal leading-none mb-[24px] lg:md-[50px]">CoolSculpting<sup
                        className="font-avenirNext">®</sup> ELITE</h1>
                    <h2 className="font-kanedaGothic text-[48px] lg:text-[112px] leading-none mb-[22px] lg:mb-[33px]"><span className="text-[#00A3E0] block md:inline">DER STATE OF THE ART</span> DER KRYOLIPOLYSE</h2>
                    <p className="text-[20px] max-w-[577px]">CoolSculpting<sup>®</sup> ist das Original der
                        medizinischen Kryolipolyse. Jedes Detail des CoolSculpting<sup>®</sup> ELITE Systems wurde so konzipiert,
                        dass Sie in Ihrer Praxis neue Möglichkeiten erhalten, um die Nachfrage nach nicht-invasiven
                        Fettbehandlungen voll auszuschöpfen.<sup>1,2</sup></p>
                </div>
                <div className="md:absolute right-0 bottom-0 max-w-[199px] md:max-w-[300px] lg:max-w-[100%] mx-auto">
                    <Image src={"/images/elite/banner.webp"} width={491} height={693} alt="CoolSculpting"/>
                </div>
                <Image
                    className="hidden md:block -z-[1]"
                    alt="Bg"
                    src="/images/homepage/banner-shape.svg"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        transform: 'translateX(20%)',
                        objectFit: 'cover',
                        objectPosition: '30vw 74%'
                    }}
                />
                <Image
                    className="md:hidden -z-[1]"
                    alt="Bg"
                    src="/images/homepage/banner-shape.svg"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'contain',
                        objectPosition: '35vw 90%'
                    }}
                />
            </div>
        </section>
    )
}
