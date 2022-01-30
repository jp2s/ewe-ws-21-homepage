import {renderTableOfContents} from "../TableOfContents/TableOfContents.js";
import {renderGoToTop} from "../GoToTop/GoToTop.js";

const renderRequestReply = (requestText, replyText, classes) =>
    `
    <div class="${classes.requestClass}">${requestText}</div>
    <div class="${classes.replyClass}">${replyText}</div>
    `

const renderTask = (data, classes, index) =>
    `
    <div class="${classes.taskWrapperClass}">
        <div id="task${index}" class="${classes.titleClass}">${data.title}</div>
        ${data.text ? data.text.map(item => renderRequestReply(item.request, item.reply, classes)).join('') : ""}
        ${data.wireframe ? data.wireframe : ""}
        ${data.taskPages ? data.taskPages.map(page => page).join('') : ""}
    </div>
    `

const renderExercise = (data, classes, tocData) =>
    `
        <div class="${classes.exerciseWrapperClass}">
            <div class="${classes.exerciseClass}">${data.title}</div>
            ${renderTableOfContents(tocData, classes)}
            ${data.tasks.map((task, index) => renderTask(task, classes, index)).join('')}
        </div>
        ${renderGoToTop(classes)}
    `

export const renderComponentExercise = (swapData, data, classes, tocData) => {
    const current = document.querySelector(`script#${swapData.query}`);
    const replacement = document.createElement("div");
    replacement.setAttribute("id", swapData.givenId);
    replacement.setAttribute("class", swapData.givenClass);
    replacement.innerHTML = renderExercise(data, classes, tocData);
    current.parentNode.replaceChild(replacement, current);
}
