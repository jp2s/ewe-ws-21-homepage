const renderRequestReply = (requestText, replyText, requestClass, replyClass) =>
    `
    <div class="${requestClass}">${requestText}</div>
    <div class="${replyClass}">${replyText}</div>
    `

const renderTask = (data, wrapperClass, titleClass, requestClass, replyClass) =>
    `
    <div class="${wrapperClass}">
        <div class="${titleClass}">${data.title}</div>
        ${data.text.map(item => renderRequestReply(item.request, item.reply, requestClass, replyClass)).join('')}
    </div>
    `

export const renderComponent = (
    query,
    givenId,
    givenClass,
    data,
    wrapperClass,
    titleClass,
    requestClass,
    replyClass) => {
        console.log("a")
        const current = document.querySelector(`script#${query}`);
        const replacement = document.createElement("div");
        replacement.setAttribute("id", givenId);
        replacement.setAttribute("class", givenClass);
        replacement.innerHTML = renderTask(data, wrapperClass, titleClass, requestClass, replyClass);
        current.parentNode.replaceChild(replacement, current);
}
