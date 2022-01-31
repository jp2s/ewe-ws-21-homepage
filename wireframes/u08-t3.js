const goToHome = () => {
    window.location.reload();
}

let data;
let navItemsKeys;

const fetchData = async () => {
    data = (await (await fetch("u08-t3.json")).json());
    navItemsKeys = Object.keys(data)
    renderHeader(navItemsKeys);
}

const renderHeader = givenData => {
    const elem = document.querySelector("#headerItems");
    const items = givenData.map(item =>
        `
        <div 
            class="navItem"
            onclick="renderContentLeft('${item}', Object.keys(data['${item}']))"
        >${item}</div>
        `
    );
    elem.innerHTML = items.join("");

    const initialItem = navItemsKeys[0]
    renderContentLeft(initialItem, Object.keys(data[initialItem]))
}

const renderContentLeft = (name, givenData) => {
    const elem = document.querySelector("#contentLeft");
    const items = givenData.map(item =>
        `
        <div 
            class="contentLeftItem"
            onclick="renderContentMain(
                '${name}', '${item}',
                data['${name}']['${item}']['desc'],
                data['${name}']['${item}']['ref']
            )"
        >${item}</div>
        `
    );
    elem.innerHTML = items.join("");

    renderContentMain(
        name, Object.keys(data[name])[0],
        data[name][Object.keys(data[name])[0]]["desc"],
        data[name][Object.keys(data[name])[0]]["ref"],
    );
}

const renderContentMain = (name, itemName, item, ref) => {
    const elem = document.querySelector("#contentMain");
    elem.innerHTML =
        `
        <div class="contentMainTitle">${name}: ${itemName}</div>
        <div class="contentMainDesc">${item}</div>
        `

    renderContentRight(ref)
}

const renderContentRight = ref => {
    const elem = document.querySelector("#contentRight");
    elem.innerHTML =
        `
        <a class="refLink" href="${ref}" target="_blank" rel="noopener noreferrer">
                Reference
        </a>
        `
}

window.onload = fetchData;
