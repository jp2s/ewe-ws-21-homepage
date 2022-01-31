import {baseUrl} from "../util/url.js";
import {fetchCode} from "../util/code.js";
import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {renderWireframe} from "../ui/Wireframe/Wireframe.js";
import {modalIdGenerator} from "../util/generator.js";
import {defaultCodeClasses, defaultWireframeClasses} from "../util/classes.js";
import {renderCode} from "../ui/General/General.js";

const modalIds = modalIdGenerator();

export const tocNine = {
    content: [
        {
            title: "SVG Grafik von Hand erstellen",
            descriptions: [
                "Inline SVG",
                "Wireframe",
                "Hover Effect",
            ]
        },
        {
            title: "Statistik-Balkendiagramm in SVG",
            descriptions: [
                "Bar chart",
                "Animations"
            ]
        },
        {
            title: "Interaktive SVG Grafik",
            descriptions: [
                "Implementing Tic Tac Toe",
                "Game",
                "Animations"
            ]
        },
    ],
}

export const exerciseNine = {
    title: "Lerneinheit 9: Scalable Vector Graphics",
    tasks: [
        {
            title: "9.1. SVG Grafik von Hand erstellen (2 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Codieren Sie eine HTML-Datei mit Inline SVG, so dass sich folgendes Aussehen ergibt." +
                        "<br><br>" +
                        "Fügen Sie als Hover-Effekt eine CSS-Animation hinzu, die die Größe der SVG-Grafik verdoppelt, wenn man mit dem Cursor über die Grafik geht.",
                    imgSrc: `${baseUrl}/img/nine/9_1.png`,
                    wireframePageSrc: "../wireframes/u09-t1.html",
                    code: await fetchCode("../wireframes/u09-t1.html"),
                },
                defaultWireframeClasses,
                modalIds.next().value
            )
        },
        {
            title: "9.2. Statistik-Balkendiagramm in SVG (3 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Implementieren Sie ein eigenes Balkendiagramm mit HTML, Inline SVG, CSS und JavaScript. Geben Sie die Daten für das Balkendiagramm im JSON-Format vor. Nehmen Sie als Beispieldaten die COVID-19: Fallzahlen in Deutschland. Animieren Sie die Grafik (siehe z.B. Highchart Bar Chart).",
                        taskPageSrc: "../wireframes/u09-t2.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value,
                ),
            ]
        },
        {
            title: "9.3. Interaktive SVG Grafik (5 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Implementieren Sie das Spiel Tic-Tac-Toe als HTML-Datei mit Inline SVG, CSS und JavaScript. ",
                        taskPageSrc: "../wireframes/u09-t3.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value,
                ),
            ]
        }
    ]
}