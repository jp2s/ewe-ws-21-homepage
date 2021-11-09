import {renderTableOfContents} from "../TableOfContents/TableOfContents.js";

const renderRequestReply = (requestText, replyText, classes) =>
    `
    <div class="${classes.requestClass}">${requestText}</div>
    <div class="${classes.replyClass}">${replyText}</div>
    `

const renderTask = (data, classes) =>
    `
    <div class="${classes.taskWrapperClass}">
        <div class="${classes.titleClass}">${data.title}</div>
        ${data.text ? data.text.map(item => renderRequestReply(item.request, item.reply, classes)).join('') : ""}
        ${data.wireframe ? data.wireframe : ""}
    </div>
    `

const renderExercise = (data, classes, tocData) =>
    `
        <div class="${classes.exerciseWrapperClass}">
            <div class="${classes.exerciseClass}">${data.title}</div>
            ${renderTableOfContents(tocData, classes)}
            ${data.tasks.map(task => renderTask(task, classes)).join('')}
        </div>
    `

export const renderComponentExercise = (swapData, data, classes, tocData) => {
    const current = document.querySelector(`script#${swapData.query}`);
    const replacement = document.createElement("div");
    replacement.setAttribute("id", swapData.givenId);
    replacement.setAttribute("class", swapData.givenClass);
    replacement.innerHTML = renderExercise(data, classes, tocData);
    current.parentNode.replaceChild(replacement, current);
}
