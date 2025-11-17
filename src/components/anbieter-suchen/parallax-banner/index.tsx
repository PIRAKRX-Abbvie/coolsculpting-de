"use client";

import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import Image from "next/image";

export default function ParallaxBanner() {
    return <>
        <section className="bg-[linear-gradient(141deg,_rgba(246,253,255,1)_0%,_rgba(244,249,252,0)_100%)] pt-[37px] md:pt-[95px] z-0 relative overflow-hidden" style={{
            backgroundColor: '#BDD6E6'
        }}>
            <div className={"absolute w-full h-full top-0 left-0"}>
                <MouseParallaxContainer containerStyle={{
                    overflow: 'inherit !important',
                    height: '100%'
                }} globalFactorX={0.3} globalFactorY={0.3}>
                    <MouseParallaxChild className={"absolute top-0 left-[25%] md:top-[20%] md:left-[25%] blur-sm"} factorX={0.3} factorY={0.1}>
                        <Image className={"w-[35px] md:w-auto"} src={"/images/homepage/parallax-item1.svg"} width={79} height={181} alt="Parallax Item 1" />
                    </MouseParallaxChild>
                    <MouseParallaxChild className={"absolute top-[12%] left-[55%] md:top-[45%] md:left-[40%] blur-sm"} factorX={0.14} factorY={0.22}>
                        <Image className={"w-[73px] md:w-auto"} src={"/images/homepage/parallax-item2.svg"} width={133} height={153} alt="Parallax Item 2" />
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
            <div className="container flex flex-col md:flex-row">
                <div className="md:my-[95px] mr-auto text-[#002554] mb-[12px]">
                    <div className="relative z-20 mt-[40px]">
                        <h1 className="text-[83px] xl:text-[198px] lg:text-[110px] font-kanedaGothic font-bold md:font-normal leading-none mb-[24px] lg:md-[50px]">Praxis finden</h1>
                        <p className="text-[17px] lg:text-[26px] max-w-[577px]">Suchen Sie nach einer Adresse, Postleitzahl oder Stadt.</p>
                    </div>
                </div>
                <div className="md:absolute right-0 bottom-0 max-w-[302px] lg:max-w-[100%] ms-auto mr-[-20px] md:mr-0">
                    <Image src={"/images/anbieter-suchen/banner.webp"}
                           width={473} height={711} alt="CoolSculpting"/>
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
    </>
}
