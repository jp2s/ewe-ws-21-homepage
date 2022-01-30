import {renderComponentModal} from "../Modal/Modal.js";

export const renderRequest = (requestText, classes) =>
    `
    <div class="${classes.requestClass}">${requestText}</div>
    `

export const renderCode = (code, classes) =>
    `
    <div style="width: 100%; height: 100%;">
        <div class="${classes.codeTitleClass}">Code:</div>
        <div class="${classes.codeWrapperClass}">
            <code>
                <pre>${code}</pre>
            </code>
        </div>
    </div>
    `

export const renderPagePreview = (wireframePageSrc, classes, modalId) =>
    `
    <div style="width: 100%; height: 100%;" class="${classes.wireframePagePreviewContainerClass} container">
        <div class="${classes.iframeTitleClass}">
            Rendered Code:
        </div>
        <div class="${classes.wireframePagePreviewWrapperClass}">
            <iframe 
                src="${wireframePageSrc}" 
                class="${classes.wireframePagePreviewClass}" 
                frameBorder="0">
            </iframe>
            ${renderComponentModal(
                classes,
                `<iframe 
                    src="${wireframePageSrc}" 
                    class="${classes.wireframePageClass}">
                </iframe>`,
                classes.wireframePageModalClass,
                `${modalId}WireframepageClass`
            )}
        </div>
        <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="${wireframePageSrc}"
            style="text-decoration: none"
            class="${classes.wireframePageRefClass}">
            View full Page
        </a>
    </div>
    `