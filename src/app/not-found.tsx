import Link from "next/link";
import Footer from "@/components/layout/footer";
import React from "react";

export default function NotFound() {
    return (
        <>
            <main>
                <section className="bg-gray-100">
                    <div className="h-screen flex flex-col justify-center items-center">
                        <h1 className="text-8xl font-bold text-gray-800">404</h1>
                        <p className="text-4xl font-medium text-gray-800">Seite nicht gefunden</p>
                        <Link className="mt-4 bg-[#002554] text-white rounded-[27px] px-[25px] py-[6px] text-[17px] lg:text-[26px]" href='/'>Zur Homepage</Link>
                    </div>
                </section>
            </main>
            <Footer referenceCode="DE-CSC-240037" />
        </>
    )
}
