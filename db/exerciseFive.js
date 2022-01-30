import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {modalIdGenerator} from "../util/generator.js";
import {renderCode} from "../ui/General/General.js";
import {fetchCode} from "../util/code.js";

const modalIds = modalIdGenerator();

export const tocFive = {
    content: [
        {
            title: "Rednerliste mit Zeitmessung",
            descriptions: [
                "Stopwatch",
                "Timer",
                "DOM API",
                "setInterval",
            ]
        },
    ],
}

const codeClasses = {
    codeTitleClass: "fiveCodeTitleClass",
    codeWrapperClass: "fiveCodeWrapperClass"
}

const wireframeClasses = {
    wireframeWrapperClass: "fiveWireframeWrapperClass",
    taskPageWrapperClass: "fiveWireframeWrapperClass",
    requestClass: "fiveTaskRequest",
    imgPreviewWrapperClass: "fiveImgPreviewWrapperClass",
    imgPreviewClass: "fiveImgPreviewClass",
    openButtonClass: "fiveOpenButtonClass",
    closeButtonClass: "fiveCloseButtonClass",
    modalClass: "fiveModalClass",
    modalWrapper: "fiveModalWrapper",
    imgClass: "fiveImgClass",
    codeTitleClass: "fiveCodeTitleClass",
    codeWrapperClass: "fiveCodeWrapperClass",
    iframeTitleClass: "fiveIframeTitleClass",
    wireframePagePreviewContainerClass: "fiveWireframePagePreviewContainerClass",
    wireframePagePreviewWrapperClass: "fiveWireframePagePreviewWrapperClass",
    wireframePagePreviewClass: "fiveWireframePagePreviewClass",
    wireframePageModalClass: "fiveWireframePageModalClass",
    wireframePageModalWrapper: "fiveWireframePageModalWrapper",
    wireframePageClass: "fiveWireframePageClass",
    wireframePageRefClass: "fiveWireframePageRefClass"
}

export const exerciseFive = {
    title: "Lerneinheit 5: DOM",
    tasks: [
        {
            title: "5.2. Rednerliste mit Zeitmessung (5 Punkte)",
            text: [
                {
                    request: "JavaScript-Quelltext aus der separaten Datei",
                    reply: renderCode(await fetchCode("../wireframes/u05-t2.js"), codeClasses)
                }
            ],
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Implementieren Sie die interaktive Anwendung \"Rednerliste mit Zeitmessung\" selbstständig in JavaScript durch Nutzung der DOM API und der Timer-Funktionen. Neue Redner sollen auf Knopfdruck hinzugefügt werden können. Deren Uhr wird dann sofort automatisch gestartet und alle anderen Uhren angehalten. Bei jedem Redner soll die individuelle, gemessene Redezeit sekundengenau angezeigt werden. Für jeden Redner soll es einen eigenen Start-/Stopp-Button geben. Es soll immer nur eine Uhr laufen. Angezeigt werden sollen die bisherigen Summenzeiten aller Redebeiträge der betreffenden Person. Suchen Sie eine möglichst kurze und elegante Lösung. Achten Sie gleichzeitig auf gute Usability: z.B. wenn die Eingabe mit einem Return beendet wird, soll der Button-Click nicht mehr erforderlich sein, usw.",
                        taskPageSrc: "../wireframes/u05-t2.html"
                    },
                    wireframeClasses,
                    modalIds.next().value
                )
            ]
        }
    ]
}