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
        <img src="${imgSrc}" class="${imgPreviewClass}">
        ${renderComponentModal(
            modalClass, modalWrapper, 
            openButtonClass, 
            closeButtonClass, `<img src="${imgSrc}" class="${imgClass}">`
        )}
    </div>
    `

const renderCode = (codeData, codeTitleClass, codeWrapperClass) =>
    `
    <div style="width: 100%; height: 100%;">
        <div class="${codeTitleClass}">Wireframe Code:</div>
        <div class="${codeWrapperClass}">
            <pre>
                <code>        
                    ${codeData} 
                </code>
            </pre>
        </div>
    </div>
    `

// const renderIframe = (iframeSrc, iframeWrapperClass, iframeTitleClass, iframeClass) =>
//     `
//     <div class="${iframeWrapperClass}">
//         <div class="${iframeTitleClass}">Rendered:</div>
//         <iframe width="100%" height="100%" src="${iframeSrc}" class="${iframeClass}"></iframe>
//     </div>
//     `

const renderWireframePagePreview = (
    iframeTitleClass,
    wireframePageSrc,
    wireframePagePreviewWrapperClass,
    wireframePagePreviewClass,
    openButtonClass,
    closeButtonClass,
    wireframePageModalClass,
    wireframePageModalWrapper,
    wireframePageClass
) =>
    `
    <div style="width: 100%; height: 100%;">
        <div class="${iframeTitleClass}">Rendered Wireframe Code:</div>
        <div class="${wireframePagePreviewWrapperClass}">
            <iframe src="${wireframePageSrc}" class="${wireframePagePreviewClass}" frameBorder="0"></iframe>
            ${renderComponentModal(
                wireframePageModalClass, 
                wireframePageModalWrapper,
                openButtonClass,
                closeButtonClass, `<iframe src="${wireframePageSrc}" class="${wireframePageClass}"></iframe>`
            )}
        </div>
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
    codeTitleClass,
    codeWrapperClass,
    iframeTitleClass,
    wireframePageSrc,
    wireframePagePreviewWrapperClass,
    wireframePagePreviewClass,
    wireframePageModalClass,
    wireframePageModalWrapper,
    wireframePageClass
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
        ${renderCode(data.code, codeTitleClass, codeWrapperClass)}
        ${renderWireframePagePreview(
            iframeTitleClass,
            wireframePageSrc,
            wireframePagePreviewWrapperClass,
            wireframePagePreviewClass,
            openButtonClass,
            closeButtonClass,
            wireframePageModalClass,
            wireframePageModalWrapper,
            wireframePageClass
        )}
    </div>
    `
