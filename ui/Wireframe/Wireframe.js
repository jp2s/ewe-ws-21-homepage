import {renderComponentModal} from "../Modal/Modal.js";

const renderWireframeRequest = (requestText, requestClass) =>
    `
    <div class="${requestClass}">${requestText}</div>
    `

const renderImagePreview = (
    imgSrc,
    imgPreviewWrapperClass,
    imgPreviewClass,
    openButtonClass,
    closeButtonClass,
    modalClass,
    modalWrapper,
    imgClass
) =>
    `
    <div class="${imgPreviewWrapperClass}">
        <img src=${imgSrc} class="${imgPreviewClass}">
        ${renderComponentModal(
            modalClass, modalWrapper, 
            openButtonClass, 
            closeButtonClass, `<img src="${imgSrc}" class="${imgClass}">`
        )}
    </div>
    `

const renderCode = (codeData, codeWrapperClass) =>
    `
    <div class="${codeWrapperClass}">
        <pre>
            <code>        
                ${codeData} 
            </code>
        </pre>
    </div>
    `

const renderIframe = (iframeSrc, iframeWrapperClass, iframeTitleClass, iframeClass) =>
    `
    <div class="${iframeWrapperClass}">
        <div class="${iframeTitleClass}">Rendered:</div>
        <iframe width="100%" height="100%" src="${iframeSrc}" class="${iframeClass}"></iframe>
    </div>
    `

export const renderWireframe = (
    data,
    wireframeWrapperClass,
    requestClass,
    imgPreviewWrapperClass,
    imgPreviewClass,
    openButtonClass,
    closeButtonClass,
    modalClass,
    modalWrapper,
    imgClass,
    codeWrapperClass,
    iframeSrc,
    iframeWrapperClass,
    iframeTitleClass,
    iframeClass,
) =>
    `
    <div class=${wireframeWrapperClass}>
        ${renderWireframeRequest(
            data.requestText,
            requestClass,
        )}
        ${renderImagePreview(
            data.imgSrc,
            imgPreviewWrapperClass,
            imgPreviewClass,
            openButtonClass,
            closeButtonClass,
            modalClass,
            modalWrapper,
            imgClass,
        )}
        ${renderCode(data.code, codeWrapperClass)}
        ${renderIframe(
            iframeSrc, 
            iframeWrapperClass,
            iframeTitleClass,
            iframeClass,
        )}
    </div>
    `
