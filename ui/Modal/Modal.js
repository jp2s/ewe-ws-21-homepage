const toggleModal = (modalClass, show) =>
    show ? `document.getElementsByClassName('${modalClass}')[0].style.removeProperty('display');`
        : `document.getElementsByClassName('${modalClass}')[0].style.setProperty('display', 'none');`

const renderCloseButton = (modalClass, closeButtonClass) =>
    `
    <div class="${closeButtonClass}" onclick="${toggleModal(modalClass,false)}">
        close
    </div>
    `

const renderModal = (modalClass, modalWrapper, closeButtonClass, content) =>
    `
    <div class="${modalClass}" style="display: none;">
        <div class="${modalWrapper}">
            ${content}
            ${renderCloseButton(modalClass, closeButtonClass)}
        </div>
    </div>
    `

export const renderComponentModal = (modalClass, modalWrapper, openButtonClass, closeButtonClass, content) =>
    `
    <div class="${openButtonClass}" onclick="${toggleModal(modalClass,true)}">
        click to expand
    </div>
    ${renderModal(modalClass, modalWrapper, closeButtonClass, content)}
    `
