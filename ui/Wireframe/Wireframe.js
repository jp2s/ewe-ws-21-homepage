import {renderComponentModal} from "../Modal/Modal.js";
import {
    renderCode,
    renderRequest,
    renderPagePreview
} from "../General/General.js";

const renderImagePreview = (imgSrc, classes, modalId) =>
    `
    <div class="${classes.imgPreviewWrapperClass}">
        <img src="${imgSrc}" class="${classes.imgPreviewClass}">
        ${renderComponentModal(
            classes,
        `<img src="${imgSrc}" class="${classes.imgClass}">`,
        classes.modalClass,
        `${modalId}ImageClass`
        )}
    </div>
    `

export const renderWireframe = (data, classes, modalId, hideCode = false) =>
    `
    <div class=${classes.wireframeWrapperClass}>
        ${renderRequest(data.requestText, classes)}
        ${renderImagePreview(data.imgSrc, classes, modalId)}
        ${renderPagePreview(data.wireframePageSrc, classes, modalId)}
        ${hideCode ? "" : renderCode(data.code, classes)}
    </div>
    `
