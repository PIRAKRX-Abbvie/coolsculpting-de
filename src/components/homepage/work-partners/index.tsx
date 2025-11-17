import Image from "next/image";

export default function WorkPartners() {
    return (
        <div className="border-y-[1px] border-[#D3D3D3] py-[50px] md:pt-[46px] md:pb-[35px] bg-[#f7f8fa] px-[20px] lg:px-[0]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-[45px] max-w-[935px] mx-auto">
                <span className="font-semibold text-[#002554] text-[14px] lg:text-[20px]">Bekannt aus:</span>
                <Image src="/images/homepage/work-partners/1.svg" alt="Gala" width={78} height={40} />
                <Image src="/images/homepage/work-partners/2.svg" alt="Cosmopolitan" width={164} height={30} />
                <Image src="/images/homepage/work-partners/3.svg" alt="Bild" width={36} height={38} />
                <Image src="/images/homepage/work-partners/4.svg" alt="Graza" width={93} height={29} />
            </div>
        </div>
    )
}
