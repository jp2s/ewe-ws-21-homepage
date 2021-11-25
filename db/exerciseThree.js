import {renderWireframe} from "../ui/Wireframe/Wireframe.js";

export const tocThree = {
    content: [
        {
            title: "Responsiv mit Flexbox Desktop-First",
            descriptions: [
                "Wireframe with CSS",
                "Flexbox",
                "Responsiveness",
                "Desktop-First Approach",
            ]
        },
        {
            title: "Responsiv mit Grid Mobile-First",
            descriptions: [
                "Wireframe with CSS",
                "Grid",
                "Responsiveness",
                "Mobile-First Approach",
            ]
        },
        {
            title: "Responsiv mit Grid",
            descriptions: [
                "Wireframe with CSS",
                "Grid",
                "Responsiveness",
                "Desktop-First Approach",
                "Implementing a Landing Page",
            ]
        }
    ],
}

export const exerciseThree = {
    title: "Lerneinheit 3: CSS 2. Teil / Responsive Web Design",
    tasks: [
        {
            title: "3.1. Responsiv mit Flexbox Desktop-First(3 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Implementieren Sie dann ausschließlich mit HTML und CSS Flexbox folgendes responsive Webdesign nach der Desktop-First-Strategie!",
                    imgSrc: "https://kaul.inf.h-brs.de/we/assets/img/holy-grail1.png",
                    wireframePageSrc: "../wireframes/u03-t1.html",
                    code: "&lt!DOCTYPE html&gt\n" +
                        "&lthtml lang='en'&gt\n" +
                        "&lthead&gt\n" +
                        "    &ltmeta charset='UTF-8'&gt\n" +
                        "    &lttitle&gtLerneinheit 3: CSS 2. Teil Responsive Web Design&lt/title&gt\n" +
                        "    &ltstyle&gt\n" +
                        "        #content {\n" +
                        "            display: flex;\n" +
                        "            flex-direction: row;\n" +
                        "            justify-content: stretch;\n" +
                        "            align-items: center;\n" +
                        "            flex-wrap: wrap;\n" +
                        "            row-gap: 10px;\n" +
                        "            column-gap: 10px;\n" +
                        "        }\n" +
                        "        .item {\n" +
                        "            height: 100%;\n" +
                        "        }\n" +
                        "        #red {\n" +
                        "            background-color: #ff0000;\n" +
                        "            flex-basis: calc(100% - 10px);\n" +
                        "            height: calc(40vh - 20px);\n" +
                        "        }\n" +
                        "        #green {\n" +
                        "            background-color: #00ff00;\n" +
                        "            flex-basis: calc(20% - 10px);\n" +
                        "            height: calc(60vh - 20px);\n" +
                        "        }\n" +
                        "        #blue {\n" +
                        "            background-color: #0000ff;\n" +
                        "            flex-basis: calc(60% - 10px);\n" +
                        "            height: calc(60vh - 20px);\n" +
                        "        }\n" +
                        "        #magenta {\n" +
                        "            background-color: #ff00ff;\n" +
                        "            flex-basis: calc(20% - 10px);\n" +
                        "            height: calc(60vh - 20px);\n" +
                        "        }\n" +
                        "        @media screen and (max-width: 600px) {\n" +
                        "            #red {\n" +
                        "                background-color: #ff0000;\n" +
                        "                flex-basis: calc(100% - 10px);\n" +
                        "                height: calc(40vh - 20px);\n" +
                        "            }\n" +
                        "            #green {\n" +
                        "                background-color: #00ff00;\n" +
                        "                flex-basis: calc(40% - 10px);\n" +
                        "                height: calc(100vh - 20px);\n" +
                        "            }\n" +
                        "            #blue {\n" +
                        "                background-color: #0000ff;\n" +
                        "                flex-basis: calc(60% - 10px);\n" +
                        "                height: calc(100vh - 20px);\n" +
                        "            }\n" +
                        "            #magenta {\n" +
                        "                background-color: #ff00ff;\n" +
                        "                flex-basis: calc(100% - 10px);\n" +
                        "                height: calc(20vh - 20px);\n" +
                        "            }\n" +
                        "        }\n" +
                        "        @media screen and (max-width: 300px) {\n" +
                        "            #red {\n" +
                        "                background-color: #ff0000;\n" +
                        "                flex-basis: calc(100% - 10px);\n" +
                        "                height: calc(25vh - 20px);\n" +
                        "            }\n" +
                        "            #green {\n" +
                        "                background-color: #00ff00;\n" +
                        "                flex-basis: calc(100% - 10px);\n" +
                        "                height: calc(25vh - 20px);\n" +
                        "            }\n" +
                        "            #blue {\n" +
                        "                background-color: #0000ff;\n" +
                        "                flex-basis: calc(100% - 10px);\n" +
                        "                height: calc(200vh - 20px);\n" +
                        "            }\n" +
                        "            #magenta {\n" +
                        "                background-color: #ff00ff;\n" +
                        "                flex-basis: calc(100% - 10px);\n" +
                        "                height: calc(15vh - 20px);\n" +
                        "            }\n" +
                        "        }\n" +
                        "    &lt/style&gt\n" +
                        "&lt/head&gt\n" +
                        "&ltbody&gt\n" +
                        "&ltdiv id='content'&gt\n" +
                        "    &ltdiv id='red' class='item'&gt&nbsp;&lt/div&gt\n" +
                        "    &ltdiv id='green' class='item'&gt&nbsp;&lt/div&gt\n" +
                        "    &ltdiv id='blue' class='item'&gt&nbsp;&lt/div&gt\n" +
                        "    &ltdiv id='magenta' class='item'&gt&nbsp;&lt/div&gt\n" +
                        "&lt/div&gt\n" +
                        "&lt/body&gt\n" +
                        "&lt/html&gt",
                },
                {
                    wireframeWrapperClass: "threeWireframeWrapperClass",
                    requestClass: "threeTaskRequest",
                    imgPreviewWrapperClass: "threeImgPreviewWrapperClass",
                    imgPreviewClass: "threeImgPreviewClass",
                    openButtonClass: "threeOpenButtonClass",
                    closeButtonClass: "threeCloseButtonClass",
                    modalClass: "threeModalClass",
                    modalWrapper: "threeModalWrapper",
                    imgClass: "threeImgClass",
                    codeTitleClass: "threeCodeTitleClass",
                    codeWrapperClass: "threeCodeWrapperClass",
                    iframeTitleClass: "threeIframeTitleClass",
                    wireframePagePreviewWrapperClass: "threeWireframePagePreviewWrapperClass",
                    wireframePagePreviewClass: "threeWireframePagePreviewClass",
                    wireframePageModalClass: "threeWireframePageModalClass",
                    wireframePageModalWrapper: "threeWireframePageModalWrapper",
                    wireframePageClass: "threeWireframePageClass",
                },
                "firstModal",
            ),
        },
        {
            title: "3.2. Responsiv mit Grid Mobile-First(3 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Implementieren Sie dann das gleiche responsive Webdesign wie in Aufgabe 3.1 allerdings mit Grid und der Mobile-First-Strategie! Vermeiden Sie diesmal außerdem das Erscheinen von Scrollbars.",
                    imgSrc: "https://kaul.inf.h-brs.de/we/assets/img/holy-grail1.png",
                    wireframePageSrc: "../wireframes/u03-t2.html",
                    code: "&lt!DOCTYPE html&gt\n" +
                        "&lthtml lang='en'&gt\n" +
                        "&lthead&gt\n" +
                        "    &ltmeta charset='UTF-8'&gt\n" +
                        "    &lttitle&gtLerneinheit 3: CSS 2. Teil Responsive Web Design&lt/title&gt\n" +
                        "    &ltlink rel='preconnect' href='https://fonts.googleapis.com'&gt\n" +
                        "    &ltlink rel='preconnect' href='https://fonts.gstatic.com' crossorigin&gt\n" +
                        "    &ltlink href='https://fonts.googleapis.com/css2?family=Oswald&display=swap' rel='stylesheet'&gt\n" +
                        "    &ltstyle&gt\n" +
                        "        body {\n" +
                        "            font-family: Arial;\n" +
                        "            color: white;\n" +
                        "            margin: 0px;\n" +
                        "            font-size: 14px;\n" +
                        "            text-align: center;\n" +
                        "        }\n" +
                        "        #page {\n" +
                        "            width: 100vw;\n" +
                        "            height: 100vh;\n" +
                        "            display: grid;\n" +
                        "            align-items: center;\n" +
                        "            grid-template-rows:\n" +
                        "                    [header] 10%\n" +
                        "                    [mainContent] 70%\n" +
                        "                    [footer] 20%\n" +
                        "                    [endRow];\n" +
                        "            grid-template-columns:\n" +
                        "                    [startColumn] 100%\n" +
                        "                    [endColumn];\n" +
                        "        }\n" +
                        "\n" +
                        "        #header {\n" +
                        "            width: 100%;\n" +
                        "            height: 100%;\n" +
                        "            background-color: #363636;\n" +
                        "            grid-row-start: header;\n" +
                        "            grid-row-end: mainContent;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "            display: grid;\n" +
                        "            justify-items: center;\n" +
                        "            align-items: center;\n" +
                        "            grid-template-rows:\n" +
                        "                    [startRow] 100%\n" +
                        "                    [endRow];\n" +
                        "            grid-template-columns:\n" +
                        "                    [spaceLeft] 30%\n" +
                        "                    [header1] 10%\n" +
                        "                    [header2] 10%\n" +
                        "                    [header3] 10%\n" +
                        "                    [header4] 10%\n" +
                        "                    [spaceRight] 30%\n" +
                        "                    [endColumn];\n" +
                        "        }\n" +
                        "        .navItem {\n" +
                        "            text-align: center;\n" +
                        "            border-radius: 4px;\n" +
                        "            padding: 8px;\n" +
                        "        }\n" +
                        "        .navItem:hover {\n" +
                        "            cursor: pointer;\n" +
                        "            text-align: center;\n" +
                        "            background-color: white;\n" +
                        "            color: black;\n" +
                        "            transition-duration: 0.3s;\n" +
                        "        }\n" +
                        "        #nav1 {\n" +
                        "            grid-row-start: startRow;\n" +
                        "            grid-row-end: endRow;\n" +
                        "            grid-column-start: header1;\n" +
                        "            grid-column-end: header2;\n" +
                        "        }\n" +
                        "        #nav2 {\n" +
                        "            grid-row-start: startRow;\n" +
                        "            grid-row-end: endRow;\n" +
                        "            grid-column-start: header2;\n" +
                        "            grid-column-end: header3;\n" +
                        "        }\n" +
                        "        #nav3{\n" +
                        "            grid-row-start: startRow;\n" +
                        "            grid-row-end: endRow;\n" +
                        "            grid-column-start: header3;\n" +
                        "            grid-column-end: header4;\n" +
                        "        }\n" +
                        "        #nav4 {\n" +
                        "            ggrid-row-start: startRow;\n" +
                        "            grid-row-end: endRow;\n" +
                        "            grid-column-start: header4;\n" +
                        "            grid-column-end: spaceRight;\n" +
                        "        }\n" +
                        "\n" +
                        "        #mainContent {\n" +
                        "            width: 100%;\n" +
                        "            height: 100%;\n" +
                        "            background-color: #ebeae6;\n" +
                        "            grid-row-start: mainContent;\n" +
                        "            grid-row-end: footer;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "            display: grid;\n" +
                        "            align-items: center;\n" +
                        "            grid-template-rows:\n" +
                        "                    [title] 17%\n" +
                        "                    [content] 78%\n" +
                        "                    [imageEnd] 5%\n" +
                        "                    [endRow];\n" +
                        "            grid-template-columns:\n" +
                        "                    [startColumn] 10%\n" +
                        "                    [imageStart] 28%\n" +
                        "                    [imageSpacing] 2%\n" +
                        "                    [description] 60%\n" +
                        "                    [endColumn];\n" +
                        "        }\n" +
                        "        #title {\n" +
                        "            color: black;\n" +
                        "            font-size: 28px;\n" +
                        "            font-weight: bold;\n" +
                        "            text-align: center;\n" +
                        "            grid-row-start: title;\n" +
                        "            grid-row-end: content;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "        }\n" +
                        "        #imageWrapper {\n" +
                        "            width: 100%;\n" +
                        "            height: 100%;\n" +
                        "            grid-row-start: content;\n" +
                        "            grid-row-end: imageEnd;\n" +
                        "            grid-column-start: imageStart;\n" +
                        "            grid-column-end: imageSpacing;\n" +
                        "        }\n" +
                        "        #image {\n" +
                        "            border: 1px solid black;\n" +
                        "            border-radius: 4px;\n" +
                        "            max-width: 100%;\n" +
                        "            max-height: 100%;\n" +
                        "        }\n" +
                        "        #description {\n" +
                        "            width: 100%;\n" +
                        "            height: 100%;\n" +
                        "            grid-row-start: content;\n" +
                        "            grid-row-end: imageEnd;\n" +
                        "            grid-column-start: description;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "            display: grid;\n" +
                        "            justify-items: center;\n" +
                        "            align-items: center;\n" +
                        "            grid-template-rows:\n" +
                        "                    [spaceTop] 10%\n" +
                        "                    [desc1] 15%\n" +
                        "                    [desc2] 15%\n" +
                        "                    [desc3] 15%\n" +
                        "                    [desc4] 15%\n" +
                        "                    [spaceBottom] 30%\n" +
                        "                    [endRow];\n" +
                        "            grid-template-columns:\n" +
                        "                    [startColumn] 100%\n" +
                        "                    [endColumn];\n" +
                        "        }\n" +
                        "        .descriptionItem {\n" +
                        "            font-size: 21px;\n" +
                        "            color: black;\n" +
                        "        }\n" +
                        "        #description1 {\n" +
                        "            grid-row-start: desc1;\n" +
                        "            grid-row-end: desc2;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "        }\n" +
                        "        #description2 {\n" +
                        "            grid-row-start: desc2;\n" +
                        "            grid-row-end: desc3;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "        }\n" +
                        "        #description3 {\n" +
                        "            grid-row-start: desc3;\n" +
                        "            grid-row-end: desc4;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "        }\n" +
                        "        #description4 {\n" +
                        "            grid-row-start: desc4;\n" +
                        "            grid-row-end: spaceBottom;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "        }\n" +
                        "        #orderButton {\n" +
                        "            width: 200px;\n" +
                        "            border-radius: 4px;\n" +
                        "        }\n" +
                        "\n" +
                        "        #footer {\n" +
                        "            width: 100%;\n" +
                        "            height: 100%;\n" +
                        "            background-color: #011826;\n" +
                        "            grid-row-start: footer;\n" +
                        "            grid-row-end: endRow;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "            display: grid;\n" +
                        "            justify-items: center;\n" +
                        "            align-items: center;\n" +
                        "            grid-template-rows:\n" +
                        "                    [spaceTop] 20%\n" +
                        "                    [text] 35%\n" +
                        "                    [button] 35%\n" +
                        "                    [spaceBottom] 10%\n" +
                        "                    [endRow];\n" +
                        "            grid-template-columns:\n" +
                        "                    [startColumn] 100%\n" +
                        "                    [endColumn];\n" +
                        "        }\n" +
                        "        #footerText {\n" +
                        "            font-size: 16px;\n" +
                        "            grid-row-start: text;\n" +
                        "            grid-row-end: button;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "        }\n" +
                        "        #footerButton {\n" +
                        "            grid-row-start: button;\n" +
                        "            grid-row-end: spaceBottom;\n" +
                        "            grid-column-start: startColumn;\n" +
                        "            grid-column-end: endColumn;\n" +
                        "            width: 500px;\n" +
                        "            border-radius: 8px;\n" +
                        "        }\n" +
                        "\n" +
                        "        .styledButton {\n" +
                        "            font-family: 'Oswald', sans-serif;\n" +
                        "            text-align: center;\n" +
                        "            background-color: #f88e37;\n" +
                        "            font-size: 14px;\n" +
                        "            color: white;\n" +
                        "            padding: 8px;\n" +
                        "        }\n" +
                        "        .styledButton:hover {\n" +
                        "            cursor: pointer;\n" +
                        "            text-align: center;\n" +
                        "            background-color: #af6426;\n" +
                        "            transition-duration: 0.3s;\n" +
                        "        }\n" +
                        "\n" +
                        "        @media screen and (max-width: 900px) {\n" +
                        "            #header {\n" +
                        "                    [startRow] 100%\n" +
                        "                    [endRow];\n" +
                        "                grid-template-columns:\n" +
                        "                    [spaceLeft] 10%\n" +
                        "                    [header1] 20%\n" +
                        "                    [header2] 20%\n" +
                        "                    [header3] 20%\n" +
                        "                    [header4] 20%\n" +
                        "                    [spaceRight] 10%\n" +
                        "                    [endColumn];\n" +
                        "            }\n" +
                        "\n" +
                        "            #mainContent {\n" +
                        "                grid-template-rows:\n" +
                        "                    [title] 20%\n" +
                        "                    [content] 58%\n" +
                        "                    [imageEnd] 17%\n" +
                        "                    [endRow];\n" +
                        "                grid-template-columns:\n" +
                        "                    [startColumn] 10%\n" +
                        "                    [imageStart] 13%\n" +
                        "                    [imageSpacing] 2%\n" +
                        "                    [description] 75%\n" +
                        "                    [endColumn];\n" +
                        "            }\n" +
                        "            #title {\n" +
                        "                font-size: 20px;\n" +
                        "            }\n" +
                        "            #description {\n" +
                        "                grid-row-start: content;\n" +
                        "                grid-row-end: imageEnd;\n" +
                        "                grid-column-start: description;\n" +
                        "                grid-column-end: endColumn;\n" +
                        "                grid-template-rows:\n" +
                        "                    [spaceTop] 10%\n" +
                        "                    [desc1] 20%\n" +
                        "                    [desc2] 20%\n" +
                        "                    [desc3] 20%\n" +
                        "                    [desc4] 20%\n" +
                        "                    [spaceBottom] 10%\n" +
                        "                    [endRow];\n" +
                        "                grid-template-columns:\n" +
                        "                    [startColumn] 100%\n" +
                        "                    [endColumn];\n" +
                        "            }\n" +
                        "\n" +
                        "            /*#footerButton {*/\n" +
                        "            /*    width: 300px;*/\n" +
                        "            /*    border-radius: 8px;*/\n" +
                        "            /*}*/\n" +
                        "\n" +
                        "            /*.styledButton {*/\n" +
                        "            /*    font-size: 14px;*/\n" +
                        "            /*    padding: 4px;*/\n" +
                        "            /*}*/\n" +
                        "        }\n" +
                        "        @media screen and (max-width: 600px) {\n" +
                        "            #mainContent {\n" +
                        "                grid-template-rows:\n" +
                        "                    [title] 20%\n" +
                        "                    [content] 80%\n" +
                        "                    [endRow];\n" +
                        "                grid-template-columns:\n" +
                        "                    [startColumn] 100%\n" +
                        "                    [endColumn];\n" +
                        "            }\n" +
                        "            #description {\n" +
                        "                grid-row-start: content;\n" +
                        "                grid-row-end: endRow;\n" +
                        "                grid-column-start: startColumn;\n" +
                        "                grid-column-end: endColumn;\n" +
                        "                grid-template-rows:\n" +
                        "                    [spaceTop] 10%\n" +
                        "                    [desc1] 20%\n" +
                        "                    [desc2] 20%\n" +
                        "                    [desc3] 20%\n" +
                        "                    [desc4] 20%\n" +
                        "                    [spaceBottom] 10%\n" +
                        "                    [endRow];\n" +
                        "                grid-template-columns:\n" +
                        "                    [spaceLeft] 20%\n" +
                        "                    [content] 60%\n" +
                        "                    [spaceRight] 20%\n" +
                        "                    [endColumn];\n" +
                        "            }\n" +
                        "            #description1 {\n" +
                        "                grid-row-start: desc1;\n" +
                        "                grid-row-end: desc2;\n" +
                        "                grid-column-start: content;\n" +
                        "                grid-column-end: spaceRight;\n" +
                        "            }\n" +
                        "            #description2 {\n" +
                        "                grid-row-start: desc2;\n" +
                        "                grid-row-end: desc3;\n" +
                        "                grid-column-start: content;\n" +
                        "                grid-column-end: spaceRight;\n" +
                        "            }\n" +
                        "            #description3 {\n" +
                        "                grid-row-start: desc3;\n" +
                        "                grid-row-end: desc4;\n" +
                        "                grid-column-start: content;\n" +
                        "                grid-column-end: spaceRight;\n" +
                        "            }\n" +
                        "            #description4 {\n" +
                        "                grid-row-start: desc4;\n" +
                        "                grid-row-end: spaceBottom;\n" +
                        "                grid-column-start: content;\n" +
                        "                grid-column-end: spaceRight;\n" +
                        "            }\n" +
                        "            #image {\n" +
                        "                display: none;\n" +
                        "            }\n" +
                        "\n" +
                        "            #footer {\n" +
                        "                grid-row-start: footer;\n" +
                        "                grid-row-end: endRow;\n" +
                        "                grid-column-start: startColumn;\n" +
                        "                grid-column-end: endColumn;\n" +
                        "                grid-template-rows:\n" +
                        "                    [spaceTop] 10%\n" +
                        "                    [text] 40%\n" +
                        "                    [button] 40%\n" +
                        "                    [spaceBottom] 10%\n" +
                        "                    [endRow];\n" +
                        "                grid-template-columns:\n" +
                        "                    [startColumn] 100%\n" +
                        "                    [endColumn];\n" +
                        "            }\n" +
                        "            #footerText {\n" +
                        "                /*font-size: 16px;*/\n" +
                        "                grid-row-start: text;\n" +
                        "                grid-row-end: button;\n" +
                        "                grid-column-start: startColumn;\n" +
                        "                grid-column-end: endColumn;\n" +
                        "            }\n" +
                        "            #footerButton {\n" +
                        "                grid-row-start: button;\n" +
                        "                grid-row-end: spaceBottom;\n" +
                        "                grid-column-start: startColumn;\n" +
                        "                grid-column-end: endColumn;\n" +
                        "                width: 300px;\n" +
                        "                border-radius: 8px;\n" +
                        "            }\n" +
                        "            }\n" +
                        "        }\n" +
                        "    &lt/style&gt\n" +
                        "&lt/head&gt\n" +
                        "&ltbody&gt\n" +
                        "    &ltdiv id='page'&gt\n" +
                        "        &ltdiv id='header'&gt\n" +
                        "            &ltdiv id='nav1' class='navItem'&gtThe book series&lt/div&gt\n" +
                        "            &ltdiv id='nav2' class='navItem'&gtTestimonials&lt/div&gt\n" +
                        "            &ltdiv id='nav3' class='navItem'&gtThe Author&lt/div&gt\n" +
                        "            &ltdiv id='nav4' class='navItem'&gtFree resources&lt/div&gt\n" +
                        "        &lt/div&gt\n" +
                        "\n" +
                        "        &ltdiv id='mainContent'&gt\n" +
                        "            &ltdiv id='title'&gt&ltcode&gtYou don't know JavaScript&lt/code&gt&lt/div&gt\n" +
                        "            &ltdiv id='imageWrapper'&gt\n" +
                        "                &ltimg id='image' src='https://kaul.inf.h-brs.de/we/assets/img/landing-img.png'&gt\n" +
                        "            &lt/div&gt\n" +
                        "            &ltdiv id='description'&gt\n" +
                        "                &ltdiv id='description1' class='descriptionItem'&gtDon't just drift through JavaScript.&lt/div&gt\n" +
                        "                &ltdiv id='description2' class='descriptionItem'&gtUnderstand how JavaScript works&lt/div&gt\n" +
                        "                &ltdiv id='description3' class='descriptionItem'&gtStart your Journey through the bumpy side of JavaScript&lt/div&gt\n" +
                        "                &ltdiv id='description4' class='descriptionItem'&gt\n" +
                        "                    &ltdiv id='orderButton' class='styledButton'&gtORDER YOUR COPY NOW&lt/div&gt\n" +
                        "                &lt/div&gt\n" +
                        "            &lt/div&gt\n" +
                        "        &lt/div&gt\n" +
                        "\n" +
                        "        &ltdiv id='footer'&gt\n" +
                        "            &ltdiv id='footerText'&gtThe first ebook in the book series is absolutely free.&lt/div&gt\n" +
                        "            &ltdiv id='footerButton' class='styledButton'&gtFIND OUT MORE ABOUT THIS OFFER&lt/div&gt\n" +
                        "        &lt/div&gt\n" +
                        "    &lt/div&gt\n" +
                        "&lt/body&gt\n" +
                        "&lt/html&gt",
                },
                {
                    wireframeWrapperClass: "threeWireframeWrapperClass",
                    requestClass: "threeTaskRequest",
                    imgPreviewWrapperClass: "threeImgPreviewWrapperClass",
                    imgPreviewClass: "threeImgPreviewClass",
                    openButtonClass: "threeOpenButtonClass",
                    closeButtonClass: "threeCloseButtonClass",
                    modalClass: "threeModalClass",
                    modalWrapper: "threeModalWrapper",
                    imgClass: "threeImgClass",
                    codeTitleClass: "threeCodeTitleClass",
                    codeWrapperClass: "threeCodeWrapperClass",
                    iframeTitleClass: "threeIframeTitleClass",
                    wireframePagePreviewWrapperClass: "threeWireframePagePreviewWrapperClass",
                    wireframePagePreviewClass: "threeWireframePagePreviewClass",
                    wireframePageModalClass: "threeWireframePageModalClass",
                    wireframePageModalWrapper: "threeWireframePageModalWrapper",
                    wireframePageClass: "threeWireframePageClass",
                },
                "secondModal"
            ),
        },
        {
            title: "3.3. Responsiv mit Grid(4 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Implementieren Sie folgende Landing Page responsiv mit Grid Layout. Vermeiden Sie außerdem das Erscheinen von Scrollbars so weit wie möglich.",
                    imgSrc: "https://kaul.inf.h-brs.de/we/assets/img/landing.png",
                    wireframePageSrc: "../wireframes/u03-t3.html",
                    code: "&lt!DOCTYPE html&gt\n" +
                        "&lthtml lang='en'&gt\n" +
                        "&lthead&gt\n" +
                        "    &ltmeta charset='UTF-8'&gt\n" +
                        "    &lttitle&gtLerneinheit 3: CSS 2. Teil Responsive Web Design&lt/title&gt\n" +
                        "    &ltstyle&gt\n" +
                        "        #content {\n" +
                        "            width: 95vw;\n" +
                        "            height: 95vh;\n" +
                        "            display: grid;\n" +
                        "            grid-gap: 10px;\n" +
                        "            grid-template-rows:\n" +
                        "                    [firstR] 10%\n" +
                        "                    [secondR] 10%\n" +
                        "                    [thirdR] 65%\n" +
                        "                    [fourthR] 10%\n" +
                        "                    [endR];\n" +
                        "            grid-template-columns:\n" +
                        "                    [firstC] 95%\n" +
                        "                    [endC];\n" +
                        "        }\n" +
                        "        #red {\n" +
                        "            background-color: #ff0000;\n" +
                        "            grid-row-start: firstR;\n" +
                        "            grid-row-end: secondR;\n" +
                        "            grid-column-start: firstC;\n" +
                        "            grid-column-end: endC;\n" +
                        "        }\n" +
                        "        #green {\n" +
                        "            background-color: #00ff00;\n" +
                        "            grid-row-start: secondR;\n" +
                        "            grid-row-end: thirdR;\n" +
                        "            grid-column-start: firstC;\n" +
                        "            grid-column-end: endC;\n" +
                        "        }\n" +
                        "        #blue {\n" +
                        "            background-color: #0000ff;\n" +
                        "            grid-row-start: thirdR;\n" +
                        "            grid-row-end: fourthR;\n" +
                        "            grid-column-start: firstC;\n" +
                        "            grid-column-end: endC;\n" +
                        "        }\n" +
                        "        #magenta {\n" +
                        "            background-color: #ff00ff;\n" +
                        "            grid-row-start: fourthR;\n" +
                        "            grid-row-end: endR;\n" +
                        "            grid-column-start: firstC;\n" +
                        "            grid-column-end: endC;\n" +
                        "        }\n" +
                        "\n" +
                        "        @media screen and (min-width: 300px) {\n" +
                        "            #content {\n" +
                        "                width: 95vw;\n" +
                        "                height: 95vh;\n" +
                        "                display: grid;\n" +
                        "                grid-template-rows:\n" +
                        "                    [firstR] 15%\n" +
                        "                    [secondR] 65%\n" +
                        "                    [thirdR] 15%\n" +
                        "                    [endR];\n" +
                        "                grid-template-columns:\n" +
                        "                    [firstC] 30%\n" +
                        "                    [secondC] 65%\n" +
                        "                    [endC];\n" +
                        "            }\n" +
                        "            #red {\n" +
                        "                background-color: #ff0000;\n" +
                        "                grid-row-start: firstR;\n" +
                        "                grid-row-end: secondR;\n" +
                        "                grid-column-start: firstC;\n" +
                        "                grid-column-end: endC;\n" +
                        "            }\n" +
                        "            #green {\n" +
                        "                background-color: #00ff00;\n" +
                        "                grid-row-start: secondR;\n" +
                        "                grid-row-end: thirdR;\n" +
                        "                grid-column-start: firstC;\n" +
                        "                grid-column-end: secondC;\n" +
                        "            }\n" +
                        "            #blue {\n" +
                        "                background-color: #0000ff;\n" +
                        "                grid-row-start: secondR;\n" +
                        "                grid-row-end: thirdR;\n" +
                        "                grid-column-start: secondC;\n" +
                        "                grid-column-end: endC;\n" +
                        "            }\n" +
                        "            #magenta {\n" +
                        "                background-color: #ff00ff;\n" +
                        "                grid-row-start: thirdR;\n" +
                        "                grid-row-end: endR;\n" +
                        "                grid-column-start: firstC;\n" +
                        "                grid-column-end: endC;\n" +
                        "            }\n" +
                        "        }\n" +
                        "\n" +
                        "        @media screen and (min-width: 600px) {\n" +
                        "            #content {\n" +
                        "                width: 95vw;\n" +
                        "                height: 95vh;\n" +
                        "                display: grid;\n" +
                        "                grid-template-rows:\n" +
                        "                    [firstR] 20%\n" +
                        "                    [secondR] 75%\n" +
                        "                    [endR];\n" +
                        "                grid-template-columns:\n" +
                        "                    [firstC] 15%\n" +
                        "                    [secondC] 65%\n" +
                        "                    [thirdC] 15%\n" +
                        "                    [endC];\n" +
                        "            }\n" +
                        "            #red {\n" +
                        "                background-color: #ff0000;\n" +
                        "                grid-row-start: firstR;\n" +
                        "                grid-row-end: secondR;\n" +
                        "                grid-column-start: firstC;\n" +
                        "                grid-column-end: endC;\n" +
                        "            }\n" +
                        "            #green {\n" +
                        "                background-color: #00ff00;\n" +
                        "                grid-row-start: secondR;\n" +
                        "                grid-row-end: endR;\n" +
                        "                grid-column-start: firstC;\n" +
                        "                grid-column-end: secondC;\n" +
                        "            }\n" +
                        "            #blue {\n" +
                        "                background-color: #0000ff;\n" +
                        "                grid-row-start: secondR;\n" +
                        "                grid-row-end: endR;\n" +
                        "                grid-column-start: secondC;\n" +
                        "                grid-column-end: thirdC;\n" +
                        "            }\n" +
                        "            #magenta {\n" +
                        "                background-color: #ff00ff;\n" +
                        "                grid-row-start: secondR;\n" +
                        "                grid-row-end: endR;\n" +
                        "                grid-column-start: thirdC;\n" +
                        "                grid-column-end: endC;\n" +
                        "            }\n" +
                        "        }\n" +
                        "    &lt/style&gt\n" +
                        "&lt/head&gt\n" +
                        "&ltbody&gt\n" +
                        "&ltdiv id='content'&gt\n" +
                        "    &ltdiv id='red' class='item'&gt&nbsp;&lt/div&gt\n" +
                        "    &ltdiv id='green' class='item'&gt&nbsp;&lt/div&gt\n" +
                        "    &ltdiv id='blue' class='item'&gt&nbsp;&lt/div&gt\n" +
                        "    &ltdiv id='magenta' class='item'&gt&nbsp;&lt/div&gt\n" +
                        "&lt/div&gt\n" +
                        "&lt/body&gt\n" +
                        "&lt/html&gt",
                },
                {
                    wireframeWrapperClass: "threeWireframeWrapperClass",
                    requestClass: "threeTaskRequest",
                    imgPreviewWrapperClass: "threeImgPreviewWrapperClass",
                    imgPreviewClass: "threeImgPreviewClass",
                    openButtonClass: "threeOpenButtonClass",
                    closeButtonClass: "threeCloseButtonClass",
                    modalClass: "threeModalClass",
                    modalWrapper: "threeModalWrapper",
                    imgClass: "threeImgClass",
                    codeTitleClass: "threeCodeTitleClass",
                    codeWrapperClass: "threeCodeWrapperClass",
                    iframeTitleClass: "threeIframeTitleClass",
                    wireframePagePreviewWrapperClass: "threeWireframePagePreviewWrapperClass",
                    wireframePagePreviewClass: "threeWireframePagePreviewClass",
                    wireframePageModalClass: "threeWireframePageModalClass",
                    wireframePageModalWrapper: "threeWireframePageModalWrapper",
                    wireframePageClass: "threeWireframePageClass",
                },
                "thirdModal"
            ),
        },
    ]
}