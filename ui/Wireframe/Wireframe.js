import {renderComponentModal} from "../Modal/Modal.js";

const renderWireframeRequest = (requestText, requestClass) =>
    `
    <div class="${requestClass}">${requestText}</div>
    `

const renderImagePreview = (imgSrc, imgPreviewWrapperClass, imgPreviewClass, buttonClass, modalClass, modalWrapper, imgClass) =>
    `
    <div class="${imgPreviewWrapperClass}">
        <img src=${imgSrc} class="${imgPreviewClass}">
        ${renderComponentModal(modalClass, modalWrapper, buttonClass, `<img src="${imgSrc}" class="${imgClass}">`)}
    </div>
    `

export const renderWireframe = (
    data,
    wireframeWrapperClass,
    requestClass,
    imgPreviewWrapperClass,
    imgPreviewClass,
    buttonClass,
    modalClass,
    modalWrapper,
    imgClass,
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
            buttonClass,
            modalClass,
            modalWrapper,
            imgClass,
        )}
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