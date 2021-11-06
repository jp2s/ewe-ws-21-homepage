const toggleModal = (givenModalClass, show) =>
    show ? `document.getElementsByClassName('${givenModalClass}')[0].style.removeProperty('display');`
        : `document.getElementsByClassName('${givenModalClass}')[0].style.setProperty('display', 'none');`

const renderCloseButton = (classes, givenModalClass) =>
    `
    <div 
        class="${classes.closeButtonClass}" 
        onclick="${toggleModal(givenModalClass,false)}">
            close
    </div>
    `

const renderModal = (classes, content, givenModalClass) =>
    `
    <div class="${givenModalClass}" style="display: none;">
        <div class="${classes.modalWrapper}">
            ${content}
            ${renderCloseButton(classes, givenModalClass)}
        </div>
    </div>
    `

export const renderComponentModal = (classes, content, givenModalClass) =>
    `
    <div 
        class="${classes.openButtonClass}" 
        onclick="${toggleModal(givenModalClass,true)}">
            click to expand
    </div>
    ${renderModal(classes, content, givenModalClass)}
    `
