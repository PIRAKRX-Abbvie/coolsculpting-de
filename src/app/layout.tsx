import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { GoogleTagManager } from "@next/third-parties/google";
import ReduxProvider from "@/app/store-provider";
import { AvenirNext, KanedaGothic } from "@/utils/local-fonts";
import ScrollTop from "@/components/layout/scroll-top";

import Provider from "@/components/provider";

export const metadata: Metadata = {
  title:
    "CoolSculpting - Eiskalt zur Top-Form mit Kryolipolyse | CoolSculpting",
  description:
    "Was ist CoolSculpting? Behandlung ohne Operation mit Kryolipolyse. Ablauf der Behandlung von hartnäckigen Fettpolstern. CoolSculpting Kosten & Ergebnisse.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ReduxProvider>
      <html className="scroll-smooth" lang="de">
        <body
          className={`${AvenirNext.className} ${AvenirNext.variable} ${KanedaGothic.variable}`}
        >
          <GoogleTagManager gtmId="GTM-KSQJDHS" />
          <Provider>
            <Header />
            {children}
          </Provider>
          <ScrollTop />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSQJDHS"
                                      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </body>
      </html>
    </ReduxProvider>
  );
}
