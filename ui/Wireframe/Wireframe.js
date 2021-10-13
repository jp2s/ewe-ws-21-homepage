const toggleModal = (modalClass, show) =>
    show ? `document.getElementsByClassName('${modalClass}')[0].style.removeProperty('display');`
        : `document.getElementsByClassName('${modalClass}')[0].style.setProperty('display', 'none');`

const renderModal = (modalClass, modalWrapper, imgSrc, imgClass,) =>
    `
        <div class="${modalClass}" style="display: none;">
        <div class="${modalWrapper}">
            <img src="${imgSrc}" class="${imgClass}">
            <div style="
                cursor: pointer;
                font-family: appleGaramondBoldItalic;
                font-size: 30px;
                text-align: center;
                color: black;
                border: 4px solid purple;
                background: rgba(255, 255, 255, 0.8);
                width: 30%;
                padding-top: 4px;
                padding-bottom: 4px;
            "
            onclick="${toggleModal(modalClass,false)}"
            >close</div>
        </div>
        </div>
    `

const renderImagePreview = (imgSrc, imgPreviewWrapperClass, imgPreviewClass, buttonClass, modalClass, modalWrapper, imgClass) =>
    `
    <div class="${imgPreviewWrapperClass}">
        <img src=${imgSrc} class="${imgPreviewClass}">
        <div class="${buttonClass}" onclick="${toggleModal(modalClass,true)}">
            click to expand
        </div>
        ${renderModal(modalClass, modalWrapper, imgSrc, imgClass)}
    </div>
    `

const renderWireframeRequest = (requestText, requestClass) =>
    `
    <div class="${requestClass}">${requestText}</div>
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

export const renderComponentWireframe = (
    query,
    givenId,
    givenClass,
    data,
    wireframeWrapperClass,
    requestClass,
    imgPreviewWrapperClass,
    imgPreviewClass,
) => {
    const current = document.querySelector(`script#${query}`);
    const replacement = document.createElement("div");
    replacement.setAttribute("id", givenId);
    replacement.setAttribute("class", givenClass);
    replacement.innerHTML = renderWireframe(
        data,
        wireframeWrapperClass,
        requestClass,
        imgPreviewWrapperClass,
        imgPreviewClass);
    current.parentNode.replaceChild(replacement, current)
}