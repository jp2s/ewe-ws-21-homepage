import {goToTask} from "../../util/redirect.js";

const renderContent = (content, classes, index) =>
    `
     <div class="${classes.tocContentWrapper}">
        <div 
            class="${classes.tocTitle}"
            onclick="${goToTask(index)}"
        >
            ${content.title}
        </div>
        ${content.descriptions.map(description =>
            `
            <div class="${classes.tocDescription}">
                ${description}
            </div>
            `
        ).join("")}
    </div>
    `

const renderTable = (data, classes) =>
    `
    <div class="${classes.tocListWrapper}">
        ${data.content.map((content, index) => 
            renderContent(content, classes, index)
        ).join("")}
    </div>
    `

export const renderTableOfContents = (data, classes) =>
    `
    <div class="${classes.tocWrapperClass}">
        ${renderTable(data, classes)}
    </div>
    `
