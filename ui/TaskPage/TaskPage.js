import {
    renderCode,
    renderRequest,
    renderPagePreview
} from "../General/General.js";
import {fetchCode} from "../../util/code.js";

export const renderTaskPage = async (data, classes, modalId) =>
    `
    <div class=${classes.taskPageWrapperClass}>
        ${renderRequest(data.requestText, classes)}
        ${renderCode(await fetchCode(data.taskPageSrc), classes)}
        ${renderPagePreview(data.taskPageSrc, classes, modalId)}
    </div>
    `