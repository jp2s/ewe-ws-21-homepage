export const createComponent = (query, url, givenId, givenClass) => {
    fetch(url).then(res => res.text())
        .then(text => {
            let current = document.querySelector(`script#${query}`);
            let replacement = document.createElement("div");
            replacement.setAttribute("id", givenId);
            replacement.setAttribute("class", givenClass);
            replacement.innerHTML = text;
            current.parentNode.replaceChild(replacement,current);
        })
}