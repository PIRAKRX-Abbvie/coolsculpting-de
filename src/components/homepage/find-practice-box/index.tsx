import Link from "next/link";
import Image from "next/image";

export default function FindPracticeBox() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[352px] bg-[#005EB8] p-[20px] rounded-[20px] text-white text-center z-0">
      <Image
        className="md:hidden -z-[1]"
        alt="Bg"
        src="/images/homepage/stats-section-bg.svg"
        quality={100}
        fill
        sizes="100vw"
        style={{
          transform: "scale(0.9)",
          transformOrigin: "top center",
          objectFit: "contain",
          objectPosition: "center top",
        }}
      />
      <Image
        className="hidden md:block -z-[1]"
        alt="Bg"
        src="/images/homepage/stats-section-bg.svg"
        quality={100}
        fill
        sizes="100vw"
        style={{
          transform: "scale(0.75)",
          transformOrigin: "top center",
          objectFit: "contain",
          objectPosition: "center top",
        }}
      />
      <h3 className="font-kanedaGothic text-[40px] lg:text-[72px] font-bold mb-[8px]">
        Kryolipolyse-Behandlung
      </h3>
      <p className="text-[18px] lg:text-[20px] mb-[24px]">
        Warum warten? Finden Sie heute eine Praxis in Ihrer Nähe.
      </p>
      <Link
        className="rounded-[100px] px-[24px] py-[12px] bg-white text-[#002554] text-[16px] font-[600] border border-white hover:bg-transparent hover:text-white transition ease-in-out duration-300"
        href="https://cliniclocator.allerganaesthetics.de"
        target="_blank"
      >
        Praxis finden
      </Link>
    </div>
  );
}
