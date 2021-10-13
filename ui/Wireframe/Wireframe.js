import {renderComponentModal} from "../Modal/Modal.js";

const renderWireframeRequest = (requestText, requestClass) =>
    `
    <div class="${requestClass}">${requestText}</div>
    `

const renderImagePreview = (imgSrc, imgPreviewWrapperClass, imgPreviewClass, openButtonClass, closeButtonClass, modalClass, modalWrapper, imgClass) =>
    `
    <div class="${imgPreviewWrapperClass}">
        <img src=${imgSrc} class="${imgPreviewClass}">
        ${renderComponentModal(modalClass, modalWrapper, openButtonClass, closeButtonClass, `<img src="${imgSrc}" class="${imgClass}">`)}
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
    </div
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
        ${renderCode(data.code, codeWrapperClass)
        }
    </div>
    `

// export const renderComponentWireframe = (
//     query,
//     givenId,
//     givenClass,
//     data,
//     wireframeWrapperClass,
//     requestClass,
//     imgPreviewWrapperClass,
//     imgPreviewClass,
// ) => {
//     const current = document.querySelector(`script#${query}`);
//     const replacement = document.createElement("div");
//     replacement.setAttribute("id", givenId);
//     replacement.setAttribute("class", givenClass);
//     replacement.innerHTML = renderWireframe(
//         data,
//         wireframeWrapperClass,
//         requestClass,
//         imgPreviewWrapperClass,
//         imgPreviewClass);
//     current.parentNode.replaceChild(replacement, current)
// }