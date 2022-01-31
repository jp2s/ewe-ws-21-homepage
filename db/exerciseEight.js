import {baseUrl} from "../util/url.js";
import {fetchCode} from "../util/code.js";
import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {renderWireframe} from "../ui/Wireframe/Wireframe.js";
import {modalIdGenerator} from "../util/generator.js";
import {defaultWireframeClasses} from "../util/classes.js";

const modalIds = modalIdGenerator();

export const tocEight = {
    content: [
        {
            title: "Promises",
            descriptions: [
                "fetch",
                "merging text",
                "without async / await"
            ]
        },
        {
            title: "async / await",
            descriptions: [
                "previous task but with async / await"
            ]
        },
        {
            title: "WWW-Navigator",
            descriptions: [
                "Content from JSON-File",
                "Full Website",
                "Site for Web Topics",
                "Menus and Submenus",
                "Responsive Layout"
            ]
        },
    ],
}

export const exerciseEight = {
    title: "Lerneinheit 8: Async",
    tasks: [
        {
            title: "8.1. Promises (3 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Erstellen Sie auf Ihrem Server www2.inf.h-brs.de (oder localhost) zwei Text-Dateien A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig auf Korrektheit. Verwenden Sie dabei ausschließlich die Promise API ohne async / await.",
                        taskPageSrc: "../wireframes/u08-t1.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value
                )
            ]
        },
        {
            title: "8.2. async / await (3 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Lösen Sie die letzte Aufgabe mit async / await statt Promise. ",
                        taskPageSrc: "../wireframes/u08-t2.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value
                )
            ]
        },
        {
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
                modalIds.next().value
            )
        }
    ]
}