import {
    renderCode,
    renderRequest,
    renderPagePreview
} from "../General/General.js";

export const renderTaskPage = (data, classes, modalId) =>
    `
    <div class=${classes.taskPageWrapperClass}>
        ${renderRequest(data.requestText, classes)}
        ${renderCode(data.code, classes)}
        ${renderPagePreview(data.taskPageSrc, classes, modalId)}
    </div>
    `