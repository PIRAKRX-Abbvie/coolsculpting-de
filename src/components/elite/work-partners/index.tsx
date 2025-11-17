import Image from "next/image";

export default function WorkPartners() {
    return (
        <div className="border-y-[1px] border-[#D3D3D3] py-[50px] md:pt-[46px] md:pb-[35px] bg-[#f7f8fa] px-[20px] lg:px-[0]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-[45px] max-w-[935px] mx-auto">
                <span className="font-semibold text-[#002554] text-[14px] lg:text-[20px]">Bekannt aus:</span>
                <Image src="/images/elite/work-partners/1.svg" alt="Gala" width={130} height={26} />
                <Image src="/images/elite/work-partners/2.svg" alt="Cosmopolitan" width={189} height={47} />
                <Image src="/images/elite/work-partners/3.svg" alt="Bild" width={65} height={41} />
                <Image src="/images/elite/work-partners/4.svg" alt="Graza" width={90} height={30} />
            </div>
        </div>
    )
}
