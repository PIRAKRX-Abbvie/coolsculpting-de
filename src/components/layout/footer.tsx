"use client";

import Link from "next/link";
import { NavigationItem } from "@/types";
import { useSession } from "next-auth/react";

const authMenu: NavigationItem[] = [
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
];

export default function Footer({ referenceCode }: { referenceCode: string }) {
  const { status } = useSession();

  const RenderAuthMenu = () => {
    return authMenu.map((item: NavigationItem, index: number) => {
      return (
        <Link key={index} href={item.href}>
          {item.label}
        </Link>
      );
    });
  };

  return (
    <footer className="bg-[#0A2959] text-white py-[60px]">
      <div className="container">
        <div className="grid lg:grid-cols-24 gap-10">
          <div className="flex flex-col gap-4 col-span-7">
            <div className="mb-5">
              <Link
                className="hover:bg-white hover:text-black transition duration-300 border rounded-[80px] text-white px-[10px] xl:px-[20px] py-3 mr-[20px] 2xl:mr-[80px]"
                target="_blank"
                href="https://cliniclocator.allerganaesthetics.de"
              >
                Praxis finden
              </Link>
            </div>
            <Link href="/elite">Für Fachkreise</Link>
            {status === "authenticated" && <RenderAuthMenu />}
            <Link href="https://www.allerganaesthetics.de/" target="_blank">
              Allergan Aesthetics
            </Link>
            <Link
              href="https://www.allerganaesthetics.de/ueber-uns/kontakt"
              target="_blank"
            >
              Kontakt
            </Link>
            <p>
              Folgen Sie uns auf{" "}
              <Link
                href="https://www.instagram.com/allerganaesthetics.de?igsh=aXE3NDQwbm1kcWE5"
                target="_blank"
              >
                Instagram
              </Link>{" "}
              und{" "}
              <Link
                href="https://www.facebook.com/share/1FjBfLqusx/"
                target="_blank"
              >
                Facebook
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-4 col-span-10">
            <b>Unsere Brands von Allergan Aesthetics:</b>
            <Link href="https://www.juvederm.de/" target="_blank">
              Juvéderm<sup>®</sup>
            </Link>
            <Link href="https://www.skinvive.de/" target="_blank">
              SKINVIVE™
            </Link>
            <Link href="https://www.harmonyca.info/" target="_blank">
              HArmonyCa<sup>™</sup>
            </Link>
            <Link href="https://www.vistabel.de/login" target="_blank">
              VISTABEL<sup>®</sup>
            </Link>

            <b className="mt-3">Für Mediziner*innen / Apotheker*innen:</b>
            <Link
              href="https://cloud.email.allergangermany.com/LeadCapture"
              target="_blank"
            >
              Erstkontakt
            </Link>
            <Link
              href="https://int.allerganmedicalinstitute.com/global/standard/de/splash-page.html?country=DE&lang=de_DE"
              target="_blank"
            >
              Allergan Medical Institute
            </Link>
            <Link
              href="https://www.allergandirect.de/de_DE/login"
              target="_blank"
            >
              Bestellungen über Allergan Direct
            </Link>
            <Link
              href="https://identity.allerganaesthetics.com/allerganid/aidwelcomescreen?AID=AID-0000001&locale=de-DE"
              target="_blank"
            >
              Registrierung Praxis-Finder
            </Link>
            <Link
              href="https://www.allerganaesthetics.de/medizinische-fachkreise/ypop"
              target="_blank"
            >
              Your Practice Is Our Purpose
            </Link>
          </div>
          <div className="col-span-7">
            <div className="flex flex-col gap-4">
              <Link href="https://www.abbvie.de/impressum.html" target="_blank">
                Impressum
              </Link>
              <Link
                href="https://www.abbvie.de/content/dam/abbvie-com2/de/documents/AbbVie_AGB.pdf"
                target="_blank"
              >
                AGB
              </Link>
              <Link
                href="https://privacy.abbvie/privacy-policies/germany-privacy-notice.html"
                target="_blank"
              >
                Datenschutz
              </Link>
              <Link
                href="https://www.abbvie.de/nutzungsbedingungen.html"
                target="_blank"
              >
                Nutzungsbedingungen
              </Link>
              <Link href="/sitemap/" target="_self">
                Sitemap
              </Link>
              <span className="ot-sdk-show-settings">Cookies</span>
            </div>
            <p className="mt-7 mb-0">{referenceCode}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
