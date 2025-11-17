import FaqItem from "@/components/elite/faq-section/FaqItem";

export default function FaqSection() {
    return (
        <section className="py-[80px] lg:py-[120px] px-[20px] xl:px-[0] bg-[#005EB8] text-white">
            <div className="max-w-[1184px] mx-auto">
                <div className="md:grid md:grid-cols-2 md:gap-[70px]">
                    <div className="mb-[80px] md:mb-0">
                        <h2 className="mb-[40px] md:mb-[32px] text-[48px] font-kanedaGothic font-medium leading-none">Häufige Fragen von Patient*innen zu CoolSculpting<sup className="font-avenirNext">®</sup> ELITE</h2>
                    </div>
                    <div>
                        <FaqItem
                            question="Wie fühlt sich die Behandlung an?"
                            answer={(
                                <>
                                    <p>Sobald die Abkühlung beginnt, erleben Sie in den ersten paar Minuten typischerweise ein starkes Kältegefühl. Dies sollte bald verschwinden. Mögliche Nebenwirkungen während der Behandlung sind:</p>
                                    <br/>
                                    <ul className="list-disc pl-3">
                                        <li>Empfindungen von Ziehen, Zupfen und leichtem Zwicken an der Behandlungsstelle<sup>1</sup></li>
                                        <li>Intensive Kälte, Kribbeln, Stechen, Schmerzen, Krämpfe<sup>1</sup></li>
                                    </ul>
                                    <br/>
                                    <p>Nach der Behandlung erleben Sie möglicherweise Nebenwirkungen wie Rötung, Spannungsgefühl, vorübergehende Blässe und/oder leichte Blutergüsse an den Rändern des Behandlungsbereichs sowie Kribbeln und Stechen.<sup>1</sup> Die meisten Patient*innen können unmittelbar nach der Behandlung ihre tägliche Routine wieder aufnehmen.<sup>9,10</sup></p>

                                </>
                            )}
                        />
                        <FaqItem
                            question="Ist die CoolSculpting<sup>®</sup> ELITE Behandlung für mich geeignet?"
                            answer={(
                                <>
                                    <p>Das CoolSculpting<sup>®</sup> ELITE Verfahren wurde zur Behandlung von kleinen bis moderaten Fettzellen entwickelt. Im Gegensatz zur chirurgischen Gewichtsreduktion (z. B. Magenbypass) kann mithilfe der CoolSculpting<sup>®</sup> ELITE Behandlung keine Gewichtsabnahme bei stark übergewichtigen Personen erzielt werden. Am besten ist die CoolSculpting<sup>®</sup> ELITE Behandlung für Menschen geeignet, die kleinere bis moderate, gut sichtbare Fettansammlungen behandeln möchten.<sup>9</sup></p>
                                </>
                            )}
                        />
                        <FaqItem
                            question="Für welche Körperstellen ist CoolSculpting<sup>®</sup> ELITE geeignet?"
                            answer={(
                                <>
                                    <p>Das CoolSculpting<sup>®</sup> ELITE Verfahren zielt darauf ab, sichtbare, kleine bis moderate Fettansammlungen unterhalb des Kinns (submentaler Bereich), im Bereich des Oberschenkels, des Bauches und der Flanke, sowie Fettzellen im Achselbereich, am Rücken und am Oberarm zu behandeln.<sup>1,9</sup> Ihr/e Arzt/Ärztin wird Ihnen einen maßgeschneiderten Behandlungsplan erstellen, der auf Ihren Körper und Ihre individuellen Ziele zugeschnitten ist.</p>
                                </>
                            )}
                        />
                        <FaqItem
                            question="Muss ich mit Nebenwirkungen rechnen?"
                            answer={(
                                <>
                                    <p>Während der Behandlung können Empfindungen wie Ziehen, Zupfen, leichtes Zwicken, starke Kältegefühle, Kribbeln, Stechen, Schmerzen und Krämpfe an der Behandlungsstelle auftreten. Diese Empfindungen können nachlassen, wenn der Bereich taub wird.<sup>1</sup></p>
                                    <br/>
                                    <p>Unmittelbar nach der Behandlung kann es zu Rötung und Spannungsgefühl, vorübergehende Blässe und/ oder leichte Prellungen an den Rändern des Behandlungsbereichs, Kribbeln und Stechen kommen.<sup>1</sup></p>
                                    <br/>
                                    <p>Rötungen, Blutergüsse und Schwellung, Druckempfindlichkeit, Berührungsempfindlichkeit, Krämpfe und Schmerzen, Juckreiz, Hautempfindlichkeit, Kribbeln und Taubheitsgefühl können bis zu zwei Wochen anhalten, das Taubheitsgefühl u. U. einige Wochen. Nach Behandlung im submentalen Bereich kann es zu einem Völlegefühl im hinteren Rachenraum kommen.<sup>1</sup></p>
                                    <br/>
                                    <p>Das CoolSculpting<sup>®</sup> ELITE Verfahren ist nicht für die Behandlung von Fettleibigkeit geeignet.<sup>9</sup></p>
                                    <br/>
                                    <p>Die komplette Auflistung der Nebenwirkungen finden Sie im Benutzerhandbuch.<sup>1</sup></p>
                                </>
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
