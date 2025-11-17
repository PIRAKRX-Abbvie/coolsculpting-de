"use client";

import Link from "next/link";
import Image from "next/image";
import AaLogo from "@/icons/aa-logo";
import React, { useState } from "react";
import { useAppSelector } from "@/store/store";
import { useAppDispatch } from "@/store/store";
import { setLoginModalState } from "@/store/slices/userSlice";
import DocCheckLogin from "@/components/docCheck-login";
import { Cross as Hamburger } from "hamburger-react";
import { NavigationItem } from "@/types";
import { useSession } from "next-auth/react";

const authMenu: NavigationItem[] = [
  {
    href: " /elite/",
    label: "ELITE",
  },
  {
    href: " /training/",
    label: "Training",
  },
  {
    href: "/behandlungsergebnisse/",
    label: "Behandlungsergebnisse",
  },
  {
    href: "/service/",
    label: "Service",
  },
  {
    href: "mailto:cs-elite@allergan.com",
    label: "Kontakt",
  },
];

export default function Header() {
  const dispatch = useAppDispatch();
  const loginModalState = useAppSelector(
    (state) => state.authReducer.loginModal
  );

  const [isOpen, setOpen] = useState(false);

  const checkAuth = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(setLoginModalState(true));
  };

  const RenderAuthMenu = () => {
    return authMenu.map((item: NavigationItem, index: number) => {
      return (
        <Link
          key={index}
          className="text-[16px] xl:text-[18px]"
          href={item.href}
        >
          {item.label}
        </Link>
      );
    });
  };

  const { status } = useSession();

  return (
    <>
      {loginModalState && <DocCheckLogin />}
      <header className="sticky top-0 z-10">
        <nav className="bg-[#002554] py-[20px] lg:py-[25px]">
          <div className="container">
            <div className="flex items-center">
              <div className="-ml-[10px] lg:hidden relative">
                <div className="absolute -translate-y-1/2">
                  <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        document.body.classList.add("overflow-hidden");
                      } else {
                        document.body.classList.remove("overflow-hidden");
                      }
                    }}
                    color="white"
                    size={18}
                  />
                </div>
              </div>
              <Link className="mx-auto lg:ml-0 w-[170px] 2xl:w-auto" href="/">
                <Image
                  src={"/img/logo.svg"}
                  width={225}
                  height={40}
                  alt={"Coolsculpting"}
                />
              </Link>

              <nav className="lg:flex items-center flex-grow hidden md:visible gap-[20px] 2xl:gap-[45px] text-white ml-[20px] 2xl:ml-[65px]">
                {status === "unauthenticated" && (
                  <>
                    <Link
                      className="text-[16px] <xl>:text-[18px]"
                      href="/fachkreise/"
                      onClick={(e) => checkAuth(e)}
                    >
                      Für Fachkreise
                    </Link>
                  </>
                )}
                {status === "authenticated" && <RenderAuthMenu />}
              </nav>

              {isOpen && (
                <nav className="absolute lg:hidden h-[calc(100vh-70px)] top-[70px] left-0 right-0 py-[20px] bg-[#002554] text-white overflow-auto z-10">
                  <div className="container flex flex-col gap-[15px]">
                    {status === "unauthenticated" && (
                      <>
                        <Link
                          className="text-[18px]"
                          href="/fachkreise/"
                          onClick={(e) => checkAuth(e)}
                        >
                          Für Fachkreise
                        </Link>
                      </>
                    )}
                    {status === "authenticated" && <RenderAuthMenu />}

                    {status === "unauthenticated" && (
                      <>
                        <Link
                          className="transition duration-300 border rounded-[80px] text-white px-[20px] py-3 mr-auto"
                          target="_blank"
                          href="https://cliniclocator.allerganaesthetics.de"
                        >
                          Praxis finden
                        </Link>
                      </>
                    )}
                    {status === "authenticated" && (
                      <>
                        <Link
                          className="transition duration-300 border rounded-[80px] text-white px-[20px] py-3 mr-auto"
                          target="_blank"
                          href="https://identity.allerganaesthetics.com/allerganid/aidwelcomescreen?AID=AID-0000001&locale=de-DE"
                        >
                          Registrierung Praxis-Finder
                        </Link>
                      </>
                    )}
                    <div>
                      <p className="border-t-[1px] w-full mt-[40px] pt-[20px] mb-[15px] text-[18px]">
                        Weitere Brands von Allergan Aesthetics
                      </p>
                      <div className="grid grid-cols-3 gap-[5px]">
                        <div className="flex items-center justify-center p-[15px] h-[105px] bg-white">
                          <Image
                            src="/img/harmonyca-logo.svg"
                            width={78}
                            height={35}
                            alt=""
                          />
                        </div>
                        <div className="flex items-center justify-center p-[15px] h-[105px] bg-white">
                          <Image
                            src="/img/juvederm-logo.svg"
                            width={78}
                            height={35}
                            alt=""
                          />
                        </div>
                        <div className="flex items-center justify-center p-[15px] h-[105px] bg-white">
                          <Image
                            src="/img/vistabel-logo.svg"
                            width={78}
                            height={35}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              )}
              {status === "unauthenticated" && (
                <>
                  <Link
                    className="hidden lg:block hover:bg-white hover:text-black transition duration-300 border rounded-[80px] text-white px-[10px] xl:px-[20px] py-3 mr-[20px] 2xl:mr-[80px]"
                    target="_blank"
                    href="https://cliniclocator.allerganaesthetics.de"
                  >
                    Praxis finden
                  </Link>
                </>
              )}
              {status === "authenticated" && (
                <>
                  <Link
                    className="hidden lg:block hover:bg-white hover:text-black transition duration-300 border rounded-[80px] text-white px-[10px] xl:px-[20px] py-3 mr-[20px] 2xl:mr-[80px]"
                    target="_blank"
                    href="https://identity.allerganaesthetics.com/allerganid/aidwelcomescreen?AID=AID-0000001&locale=de-DE"
                  >
                    Registrierung Praxis-Finder
                  </Link>
                </>
              )}
              <Link href="https://www.allerganaesthetics.de/" target="_blank">
                <AaLogo width={25} height={30} fill="white" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
