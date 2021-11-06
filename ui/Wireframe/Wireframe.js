import {renderComponentModal} from "../Modal/Modal.js";

const renderWireframeRequest = (requestText, classes) =>
    `
    <div class="${classes.requestClass}">${requestText}</div>
    `

const renderImagePreview = (imgSrc, classes) =>
    `
    <div class="${classes.imgPreviewWrapperClass}">
        <img src="${imgSrc}" class="${classes.imgPreviewClass}">
        ${renderComponentModal(
            classes,
        `<img src="${imgSrc}" class="${classes.imgClass}">`
        )}
    </div>
    `

const renderCode = (code, classes) =>
    `
    <div style="width: 100%; height: 100%;">
        <div class="${classes.codeTitleClass}">Wireframe Code:</div>
        <div class="${classes.codeWrapperClass}">
            <pre>
                <code>        
                    ${code} 
                </code>
            </pre>
        </div>
    </div>
    `

const renderWireframePagePreview = (wireframePageSrc, classes) =>
    `
    <div style="width: 100%; height: 100%;">
        <div class="${classes.iframeTitleClass}">
            Rendered Wireframe Code:
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
                </iframe>`
            )}
        </div>
    </div>
    `

export const renderWireframe = (data, classes,) =>
    `
    <div class=${classes.wireframeWrapperClass}>
        ${renderWireframeRequest(data.requestText, classes)}
        ${renderImagePreview(data.imgSrc, classes)}
        ${renderCode(data.code, classes)}
        ${renderWireframePagePreview(data.wireframePageSrc, classes)}
    </div>
    `
