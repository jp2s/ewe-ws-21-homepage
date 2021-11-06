const toggleModal = (classes, show) =>
    show ? `document.getElementsByClassName('${classes.modalClass}')[0].style.removeProperty('display');`
        : `document.getElementsByClassName('${classes.modalClass}')[0].style.setProperty('display', 'none');`

const renderCloseButton = (classes) =>
    `
    <div 
        class="${classes.closeButtonClass}" 
        onclick="${toggleModal(classes,false)}">
            close
    </div>
    `

const renderModal = (classes, content) =>
    `
    <div class="${classes.modalClass}" style="display: none;">
        <div class="${classes.modalWrapper}">
            ${content}
            ${renderCloseButton(classes)}
        </div>
    </div>
    `

export const renderComponentModal = (classes, content) =>
    `
    <div 
        class="${classes.openButtonClass}" 
        onclick="${toggleModal(classes,true)}">
            click to expand
    </div>
    ${renderModal(classes, content)}
    `
