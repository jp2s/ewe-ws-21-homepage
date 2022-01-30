import {baseUrl} from "../util/url.js";
import {fetchCode} from "../util/code.js";
import {renderWireframe} from "../ui/Wireframe/Wireframe.js";
import {modalIdGenerator} from "../util/generator.js";

const modalIds = modalIdGenerator();

export const tocTwo = {
    content: [
        {
            title: "CSS Selektoren und CSS Farben",
            descriptions: [
                "Selectors",
                "Specificity",
                "Colors",
                "Color Conversion",
                "Hex, RGB, RGBA, HSL"
            ]
        },
        {
            title: "CSS Positionierung / First Part",
            descriptions: [
                "Wireframe with CSS",
                "Positioning with CSS",
                "Sticky Headlines",
                "Showing and hiding content",
            ]
        },
        {
            title: "CSS Positionierung / Second Part",
            descriptions: [
                "Wireframe with CSS",
                "Positioning with CSS",
                "Showing and hiding content",
            ]
        },
        {
            title: "Wireframe with HTML and CSS / First Part",
            descriptions: [
                "Wireframe with CSS",
                "Implementing a Survey Form",
                "Text Input",
                "Dropdown menus",
                "Radio Buttons",
                "Checkboxes",
            ]
        },
        {
            title: "Wireframe with HTML and CSS / Second Part",
            descriptions: [
                "Implementation Difficulties",
            ]
        },
    ],
}

const wireframeClasses = {
    wireframeWrapperClass: "twoWireframeWrapperClass",
    requestClass: "twoTaskRequest",
    imgPreviewWrapperClass: "twoImgPreviewWrapperClass",
    imgPreviewClass: "twoImgPreviewClass",
    openButtonClass: "twoOpenButtonClass",
    closeButtonClass: "twoCloseButtonClass",
    modalClass: "twoModalClass",
    modalWrapper: "twoModalWrapper",
    imgClass: "twoImgClass",
    codeTitleClass: "twoCodeTitleClass",
    codeWrapperClass: "twoCodeWrapperClass",
    iframeTitleClass: "twoIframeTitleClass",
    wireframePagePreviewWrapperClass: "twoWireframePagePreviewWrapperClass",
    wireframePagePreviewClass: "twoWireframePagePreviewClass",
    wireframePageModalClass: "twoWireframePageModalClass",
    wireframePageModalWrapper: "twoWireframePageModalWrapper",
    wireframePageClass: "twoWireframePageClass"
}

export const exerciseTwo = {
    title: "Lerneinheit 2: CSS 1. Teil",
    tasks: [
        {
            title: "2.1. CSS Selektoren und CSS Farben (2 Punkte)",
            text: [
                {
                    request: "<div style='margin-bottom: 16px;'>Berechnen Sie die Spezifität folgender CSS-Selektoren:</div>" +
                        "    1. <code>div div div:focus .inner</code><br>" +
                        "    2. <code>h1 + div.main</code><br>" +
                        "    3. <code>div a:link[href*='h-brs']</code><br>" +
                        "    4. <code>nav > a:hover::before</code><br>" +
                        "    5. <code>ul#primary-nav li.active</code>",
                    reply: "1. 023<br>" +
                        "2. 012<br>" +
                        "3. 022<br>" +
                        "4. 013<br>" +
                        "5. 112<br>",
                },
                {
                    request: "<div style='margin-bottom: 16px;'>Rechnen Sie folgende RGB-Werte in HSL-Werte um:</div>" +
                        "    1. <code style='color: #ffffff; background-color: midnightblue;'>#ffffff</code><br>" +
                        "    2. <code style='color: #ffffff; background-color: midnightblue;'>#000</code><br>" +
                        "    3. <code style='color: #ab0978;'>#ab0978</code><br>" +
                        "    4. <code style='color: rgb(127,255,33);'>rgb(127,255,33)</code><br>" +
                        "    5. <code style='color: rgba(255,127,33,0.8);'>rgba(255,127,33,0.8)</code><br>",
                    reply: "1. H: 0, S: 0, L: 100<br>" +
                        "2. H: 0, S: 0, L: 0<br>" +
                        "3. H: 319, S: 90, L: 35<br>" +
                        "4. H: 95, S: 100, L: 56<br>" +
                        "5. HSL besitzt keinen Alpha-Kanal. Für die Umwandlung benötigt man den HSLA-Farbraum.",
                },
            ]
        },
        {
            title: "2.2. CSS Positionierung (4 Punkte) / First Part",
            wireframe: renderWireframe(
                {
                    requestText: "Schauen Sie sich folgendes Video an und bauen Sie das dynamische Verhalten exakt nach (nur mit HTML und CSS, ohne JavaScript):",
                    imgSrc: `${baseUrl}/img/two/2_2a.png`,
                    wireframePageSrc: "../wireframes/u02-t2-1.html",
                    code: await fetchCode("../wireframes/u02-t2-1.html")
                },
                wireframeClasses,
                modalIds.next().value
            ),
        },
        {
            title: "2.2. CSS Positionierung (4 Punkte) / Second Part",
            wireframe: renderWireframe(
                {
                    requestText: "Schauen Sie sich folgendes Video an und bauen Sie das dynamische Verhalten exakt nach (nur mit HTML und CSS, ohne JavaScript):",
                    imgSrc: `${baseUrl}/img/two/2_2b.png`,
                    wireframePageSrc: "../wireframes/u02-t2-2.html",
                    code: await fetchCode("../wireframes/u02-t2-2.html")
                },
                wireframeClasses,
                modalIds.next().value
            ),
        },
        {
            title: "2.3. Wireframe with HTML and CSS (4 Punkte) / First Part",
            wireframe: renderWireframe(
                {
                    requestText: "Mit welchem HTML- und CSS-Code kann man diesen Wireframe exakt nachbilden? Schreiben Sie Ihren CSS-Code direkt in die HTML-Datei. Geben Sie Ihren HTML- und CSS-Quellcode zusammen in dieses Textfeld ein:",
                    imgSrc: `${baseUrl}/img/two/2_3.png`,
                    wireframePageSrc: "../wireframes/u02-t3.html",
                    code: await fetchCode("../wireframes/u02-t3.html")
                },
                wireframeClasses,
                modalIds.next().value
            ),
        },
        {
            title: "2.3. Wireframe with HTML and CSS (4 Punkte) / Second Part",
            text: [
                {
                    request: "Was war in der Lösung dieser Aufgabe die größte Schwierigkeit und wie haben Sie diese gelöst?",
                    reply: "Die größe Schwierigkeit war das Layout von dem Eingabeelement und dessen Bezeichner, also z.B. 'Name' und das Textfeld. Die beiden Elemente sind mittig an der vertikalen Achse orientiert und besitzen zu ihr denselben Abstand. Das habe ich mit dem 'text-align' Attribut gelöst, wobei ich das erste, linke Element auf 'right' gesetzt habe und das zweite, rechte Element auf 'left'. Zusätzlich habe ich noch beide auf 'width: 50%' gesetzt, damit sie denselben Platz verbrauchen.",
                },
            ]
        },
    ]
}