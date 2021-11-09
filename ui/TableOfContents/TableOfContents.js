const renderContent = (content, classes) =>
    `
     <div class="${classes.tocContentWrapper}">
        <div class="${classes.tocTitle}">
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
        ${data.content.map(content => 
            renderContent(content, classes)
        ).join("")}
    </div>
    `

export const renderTableOfContents = (data, classes) =>
    `
    <div class="${classes.tocWrapperClass}">
        ${renderTable(data, classes)}
    </div>
    `

// export const renderComponentTableOfContents = (
//     swapData,
//     data,
//     classes
// ) => {
//     const current = document.querySelector(`script#${swapData.query}`);
//     const replacement = document.createElement("div");
//     replacement.setAttribute("id", swapData.givenId);
//     replacement.setAttribute("class", swapData.givenClass);
//     replacement.innerHTML = renderTableOfContents(data, classes);
//     current.parentNode.replaceChild(replacement, current);
// }