"use client";

import Footer from "@/components/layout/footer";
import ParallaxBanner from "@/components/service/parallax-banner";
import WorkPartners from "@/components/service/work-partners";
import Image from "next/image";
import Link from "next/link";
import FindPracticeBox from "@/components/service/find-practice-box";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (status === "unauthenticated") {
      if (searchParams.size) {
        signIn("credentials", { searchParams });
      } else {
        router.push("/login");
      }
    }
  }, [session, router, status]);

  if (status === "authenticated") {
    return (
      <>
        <main>
          <ParallaxBanner />
          <WorkPartners />
          <section className="py-[80px] lg:py-[120px] bg-[#005EB8] text-white">
            <div className="max-w-[1140px] mx-auto flex flex-col gap-[40px] px-[20px] xl:px-[0] lg:text-[20px]">
              <div>
                <h2 className="mb-[24px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium">
                  Schnellservice Leitfaden
                </h2>
                <p>
                  Vorgehensweise bei Zyklusverlust und Maßnahmen bei
                  Fehlercodes. Das Formular für die Rückerstattung von Zyklen
                  erhalten Sie von Ihrem Practice Development Manager.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[20px]">
                  <div>
                    <p className="mb-[10px]">
                      CoolSculpting<sup>®</sup> ELITE
                    </p>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      locale={false}
                      download
                      href={
                        "/files/Schnellservice Leitfaden CoolSculpting ELITE.pdf"
                      }
                    >
                      <Image
                        src={"/images/service/card1.webp"}
                        width={550}
                        height={325}
                        quality={100}
                        alt="CoolSculpting<sup>®</sup> ELITE"
                      />
                    </Link>
                  </div>
                  <div>
                    <p className="mb-[10px]">CoolSculpting®</p>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      locale={false}
                      download
                      href={
                        "/files/Schnellservice Leitfaden CoolSculpting COM1.pdf"
                      }
                    >
                      <Image
                        src={"/images/service/card2.webp"}
                        width={550}
                        height={325}
                        quality={100}
                        alt="CoolSculpting®"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2 className="mb-[24px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium">
                  Anleitung &quot;Log Retrieval USB Stick&quot;
                </h2>
                <p>
                  Mit Hilfe dieses USB-Sticks können Sie die Protokolldaten des
                  CoolSculpting<sup>®</sup> Systems auslesen und an unseren
                  Kundenservice übermitteln. Dies ist die Voraussetzung dafür,
                  dass wir z.B. Zyklen rückerstatten oder technische Fehler
                  analysieren und beheben können.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[20px]">
                  <div>
                    <p className="mb-[10px]">
                      CoolSculpting<sup>®</sup> ELITE
                    </p>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      locale={false}
                      download
                      href={
                        "/files/CS-305982-A CS ELITE Retrieving System Log Files via USB Stick Übersetzung.pdf"
                      }
                    >
                      <Image
                        src={"/images/service/card3.webp"}
                        width={550}
                        height={325}
                        quality={100}
                        alt="CoolSculpting<sup>®</sup> ELITE"
                      />
                    </Link>
                  </div>
                  <div>
                    <p className="mb-[10px]">CoolSculpting®</p>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      locale={false}
                      download
                      href={
                        "/files/CS13082-G Procedure log retrieval and upload Übersetzung.pdf"
                      }
                    >
                      <Image
                        src={"/images/service/card4.webp"}
                        width={550}
                        height={325}
                        quality={100}
                        alt="CoolSculpting®"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:mt-[80px]">
                <FindPracticeBox />
              </div>
            </div>
          </section>
        </main>
        <Footer referenceCode="DE-CSC-240037" />
      </>
    );
  }

  return (
    <>
      <main>
        <section className="py-[32px] lg:py-[48px]">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-[64px] h-[64px] text-[#c7c7c7] animate-spin fill-[#002554]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer referenceCode="DE-CSC-240037" />
    </>
  );
}
