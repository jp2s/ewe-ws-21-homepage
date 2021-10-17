const baseUrl = "//www2.inf.h-brs.de/~jplein2s"

const goToHome = `{window.location.href = '${baseUrl}';}`
const goToPage = (page) => `{window.location.href = '${baseUrl}/pages/${page}.html';}`

const renderHeader = () =>
    `
    <div id="headerTitle" class="container" onclick="${goToHome}">
        <div class="boldText">2021 WS - Einführung in Web Engineering</div>
        <div>Homepage</div>
    </div>
    <div id="navBar" class="container">
        <div class="navBarItem" onclick="${goToPage('one')}">one</div>
        <div class="navBarItem" onclick="${goToPage('two')}">two</div>
        <div class="navBarItem">three</div>
        <div class="navBarItem">four</div>
        <div class="navBarItem">five</div>
        <div class="navBarItem">six</div>
        <div class="navBarItem">seven</div>
        <div class="navBarItem">eight</div>
        <div class="navBarItem">nine</div>
        <div class="navBarItem">ten</div>
        <div class="navBarItem">eleven</div>
        <div class="navBarItem">twelve</div>
    </div>
    <hr align="left" id="headerDivider">
    `

const current = document.querySelector("script#cHeader");
const replacement = document.createElement("div");
replacement.setAttribute("id", "header");
replacement.setAttribute("class", "container");
replacement.innerHTML = renderHeader();
current.parentNode.replaceChild(replacement, current);
