const renderRequestReply = (requestText, replyText, requestClass, replyClass) =>
    `
    <div class="${requestClass}">${requestText}</div>
    <div class="${replyClass}">${replyText}</div>
    `

const renderTask = (data, taskWrapperClass, titleClass, requestClass, replyClass) =>
    `
    <div class="${taskWrapperClass}">
        <div class="${titleClass}">${data.title}</div>
        ${data.text ? data.text.map(item => renderRequestReply(item.request, item.reply, requestClass, replyClass)).join('') : ""}
        ${data.wireframe ? data.wireframe : ""}
    </div>
    `

const renderExercise = (
    data,
    exerciseWrapperClass,
    exerciseClass,
    taskWrapperClass,
    titleClass,
    requestClass,
    replyClass
) =>
    `
        <div class="${exerciseWrapperClass}">
            <div class="${exerciseClass}">${data.title}</div>
            ${data.tasks.map(task => renderTask(
                task,
                taskWrapperClass,
                titleClass,
                requestClass,
                replyClass)).join('')}
        </div>
    `

export const renderComponentExercise = (
    query,
    givenId,
    givenClass,
    data,
    exerciseWrapperClass,
    exerciseClass,
    taskWrapperClass,
    titleClass,
    requestClass,
    replyClass
) => {
    const current = document.querySelector(`script#${query}`);
    const replacement = document.createElement("div");
    replacement.setAttribute("id", givenId);
    replacement.setAttribute("class", givenClass);
    replacement.innerHTML = renderExercise(
        data,
        exerciseWrapperClass,
        exerciseClass,
        taskWrapperClass,
        titleClass,
        requestClass,
        replyClass);
    current.parentNode.replaceChild(replacement, current);
}
