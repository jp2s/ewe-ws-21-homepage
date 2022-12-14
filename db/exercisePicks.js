import {tocSix} from "./exerciseSix.js";
import {baseUrl} from "../util/url.js";
import {tocFive} from "./exerciseFive.js";
import {tocNine} from "./exerciseNine.js";
import {tocEight} from "./exerciseEight.js";
import {tocEleven} from "./exerciseEleven.js";
import {fetchCode} from "../util/code.js";
import {renderCode} from "../ui/General/General.js";
import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {renderWireframe} from "../ui/Wireframe/Wireframe.js";
import {modalIdGenerator} from "../util/generator.js";
import {defaultCodeClasses, defaultWireframeClasses} from "../util/classes.js";

const modalIds = modalIdGenerator();

export const tocPicks = {
    content: [
        tocNine.content[2],
        tocEight.content[2],
        tocEleven.content[2],
        tocSix.content[0],
        tocSix.content[1],
        tocFive.content[0]
    ],
}

export const exercisePicks = {
    showStar: true,
    title: "My personal picks for the best Exercise solutions",
    tasks: [
        {
            showStar: true,
            title: "9.3. Interaktive SVG Grafik (5 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Implementieren Sie das Spiel Tic-Tac-Toe als HTML-Datei mit Inline SVG, CSS und JavaScript. ",
                        taskPageSrc: "../wireframes/u09-t3.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value,
                    true
                ),
            ],
        },
        {
            showStar: true,
            title: "8.3. WWW-Navigator (4 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Schreiben Sie einen Navigator für die Fachbegriffe des WWW zu den Oberthemen HTML, CSS und JavaScript. Im Hauptmenü sollen diese 3 Oberthemen zur Auswahl stehen. Im Untermenü soll eine zugehörige Liste von Fachbegriffen zum jeweiligen ausgewählten Oberthema stehen. In der Mitte soll eine Dokumentation zum ausgewählten Fachbegriff erscheinen." +
                        "<br><br>" +
                        "Schreiben Sie in HTML und CSS nur den responsiven Rahmen für einen solchen WWW-Navigator. Dabei können Sie auch ein schöneres Layout als das hier gezeigte erstellen. Die Inhalte sollen in einer JSON-Datei extern gelagert werden. Mit der fetch-API soll die JSON-Datei asynchron nicht-blockierend geladen werden, und zwar nur einmal, nicht mehrfach. (d.h. Sparen Sie Internet-Bandbreite.) Sobald die Inhalte angekommen sind, sollen sie im Browser auch sofort angezeigt werden.\n" +
                        "<br><br>" +
                        "Fügen Sie selbst in die JSON-Datei zusätzliche Inhalte zu Themen der Vorlesung als Strings beispielhaft ein. Wenn Sie Inhalte aus fremden Quellen kopieren, so schreiben Sie bitte stets die Quelle als externe Ressource hinzu. Diese soll dann auf der rechten Seite im WWW-Navigator erscheinen.",
                    imgSrc: `${baseUrl}/img/eight/8_3.png`,
                    wireframePageSrc: "../wireframes/u08-t3.html",
                    code: await fetchCode("../wireframes/u08-t3.html"),
                },
                defaultWireframeClasses,
                modalIds.next().value,
                true
            )
        },
        {
            showStar: true,
            title: "11.3: Vue.js WWW-Navigator (5 Punkte)",
            text: [
                {
                    request: "Schreiben Sie Ihren WWW-Navigator als SPA in Vue.js" +
                        "<br><br>" +
                        "Dokumentieren Sie Ihren Entscheidungsprozess: In welche Komponenten wollen Sie Ihre App zerlegen? Wie soll das State Management implementiert werden?",
                    reply: "Die Seite habe ich in mehrere Komponenten unterteilt. Diese bestehen aus einem 'Header' für die Navigation der Seiten, der wiederum aus 'Menu-Entries' besteht. Der eigentliche Seiteninhalt ist 'Content', der ebenfalls aus 'Menu-Entries' für die Unterseiten besteht, sowie einem 'Content-Frame'. Dieses 'Content-Frame' zeigt den Text der Unterseite samt Referenz an.\n" +
                        "<br><br>" +
                        "Das State Management besteht aus einer Setter-Methode in der Parent-Komponente und einer Event-Handler Property in der Child-Komponente, die diese Methode dann aufruft. Somit kann beim Klicken auf einen Menüeintrag der State vom Menu-Index geändert werden. Die einzelnen Seiten werden dann mittels Conditional-Rendering auf Basis von diesem Index angezeigt.",
                },
                {
                    request: "ContentComp.js:",
                    reply: renderCode(await fetchCode("../wireframes/ContentComp.js"), defaultCodeClasses)
                },
                {
                    request: "ContentFrameComp.js:",
                    reply: renderCode(await fetchCode("../wireframes/ContentFrameComp.js"), defaultCodeClasses)
                },
                {
                    request: "ContentMenu.js:",
                    reply: renderCode(await fetchCode("../wireframes/ContentMenu.js"), defaultCodeClasses)
                },
                {
                    request: "HeaderComp.js:",
                    reply: renderCode(await fetchCode("../wireframes/HeaderComp.js"), defaultCodeClasses)
                },
                {
                    request: "MenuEntryComp.js:",
                    reply: renderCode(await fetchCode("../wireframes/MenuEntryComp.js"), defaultCodeClasses)
                },
            ],
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Geben Sie die Webseite, auf der Sie Ihre Komponente mehrfach testen, hier ein:",
                        taskPageSrc: "../wireframes/u11-t3.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value
                )
            ]
        },
        {
            showStar: true,
            title: "6.1. Klammerpaare (2 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Schreiben Sie eine Webseite, in die man eine Zeichenkette mit beliebigen Buchstaben, Zahlen und Sonderzeichen eingeben kann, die beliebig geschachtelte Klammern [...], (...) und {...} enthält, so dass sofort geprüft wird, ob alle Klammerpaare korrekt geschachtelt sind. Das Eingabefeld der Zeichenkette soll rot gefärbt werden, wenn es ein Klammerpaar gibt, das falsch geschachtelt ist.",
                        taskPageSrc: "../wireframes/u06-t1.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value,
                    true
                )
            ]
        },
        {
            showStar: true,
            title: "6.2. Topologische Iterierbarkeit (2 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Betten Sie Ihren ECMAScript-Code in eine Webseite ein, so dass man die Vorrangrelation dort eingeben kann. Geben Sie hier die HTML-Seite an:",
                        taskPageSrc: "../wireframes/u06-t2.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value,
                    true
                )
            ],
        },
        {
            showStar: true,
            title: "5.2. Rednerliste mit Zeitmessung (5 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Implementieren Sie die interaktive Anwendung \"Rednerliste mit Zeitmessung\" selbstständig in JavaScript durch Nutzung der DOM API und der Timer-Funktionen. Neue Redner sollen auf Knopfdruck hinzugefügt werden können. Deren Uhr wird dann sofort automatisch gestartet und alle anderen Uhren angehalten. Bei jedem Redner soll die individuelle, gemessene Redezeit sekundengenau angezeigt werden. Für jeden Redner soll es einen eigenen Start-/Stopp-Button geben. Es soll immer nur eine Uhr laufen. Angezeigt werden sollen die bisherigen Summenzeiten aller Redebeiträge der betreffenden Person. Suchen Sie eine möglichst kurze und elegante Lösung. Achten Sie gleichzeitig auf gute Usability: z.B. wenn die Eingabe mit einem Return beendet wird, soll der Button-Click nicht mehr erforderlich sein, usw.",
                        taskPageSrc: "../wireframes/u05-t2.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value,
                    true
                )
            ]
        },
    ]
}