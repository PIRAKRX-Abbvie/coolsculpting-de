import FaqItem from "@/components/homepage/faq-section/FaqItem";
import FindPracticeBox from "@/components/homepage/find-practice-box";

export default function FaqSection() {
    return (
        <section className="py-[80px] lg:py-[120px] px-[20px] lg:px-[0] bg-[#f5f6f8] text-[#002554] relative z-0 overflow-hidden" style={{
            backgroundImage: 'url("/images/homepage/faq-bg-shape.svg")',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="max-w-[1174px] mx-auto">
                <div className="md:grid md:grid-cols-2 md:gap-[70px]">
                    <div className="mb-[80px] md:mb-0 lg:text-[20px]">
                        <h2 className="mb-[40px] md:mb-[32px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium leading-none">Häufige Fragen zu CoolSculpting<sup className="font-avenirNext">®</sup> - Kosten, Behandlungsareale & Behandlung</h2>
                        <p>Antworten zu den häufigsten Fragen rund um die CoolSculpting<sup>®</sup>  Methode, einschließlich Kosten, durchschnittliche Erholungszeit, Auswirkung und mögliche Fettbehandlung.</p>
                    </div>
                    <div className="flex flex-col gap-[20px] md:gap-[40px]">
                        <div>
                            <h3 className="font-kanedaGothic font-medium mb-[40px] text-[32px]">Erwägung für die CoolSculpting<sup className="font-avenirNext">®</sup> Behandlung</h3>
                            <FaqItem
                                question="Ist die CoolSculpting<sup>®</sup> Behandlung für mich geeignet?"
                                answer={(
                                    <>
                                        <p>Das CoolSculpting<sup>®</sup> ELITE Verfahren wurde zur Behandlung von kleinen bis moderaten Fettzellen entwickelt. Im Gegensatz zur chirurgischen Gewichtsreduktion (z. B. Magenbypass) kann mithilfe der CoolSculpting<sup>®</sup> ELITE Behandlung keine Gewichtsabnahme bei stark übergewichtigen Personen erzielt werden. Am besten ist die CoolSculpting<sup>®</sup> ELITE Behandlung für Menschen geeignet, die kleinere bis moderate, gut sichtbare Fettansammlungen behandeln möchten.<sup>7</sup></p>
                                    </>
                                )}
                            />
                            <FaqItem
                                question="Für wen ist CoolSculpting<sup>®</sup> ELITE nicht geeignet?"
                                answer={(
                                    <>
                                        <p>CoolSculpting<sup>®</sup> ELITE ist nicht für alle Menschen geeignet. Menschen, die an Kryoglobulinämie, Kälteagglutininerkrankungen oder paroxysmaler Kältehämoglobinurie leiden, sollten sich der Behandlung nicht unterziehen. CoolSculpting<sup>®</sup> ELITE ist nicht zur Behandlung von Fettleibigkeit geeignet.<sup>1,*</sup> Fragen Sie am besten Ihre/n Ärztin/Arzt, ob CoolSculpting<sup>®</sup> ELITE für Sie geeignet ist.</p>
                                    </>
                                )}
                            />
                            <FaqItem
                                question="Für welche Körperstellen ist CoolSculpting<sup>®</sup> ELITE geeignet?"
                                answer={(
                                    <>
                                        <p>Das CoolSculpting<sup>®</sup> ELITE Verfahren zielt darauf ab, sichtbare, kleine bis moderate Fettansammlungen unterhalb des Kinns (submentaler Bereich), im Bereich des Oberschenkels, des Bauches und der Flanke, sowie Fettzellen im Achselbereich, am Rücken und am Oberarm zu behandeln. Ihr/e Arzt/Ärztin wird Ihnen einen maßgeschneiderten Behandlungsplan erstellen, der auf Ihren Körper und Ihre individuellen Ziele zugeschnitten ist.<sup>1,6,7,13</sup></p>
                                    </>
                                )}
                            />
                            <FaqItem
                                question="Kann ich mit CoolSculpting<sup>®</sup> ELITE auch mein Doppelkinn behandeln lassen?"
                                answer={(
                                    <>
                                        <p>Das CoolSculpting<sup>®</sup> ELITE-Verfahren kann sichtbare, kleinere Fettdepots unter dem Kinn (submentaler Bereich) behandeln. Ihr/e Arzt/Ärztin wird einen maßgeschneiderten Behandlungsplan erstellen, der auf Ihren Körper und Ihre individuellen Ziele zugeschnitten ist.<sup>1,7</sup></p>
                                    </>
                                )}
                            />
                            <FaqItem
                                question="Ist das CoolSculpting<sup>®</sup> ELITE Verfahren sicher?"
                                answer={(
                                    <>
                                        <p>Als weltweit führendes Verfahren zur nicht-invasiven Fettreduktion<sup>2</sup>  verfügt CoolSculpting<sup>®</sup> ELITE über ein bewährtes Sicherheits- und Wirksamkeitsprofil<sup>1</sup>. CoolSculpting<sup>®</sup> ELITE Systeme sind kontrollierte Kühlgeräte mit eingebauten Sicherheitsmaßnahmen. Wenn die Sensoren erkennen, dass die Haut zu kalt wird, wird das System automatisch heruntergefahren.<sup>1</sup> CoolSculpting<sup>®</sup> ELITE verfügt als einziger Kryolipolyseanbieter über eine FDA Zulassung der amerikanischen Gesundheitsbehörde.<sup>12</sup></p>
                                    </>
                                )}
                            />
                        </div>
                        <div>
                            <h3 className="font-kanedaGothic font-medium mb-[40px] text-[32px]">Der Behandlungsprozess</h3>
                            <FaqItem
                                question="Wie fühlt sich die CoolSculpting<sup>®</sup> ELITE Behandlung an?"
                                answer={(
                                    <>
                                        <p>Sobald die Abkühlung beginnt, erleben Sie in den ersten paar Minuten typischerweise ein starkes Kältegefühl. Dies sollte bald abklingen. Mögliche Nebenwirkungen während der Behandlung sind:</p>
                                        <ul className="list-disc pl-4 py-3">
                                            <li>
                                                <p>Empfindungen von Ziehen, Zupfen und leichtem Zwicken an der Behandlungsstelle<sup>1</sup></p>
                                            </li>
                                            <li>
                                                <p>Intensive Kälte, Kribbeln, Stechen, Schmerzen, Krämpfe<sup>1</sup></p>
                                            </li>
                                        </ul>
                                        <p>Unmittelbar nach der Behandlung erleben Sie möglicherweise Nebenwirkungen wie Rötung, Spannungsgefühl, vorübergehende Blässe und/oder leichte Blutergüsse an den Rändern des Behandlungsbereichs sowie Kribbeln und Stechen.<sup>1</sup> Die meisten Patient*innen können unmittelbar nach der Behandlung ihre tägliche Routine wieder aufnehmen.<sup>1,8,9</sup></p>
                                    </>
                                )}
                            />
                            <FaqItem
                                question="Was sollte ich meinem/meiner Arzt/Ärztin mitteilen?"
                                answer={(
                                    <>
                                        <p>Während Ihrer Erstkonsultation wird Ihr/e Arzt/Ärztin nach Ihrer Krankengeschichte fragen, um festzustellen, ob CoolSculpting<sup>®</sup> ELITE für Sie geeignet ist. Es ist wichtig, dass Sie Ihrem/Ihrer behandelnden Arzt/Ärztin mitteilen, ob Sie eine Kryoglobulinämie, eine Kälteagglutininerkrankung oder eine paroxysmale Erkältungshämoglobinurie haben, da Sie sich einer CoolSculpting<sup>®</sup> ELITE Behandlung nicht unterziehen sollten, wenn Sie an einer dieser Erkrankungen leiden.<sup>1</sup></p>
                                    </>
                                )}
                            />
                            <FaqItem
                                question="Wie lange dauert jede Behandlung? Wie viele Behandlungen sind nötig?"
                                answer={(
                                    <>
                                        <p>Die Dauer der einzelnen CoolSculpting<sup>®</sup> ELITE Behandlungssitzungen hängt davon ab, wie viele Körperstellen jeweils behandelt werden sollen. Ein Behandlungszyklus kann zwischen 35 und 45 Minuten dauern.<sup>1,9</sup> Für den Fall, dass Sie nur wenig Zeit haben, aber mehrere Bereiche mit unerwünschtem Fett behandelt werden sollen, verfügen einige Praxen sogar über mehrere CoolSculpting<sup>®</sup> ELITE Systeme. Ihr/e Arzt/Ärztin wird Ihnen den Ablauf erklären und feststellen, ob dies eine mögliche Alternative für Sie ist. Selbstverständlich können Sie mit Ihrem/Ihrer Arzt/Ärztin auch noch weitere Sitzungen oder Termine vereinbaren, um Ihre ganz persönliche Wunschfigur zu erreichen.</p>
                                    </>
                                )}
                            />
                        </div>
                        <div>
                            <h3 className="font-kanedaGothic font-medium mb-[40px] text-[32px]">Nach Ihrer CoolSculpting<sup className="font-avenirNext">®</sup> ELITE Behandlung</h3>
                            <FaqItem
                                question="Muss ich mit Nebenwirkungen rechnen?"
                                answer={(
                                    <div className="flex flex-col gap-8">
                                        <p>Während des Eingriffs können Empfindungen wie Ziehen, Zupfen, leichtes Zwicken, starke Kältegefühle, Kribbeln, Stechen, Schmerzen und Krämpfe an der Behandlungsstelle auftreten. Diese Empfindungen können nachlassen, wenn der Bereich taub wird.<sup>1</sup></p>
                                        <p>Unmittelbar nach dem Eingriff kann es zu Rötung und Spannungsgefühl, vorübergehende Blässe und/ oder leichte Prellungen an den Rändern des Behandlungs- bereichs, Kribbeln und Stechen kommen.<sup>1</sup></p>
                                        <p>Rötungen, Blutergüsse und Schwellung, Druckempfindlichkeit, Berührungsempfindlichkeit, Krämpfe und Schmerzen, Juckreiz, Hautempfindlichkeit, Kribbeln und Taubheitsgefühl können bis zu zwei Wochen anhalten; das Taubheitsgefühl u. U. einige Wochen. Nach Behandlung im submentalen Bereich kann es zu einem Völlegefühl im hinteren Rachenraum kommen.<sup>1*</sup></p>
                                        <p>Das CoolSculpting<sup>®</sup> ELITE Verfahren ist nicht für die Behandlung von Fettleibigkeit geeignet.<sup>7</sup></p>
                                        <p>Wie bei jeder medizinischen Behandlung auch, fragen Sie bitte Ihre/n Ärztin/Arzt, ob das CoolSculpting<sup>®</sup> ELITE Verfahren für Sie geeignet ist. Bei länger andauernden Beschwerden oder auch dem Auftreten anderer Symptome sollten Sie unverzüglich Kontakt mit Ihrem/Ihrer behandelnden Arzt/Ärztin aufnehmen.</p>
                                    </div>
                                )}
                            />
                            <FaqItem
                                question="Kann ich nach der Behandlung wieder zu meiner täglichen Routine übergehen?"
                                answer={(
                                    <>
                                        <p>Das CoolSculpting<sup>®</sup> ELITE Verfahren ist eine nicht-invasive Behandlungsmethode und geht in der Regel mit einer nur kurzen Erholungszeit einher,<sup>1</sup> sodass Sie fast sofort zu normalen Aktivitäten zurückkehren können. Die meisten Patient*innen können unmittelbar nach der Behandlung Ihre tägliche Routine wieder aufnehmen.<sup>1,8,9</sup> Dies variiert von Mensch zu Mensch und kann abhängig vom Behandlungsbereich sein.<sup>7,8,13</sup></p>
                                    </>
                                )}
                            />
                            <FaqItem
                                question="Meine CoolSculpting<sup>®</sup> ELITE Behandlung ist abgeschlossen. Wie geht es jetzt weiter?"
                                answer={(
                                    <div className="flex flex-col gap-4">
                                        <p>Planen Sie immer eine Nachuntersuchung mit Ihrem/Ihrer CoolSculpting<sup>®</sup> ELITE Arzt/Ärztin ein, um Ihre Ergebnisse zu überprüfen.</p>
                                        <div>
                                            <p>Darüber hinaus können Sie folgende Tipps nach der Behandlung beachten:</p>
                                            <p>Keine entzündungshemmenden Wirkstoffe:</p>
                                            <ul className="list-disc pl-4 py-3">
                                                <li>Verzichten Sie bitte so weit wie möglich auf Arzneimittel wie Ibuprofen oder auf Nahrungsmittel wie Kurkuma, Fischöl und Ingwer. Falls Sie nach der Behandlung Schmerzen haben sollten, können Sie nach Rücksprache mit Ihrem/Ihrer Arzt/Ärztin zum Beispiel Paracetamol einnehmen.</li>
                                                <li>Sie können bei Bedarf Kompressionswäsche tragen.</li>
                                                <li>Meiden Sie bitte in der ersten Woche die Sonne bzw. das direkte Sonnenbad.</li>
                                                <li>Massieren Sie morgens und abends die betroffene Stelle.</li>
                                                <li>Sport können Sie wie gewohnt ausüben. Ein aktiver Lebensstil mit regelmäßiger körperlicher Betätigung kann das Ergebnis sogar verbessern. Wir empfehlen zudem eine gesunde, ausgewogene Ernährung.</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1312px] mx-auto mt-[80px]">
                <FindPracticeBox />
            </div>
        </section>
    )
}
