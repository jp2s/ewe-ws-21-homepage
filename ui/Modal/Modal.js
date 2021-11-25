const toggleModal = (fullModalId, show) =>
    show ? `document.getElementsByClassName('${fullModalId}')[0].style.removeProperty('display');`
        : `document.getElementsByClassName('${fullModalId}')[0].style.setProperty('display', 'none');`

const renderCloseButton = (classes, givenModalClass) =>
    `
    <div 
        class="${classes.closeButtonClass}" 
        onclick="${toggleModal(givenModalClass,false)}">
            close
    </div>
    `

const renderModal = (classes, content, givenModalClass, fullModalId) =>
    `
    <div class="${givenModalClass} ${fullModalId}" style="display: none;">
        <div class="${classes.modalWrapper}">
            ${content}
            ${renderCloseButton(classes, fullModalId)}
        </div>
    </div>
    `

export const renderComponentModal = (classes, content, givenModalClass, fullModalId) =>
    `
    <div 
        class="${classes.openButtonClass}" 
        onclick="${toggleModal(fullModalId,true)}">
            click to expand
    </div>
    ${renderModal(classes, content, givenModalClass, fullModalId)}
    `
