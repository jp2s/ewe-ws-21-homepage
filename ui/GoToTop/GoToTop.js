const goToTop = () => `{document.documentElement.scrollTop = 0;}`

export const renderGoToTop = (classes) =>
    `
    <div 
        class="${classes.goToToWrapper}"
        style="
            position: fixed;
            bottom: 5%;
            right: 5%;
            width: 67px;
            height: 67px;
            font-size: 30px;
            text-align: center;
        "
        onclick="${goToTop()}"
    >
        <div class="${classes.goToTopArrow}">^</div>
    </div>
    `
