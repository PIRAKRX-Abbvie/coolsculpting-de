import React from "react";
import {setLoginModalState} from "@/store/slices/userSlice";
import {useAppDispatch, useAppSelector} from "@/store/store";
import Close from "@/icons/close";

export default function DocCheckLogin() {
    const dispatch = useAppDispatch();

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setLoginModalState(false))
    }

    return (
        <div id="doccheckLoginModal" className={"fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center z-20"}>
            <div className="relative">
                <button className="absolute top-2 md:top-3 right-2 md:right-3" onClick={e => handleClose(e)}>
                    <Close fill="white" width={20} height={20} />
                </button>
                <iframe
                    className="hidden md:block"
                    width="467"
                    height="231"
                    name="dc_login_iframe"
                    id="dc_login_iframe"
                    src="https://login.doccheck.com/code/de/2000000021353/login_xl/"></iframe>
                <iframe
                    className="md:hidden"
                    width="311"
                    height="188"
                    name="dc_login_iframe"
                    id="dc_login_iframe"
                    src="https://login.doccheck.com/code/de/2000000021353/login_m/"></iframe>
            </div>
        </div>
    )
}
