import {
    renderCode,
    renderRequest,
    renderPagePreview
} from "../General/General.js";
import {fetchCode} from "../../util/code.js";

export const renderTaskPage = async (data, classes, modalId, hideCode = false) =>
    `
    <div class=${classes.taskPageWrapperClass}>
        ${renderRequest(data.requestText, classes)}
        ${renderPagePreview(data.taskPageSrc, classes, modalId)}
        ${hideCode ? "" : renderCode(await fetchCode(data.taskPageSrc), classes)}
    </div>
    `