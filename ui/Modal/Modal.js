const toggleModal = (modalClass, show) =>
    show ? `document.getElementsByClassName('${modalClass}')[0].style.removeProperty('display');`
        : `document.getElementsByClassName('${modalClass}')[0].style.setProperty('display', 'none');`

const renderCloseButton = (modalClass) =>
    `
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
        onclick="${toggleModal(modalClass,false)}">close
    </div>
    `

const renderModal = (modalClass, modalWrapper, content) =>
    `
    <div class="${modalClass}" style="display: none;">
        <div class="${modalWrapper}">
            ${content}
            ${renderCloseButton(modalClass)}
        </div>
    </div>
    `

export const renderComponentModal = (modalClass, modalWrapper, buttonClass, content) =>
    `
    <div class="${buttonClass}" onclick="${toggleModal(modalClass,true)}">
        click to expand
    </div>
    ${renderModal(modalClass, modalWrapper, content)}
    `
