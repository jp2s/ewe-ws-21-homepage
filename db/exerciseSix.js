import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {modalIdGenerator} from "../util/generator.js";
import {renderCode} from "../ui/General/General.js";
import {fetchCode} from "../util/code.js";

const modalIds = modalIdGenerator();

export const tocSix = {
    content: [
        {
            title: "Klammerpaare",
            descriptions: [
                "Nesting Brackets",
                "Types of Brackets: ( ), { }, [ ]",
                "Testing with console.assert"
            ]
        },
        {
            title: "Topologische Iterierbarkeit",
            descriptions: [
                "Top Sort",
                "Classes",
                "Constructor",
                "next()",
                "Testing with console.assert"
            ]
        },
        {
            title: "Topologischer Generator",
            descriptions: [
                "Top Sort",
                "Generator",
                "yield",
                "next().value",
                "Testing with console.assert"
            ]
        },
        {
            title: "Proxy",
            descriptions: [
                "Top Sort",
                "Classes",
                "Constructor",
                "next()",
                "Testing with console.assert"
            ]
        },
    ],
}

const codeClasses = {
    codeTitleClass: "sixCodeTitleClass",
    codeWrapperClass: "sixCodeWrapperClass"
}

const wireframeClasses = {
    wireframeWrapperClass: "sixWireframeWrapperClass",
    taskPageWrapperClass: "sixWireframeWrapperClass",
    requestClass: "sixTaskRequest",
    imgPreviewWrapperClass: "sixImgPreviewWrapperClass",
    imgPreviewClass: "sixImgPreviewClass",
    openButtonClass: "sixOpenButtonClass",
    closeButtonClass: "sixCloseButtonClass",
    modalClass: "sixModalClass",
    modalWrapper: "sixModalWrapper",
    imgClass: "sixImgClass",
    codeTitleClass: "sixCodeTitleClass",
    codeWrapperClass: "sixCodeWrapperClass",
    iframeTitleClass: "sixIframeTitleClass",
    wireframePagePreviewContainerClass: "sixWireframePagePreviewContainerClass",
    wireframePagePreviewWrapperClass: "sixWireframePagePreviewWrapperClass",
    wireframePagePreviewClass: "sixWireframePagePreviewClass",
    wireframePageModalClass: "sixWireframePageModalClass",
    wireframePageModalWrapper: "sixWireframePageModalWrapper",
    wireframePageClass: "sixWireframePageClass",
    wireframePageRefClass: "sixWireframePageRefClass"
}

export const exerciseSix = {
    title: "Lerneinheit 6: ECMAScript",
    tasks: [
        {
            title: "6.1. Klammerpaare (2 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Schreiben Sie eine Webseite, in die man eine Zeichenkette mit beliebigen Buchstaben, Zahlen und Sonderzeichen eingeben kann, die beliebig geschachtelte Klammern [...], (...) und {...} enth??lt, so dass sofort gepr??ft wird, ob alle Klammerpaare korrekt geschachtelt sind. Das Eingabefeld der Zeichenkette soll rot gef??rbt werden, wenn es ein Klammerpaar gibt, das falsch geschachtelt ist.",
                        taskPageSrc: "../wireframes/u06-t1.html"
                    },
                    wireframeClasses,
                    modalIds.next().value
                )
            ]
        },
        {
            title: "6.2. Topologische Iterierbarkeit (2 Punkte)",
            text: [
                {
                    request: "Geben Sie hier Ihren ECMAScript-Code inkl. Tests ein. Verwenden Sie f??r Ihre Tests die Funktion console.assert.",
                    reply: renderCode(await fetchCode("../wireframes/u06-t2.js"), codeClasses)
                }
            ],
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Betten Sie Ihren ECMAScript-Code in eine Webseite ein, so dass man die Vorrangrelation dort eingeben kann. Geben Sie hier die HTML-Seite an:",
                        taskPageSrc: "../wireframes/u06-t2.html"
                    },
                    wireframeClasses,
                    modalIds.next().value
                )
            ]
        },
        {
            title: "6.3. Topologischer Generator (2 Punkte)",
            text: [
                {
                    request: "Stellen Sie bei Ihrer Klasse aus der letzten Aufgabe die topologische Iterierbarkeit mittels Generator her.\n" +
                        "<br>" +
                        "W??hlen Sie eine Implementierung, die universell g??ltig, also nicht nur f??r das Beispiel gilt.",
                    reply: renderCode(await fetchCode("../wireframes/u06-t3.js"), codeClasses)
                }
            ]
        },
        {
            title: "6.4. Proxy (2 Punkte)",
            text: [
                {
                    request: "Erweitern Sie Ihre Vorrang-Klasse um Logging, indem Sie ein Proxy einf??gen. Lassen Sie sich vom Logger bei jedem Schritt ausgeben, wie viele der Vorrangrelationen noch ??brig bleiben. Verwenden Sie so weit wie m??glich High-Level-Methoden wie Object.keys und High-Level-Datenstrukturen wie Map und Set und deren Methoden, anstatt m??hsam von Hand zu iterieren und zu z??hlen.",
                    reply: renderCode(await fetchCode("../wireframes/u06-t4.js"), codeClasses)
                }
            ]
        }
    ]
}