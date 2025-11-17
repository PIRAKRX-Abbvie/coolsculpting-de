import Footer from "@/components/layout/footer";
import WorkPartners from "@/components/homepage/work-partners";
import IntroductionSection from "@/components/homepage/introduction-section";
import IntroductionSectionWithIconList from "@/components/homepage/introduction-section-with-icon-list";
import StatsSection from "@/components/homepage/stats-section";
import Image from "next/image";
import Link from "next/link";
import FindPracticeBox from "@/components/homepage/find-practice-box";
import FaqSection from "@/components/homepage/faq-section";
import ParallaxBanner from "@/components/homepage/parallax-banner";

export default function Home() {
  return (
    <>
        <main>
            <ParallaxBanner />
            <div className="bg-[#f7f8fa]">
                <WorkPartners />
            </div>
            <div className="bg-[#f7f8fa] py-8">
                <div className="max-w-[940px] mx-auto px-[20px] xl:px-0">
                    <ul className="list-disc pl-4 line-list lg:text-[20px]">
                        <li>
                            <Link href={"#section1"}>Was ist CoolSculpting<sup>®</sup>?</Link>
                        </li>
                        <li>
                            <Link href={"#section2"}>Wie funktioniert CoolSculpting<sup>®</sup>?</Link>
                        </li>
                        <li>
                            <Link href={"#section3"}>Vertrauen Sie CoolSculpting<sup>®</sup> ELITE</Link>
                        </li>
                        <li>
                            <Link href={"#section4"}>Ablauf der CoolSculpting<sup>®</sup> ELITE Behandlung</Link>
                        </li>
                        <li>
                            <Link href={"#section5"}>Häufige Fragen zu CoolSculpting<sup>®</sup> - Kosten, Körperstellen & Behandlung</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="section1">
                <IntroductionSection reversed={false} />
            </div>
            <div id="section2">
                <IntroductionSectionWithIconList reversed={false} />
            </div>
            <StatsSection />
            <div className="py-[80px] bg-[#f5f6f8]">
                <div className="max-w-[1080px] mx-auto px-[20px] xl:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-24 gap-[30px]">
                        <div className="md:col-span-17">
                            <iframe
                                className="w-full aspect-video rounded-[20px]"
                                loading="lazy"
                                src="https://player.vimeo.com/video/957561429?h=13d7223b79&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            />
                        </div>
                        <div className="md:col-span-7 flex flex-col items-center">
                            <div className="grid grid-cols-2 gap-[10px]">
                                <Image src="/images/homepage/img3.webp" alt="Video Image" width={143} height={210} />
                                <Image src="/images/homepage/img4.webp" alt="Video Image" width={143} height={210} />
                            </div>
                            <Image className="mt-auto pt-[15px]" src="/images/homepage/img5.webp" alt="Video Image" width={297} height={197} />
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-[80px] lg:py-[120px] px-[20px] lg:px-[0]">
                <div id="section3" className="max-w-[720px] mx-auto text-[#002554]">
                    <h2 className="mb-[40px] md:mb-[32px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium leading-none">Vertrauen Sie CoolSculpting<sup className="font-avenirNext">®</sup></h2>
                    <div className="flex flex-col gap-8 text-[16px] lg:text-[20px]">
                        <div>
                            <b>Sicherheit der Behandlung</b>
                            <p>Als einziger Kryolipolyseanbieter verfügt CoolSculpting<sup>®</sup> ELITE über eine FDA Zulassung der amerikanischen Gesundheitsbehörde.<sup>12</sup> Die CoolSculpting<sup>®</sup> ELITE Technologie ermöglicht eine präzise kontrollierte Kühlung der Fettzellen unter der Haut,<sup>1</sup> während die Haut selbst nicht beeinträchtigt wird.<sup>7</sup> Es kommen keine Nadeln zum Einsatz und es gibt in der Regel nur eine kurze Erholungszeit nach der Behandlung.<sup>1,8,9</sup> CoolSculpting<sup>®</sup> ist seit dem Jahr 2010 von der FDA zertifiziert<sup>14</sup> und bisher wurden weltweit über 17 Millionen Behandlungszyklen durchgeführt.<sup>11</sup></p>
                        </div>
                        <div>
                            <b>Vertrauen in den behandelnden Arzt / die behandelnde Ärztin</b>
                            <p>Die CoolSculpting<sup>®</sup> Spezialist*innen wurden und werden regelmäßig geschult und wir unterstützen Kliniken kontinuierlich bei der Sicherstellung hoher Betreuungsstandards – für Ihre Zufriedenheit.</p>
                        </div>
                        <div>
                            <b>Produktsicherheit</b>
                            <p>CoolSculpting<sup>®</sup> Systeme sind Kältetherapie-Geräte mit eingebauten Sicherheitsvorrichtungen, wie FREEZE DETECT<sup>™</sup> und COOLCONTROL™. Sie schalten sich automatisch ab, wenn die Sensoren erkennen, dass die Haut an einer Stelle zu kalt wird. Zusätzlich dazu schützt das GelPad Ihre Haut.<sup>1</sup></p>
                        </div>
                        <div>
                            <b>Wissenschaft & Technologie</b>
                            <p>Die CoolSculpting<sup>®</sup> ELITE Technologie basiert auf wissenschaftlichen Erkenntnissen und war Gegenstand von mehr als 120 Publikationen zu den Themen Wirksamkeit und Sicherheit.<sup>10</sup> Darüber hinaus handelt es sich um die einzige Kryolipolyse-Technologie weltweit, die über eine FDA-Zertifizierung verfügt.<sup>12</sup> Dies bedeutet, dass die U.S. Food and Drug Administration, die Lebensmittelüberwachungs- und Arzneimittelbehörde der Vereinigten Staaten, CoolSculpting<sup>®</sup> ELITE bisher als einziges Gerät ein gutes Wirksamkeits- und Sicherheitsprofil bescheinigt hat.</p>
                        </div>
                    </div>
                    <div className="flex flex-col py-[80px] lg:py-[120px] gap-[80px] md:gap-[60px]">
                        <FindPracticeBox />
                        <iframe
                            className="w-full aspect-video rounded-[20px]"
                            loading="lazy"
                            src="https://player.vimeo.com/video/957561292?h=88d9a17e78&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        />
                    </div>
                    <div id="section4">
                        <h2 className="mb-[40px] md:mb-[32px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium leading-none">Ablauf der CoolSculpting<sup className="font-avenirNext">®</sup> ELITE Behandlung</h2>
                        <div className="flex flex-col gap-8 text-[16px] lg:text-[20px]">
                            <div>
                                <h3 className="font-kanedaGothic font-medium mb-[32px] md:mb-[16px] text-[32px]">Ihr Beratungstermin</h3>
                                <p>Ihr/e CoolSculpting<sup>®</sup> ELITE Arzt/Ärztin wird sich Zeit nehmen, um mit Ihnen die Möglichkeiten der Behandlung zu besprechen. Zusammen betrachten Sie Ihren ganzen Körper und konzentrieren sich dann auf bestimmte Bereiche, um so einen für Sie passenden Behandlungsplan zu entwickeln, der auf Ihre Bedürfnisse zugeschnitten ist.<sup>6</sup></p>
                            </div>
                            <div>
                                <h3 className="font-kanedaGothic font-medium mb-[32px] md:mb-[16px] text-[32px]">Kryolipolyse Behandlung: Angepasst an Ihren Körper</h3>
                                <p>Kein Körper ist wie der andere: Ihr/e CoolSculpting<sup>®</sup> ELITE Arzt/Ärztin wird mit Ihnen einen Behandlungsplan erstellen, der auf Ihre Bedürfnisse zugeschnitten ist.<sup>8</sup> Mit verschiedenen Applikatoren zur Auswahl kann Ihr/e Arzt/Ärztin die Behandlung gezielt an Ihren Körper anpassen, um die gewünschten Ergebnisse zu erzielen.<sup>1</sup></p>
                            </div>
                            <div>
                                <b>Gehen Sie Ihre persönlichen Problemzonen an<sup>5,7</sup></b>
                                <p>Bei einigen Personen kann ein individueller Behandlungsplan mehr als eine CoolSculpting<sup>®</sup> ELITE Behandlung umfassen, wenn Sie beispielsweise neben Ihren inneren und/oder äußeren Oberschenkeln auch Ihre Flanken mit der CoolSculpting<sup>®</sup> ELITE Methode behandeln lassen.<sup>1,7</sup></p>
                                <br />
                                <p>Für den Fall, dass Sie nur wenig Zeit haben, aber mehrere Bereiche behandelt werden sollen, verfügen einige Praxen sogar über mehrere CoolSculpting<sup>®</sup> ELITE Systeme. Ihr/e Arzt/Ärztin wird Ihnen den Ablauf erklären und feststellen, ob dies eine Möglichkeit für Sie ist.</p>
                            </div>
                            <div>
                                <b>Ihr persönlicher Behandlungsplan</b>
                                <p>Von Ihrem/Ihrer Arzt/Ärztin erhalten Sie eine klinische Empfehlung, welche Stellen Sie behandeln lassen können und wie viele Behandlungen erforderlich sind.</p>
                                <br />
                                <p>Das Ergebnis? Eine gezielte Behandlung, die Sie dabei unterstützen kann, auf Ihre Wunschfigur hinzuarbeiten.<sup>7</sup></p>
                            </div>
                            <div>
                                <h3 className="font-kanedaGothic font-medium mb-[32px] md:mb-[16px] text-[32px]">Der Tag Ihrer CoolSculpting<sup className="font-avenirNext">®</sup> ELITE Behandlung: Keine Operation<sup className="font-avenirNext">1</sup></h3>
                                <p>Das CoolSculpting<sup>®</sup> ELITE Verfahren ist ein nicht-invasiver Eingriff.  Während der Behandlung werden ein Gelpad und ein Applikator auf den angegebenen Bereich aufgelegt. Dies sorgt für eine kontrollierte Kühlung des Behandlungsbereichs.<sup>1</sup></p>
                            </div>
                            <div>
                                <h3 className="font-kanedaGothic font-medium mb-[32px] md:mb-[16px] text-[32px]">Nach Ihrer CoolSculpting<sup className="font-avenirNext">®</sup> ELITE Behandlung</h3>
                                <p>Die meisten Patient*innen können unmittelbar nach dem CoolSculpting<sup>®</sup> ELITE Eingriff zu ihren normalen Aktivitäten zurückkehren.<sup>1,8,9</sup></p>
                                <br />
                                <p>Die ersten Veränderungen können nach ca. 4 bis 6 Wochen sichtbar sein, das endgültige Behandlungsergebnis nach ca. 3 Monaten.<sup>4,5</sup> Denken Sie daran direkt einen Folgetermin zur Beurteilung des Behandlungsergebnisses zu vereinbaren.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="section5">
                <FaqSection />
            </div>
            <div className="bg-[#0A2959] text-white">
                <div className="container">
                    <div className="border-b py-[40px] md:py-[60px]">
                        <p>* Die komplette Auflistung der Nebenwirkungen finden Sie im Benutzerhandbuch.<sup>1</sup></p>

                        <ol className="list-decimal pl-4 mt-8 text-[16px] break-words">
                            <li>CoolSculpting<sup>®</sup> ELITE Benutzerhandbuch. CS-UM-CM3-04-DE-B; Stand 02/2025.</li>
                            <li>Allergan Aesthetics, a division of AbbVie. Unpublished data REF-105553, CoolSculpting<sup>®</sup> leading device in body contouring category, June 2021.</li>
                            <li>Allergan Aesthetics, a division of AbbVie, Unpublished data REF-88450, Number of CoolSculpting patents, September 2023.</li>
                            <li>Lewis J. J Aesthet Nurs 2016; 5:337-8.</li>
                            <li>Jalian HR et al. Semin Cutan Med Surg 2012; 31:121-5.</li>
                            <li>Few J et al. Aesthet Surg J Open Forum 2020; 2(2):ojaa010.</li>
                            <li>Altmann J et al. Aesthet Surg J Open Forum. 2022; 4: ojac008.</li>
                            <li>Krüger N et al. Clin Cosmet Investig Dermatol 2014; 7:201-5.</li>
                            <li>Nelson AA (ed) Avram MM. Fat removal: Invasive and non-invasive body contouring. Wiley-Blackwell; 1st edition. April 2015. ISBN-10144433428X.</li>
                            <li>Allergan Aesthetics, a division of AbbVie, Unpublished data REF-105612, CoolSculpting<sup>®</sup> and competitor publications (2022 update).</li>
                            <li>Allergan Aesthetics, a division of AbbVie. Unpublished data. REF-112195. CoolSculpting® – 17 million treatment cycles, September 2023.</li>
                            <li>FDA 510(K) summary document, November 2017. Available at: https://www.accessdata.fda.gov/cdrh_docs/pdf17/K171069.pdf. [zuletzt abgerufen April 2024].</li>
                            <li>Ingargiola MJ et al. Plast Reconstr Surg 2015; 135:1581-90.</li>
                            <li>Food and Drug Administration. K080521. ZELTIQ<sup>®</sup> Dermal Cooling Device. September 2010.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </main>
        <Footer referenceCode="DE-CSC-240036" />
    </>
  );
}
