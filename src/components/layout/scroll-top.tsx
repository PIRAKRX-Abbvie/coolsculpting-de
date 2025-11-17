"use client"

import ArrowUp from "@/icons/arrow-up";
import {useEffect, useState} from "react";

export default function ScrollTop() {

    const [btnState, setBtnState] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setBtnState(window.scrollY > window.innerHeight);
        })
    }, []);

    return btnState && (
        <button className="hidden md:flex md:items-center md:justify-center fixed bottom-[64px] right-[64px] w-[35px] h-[48px] bg-white border-[1px] border-[#005CB9]" onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }}>
            <ArrowUp width={15} height={24} fill={'#005CB9'} />
        </button>
    )
}