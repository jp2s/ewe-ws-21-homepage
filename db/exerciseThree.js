import {fetchCode} from "../util/code.js";
import {renderWireframe} from "../ui/Wireframe/Wireframe.js";

export const tocThree = {
    content: [
        {
            title: "Responsiv mit Flexbox Desktop-First",
            descriptions: [
                "Wireframe with CSS",
                "Flexbox",
                "Responsiveness",
                "Desktop-First Approach",
            ]
        },
        {
            title: "Responsiv mit Grid Mobile-First",
            descriptions: [
                "Wireframe with CSS",
                "Grid",
                "Responsiveness",
                "Mobile-First Approach",
            ]
        },
        {
            title: "Responsiv mit Grid",
            descriptions: [
                "Wireframe with CSS",
                "Grid",
                "Responsiveness",
                "Desktop-First Approach",
                "Implementing a Landing Page",
            ]
        }
    ],
}

const wireframeClasses = {
    wireframeWrapperClass: "threeWireframeWrapperClass",
    requestClass: "threeTaskRequest",
    imgPreviewWrapperClass: "threeImgPreviewWrapperClass",
    imgPreviewClass: "threeImgPreviewClass",
    openButtonClass: "threeOpenButtonClass",
    closeButtonClass: "threeCloseButtonClass",
    modalClass: "threeModalClass",
    modalWrapper: "threeModalWrapper",
    imgClass: "threeImgClass",
    codeTitleClass: "threeCodeTitleClass",
    codeWrapperClass: "threeCodeWrapperClass",
    iframeTitleClass: "threeIframeTitleClass",
    wireframePagePreviewWrapperClass: "threeWireframePagePreviewWrapperClass",
    wireframePagePreviewClass: "threeWireframePagePreviewClass",
    wireframePageModalClass: "threeWireframePageModalClass",
    wireframePageModalWrapper: "threeWireframePageModalWrapper",
    wireframePageClass: "threeWireframePageClass",
}

export const exerciseThree = {
    title: "Lerneinheit 3: CSS 2. Teil / Responsive Web Design",
    tasks: [
        {
            title: "3.1. Responsiv mit Flexbox Desktop-First(3 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Implementieren Sie dann ausschließlich mit HTML und CSS Flexbox folgendes responsive Webdesign nach der Desktop-First-Strategie!",
                    imgSrc: "https://kaul.inf.h-brs.de/we/assets/img/holy-grail1.png",
                    wireframePageSrc: "../wireframes/u03-t1.html",
                    code: await fetchCode("../wireframes/u03-t1.html")
                },
                wireframeClasses,
                "firstModal",
            ),
        },
        {
            title: "3.2. Responsiv mit Grid Mobile-First(3 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Implementieren Sie dann das gleiche responsive Webdesign wie in Aufgabe 3.1 allerdings mit Grid und der Mobile-First-Strategie! Vermeiden Sie diesmal außerdem das Erscheinen von Scrollbars.",
                    imgSrc: "https://kaul.inf.h-brs.de/we/assets/img/holy-grail1.png",
                    wireframePageSrc: "../wireframes/u03-t2.html",
                    code: await fetchCode("../wireframes/u03-t2.html")
                },
                wireframeClasses,
                "secondModal"
            ),
        },
        {
            title: "3.3. Responsiv mit Grid(4 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Implementieren Sie folgende Landing Page responsiv mit Grid Layout. Vermeiden Sie außerdem das Erscheinen von Scrollbars so weit wie möglich.",
                    imgSrc: "https://kaul.inf.h-brs.de/we/assets/img/landing.png",
                    wireframePageSrc: "../wireframes/u03-t3.html",
                    code: await fetchCode("../wireframes/u03-t3.html")
                },
                wireframeClasses,
                "thirdModal"
            ),
        },
    ]
}