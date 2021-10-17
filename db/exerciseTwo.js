import {baseUrl} from "../util/util.js";
import {renderWireframe} from "../ui/Wireframe/Wireframe.js";

export const exerciseTwo = {
    title: "Lerneinheit 2: CSS 1. Teil",
    tasks: [
        {
            title: "2.1. CSS Selektoren und CSS Farben (2 Punkte)",
            text: [
                {
                    request: "Berechnen Sie die Spezifität folgender CSS-Selektoren:<br>" +
                        "    1. <code>div div div:focus .inner</code><br>" +
                        "    2. <code>h1 + div.main</code><br>" +
                        "    3. <code>div a:link[href*='h-brs']</code><br>" +
                        "    4. <code>nav > a:hover::before</code><br>" +
                        "    5. <code>ul#primary-nav li.active</code>",
                    reply: "1. 023<br>" +
                        "2. 012<br>" +
                        "3. 022<br>" +
                        "4. 013<br>" +
                        "5. 112<br>",
                },
                {
                    request: "Rechnen Sie folgende RGB-Werte in HSL-Werte um:<br>" +
                        "    1. <code>#ffffff</code><br>" +
                        "    2. <code>#000</code><br>" +
                        "    3. <code>#ab0978</code><br>" +
                        "    4. <code>rgb(127,255,33)</code><br>" +
                        "    5. <code>rgba(255,127,33,0.8)</code><br>",
                    reply: "1. H: 0, S: 0, L: 100<br>" +
                        "2. H: 0, S: 0, L: 0<br>" +
                        "3. H: 319, S: 90, L: 35<br>" +
                        "4. H: 95, S: 100, L: 56<br>" +
                        "5. HSL besitzt keinen Alpha-Kanal. Für die Umwandlung benötigt man den HSLA-Farbraum.",
                },
            ]
        },
        {
            title: "2.2. CSS Positionierung (4 Punkte) First Part",
            wireframe: renderWireframe(
                {
                    requestText: "Schauen Sie sich folgendes Video an und bauen Sie das dynamische Verhalten exakt nach (nur mit HTML und CSS, ohne JavaScript):",
                    imgSrc: `${baseUrl}/img/two/2_2a.png`,
                    code: "&lt!DOCTYPE html&gt\n" +
                        "&lthtml lang='en'&gt\n" +
                        "&lthead&gt\n" +
                        "    &ltmeta charset='UTF-8'&gt\n" +
                        "    &lttitle&gtLerneinheit 2: CSS 1. Teil&lt/title&gt\n" +
                        "    &ltstyle&gt\n" +
                        "        body {\n" +
                        "            font-family: Helvetica Neue;\n" +
                        "        }\n" +
                        "        .container {\n" +
                        "            display: flex;\n" +
                        "            margin-top: 40px;\n" +
                        "            margin-left: 100px;\n" +
                        "            margin-right: 100px;\n" +
                        "        }\n" +
                        "        .wrapper {\n" +
                        "            flex-direction: column;\n" +
                        "            justify-content: center;\n" +
                        "            align-items: stretch;\n" +
                        "            row-gap: 20px;\n" +
                        "            border: 4px solid black;\n" +
                        "            padding: 16px;\n" +
                        "        }\n" +
                        "        .header {\n" +
                        "\t\t    top: 0;\n" +
                        "            position: sticky;\n" +
                        "            border: 4px solid blue;\n" +
                        "\t\t    background-color: rgba(255, 255, 255, 0.9);\n" +
                        "        }\n" +
                        "        h2 {\n" +
                        "            margin-left: 16px;\n" +
                        "        }\n" +
                        "    &lt/style&gt\n" +
                        "&lt/head&gt\n" +
                        "&ltbody&gt\n" +
                        "&ltdiv class='container wrapper'&gt\n" +
                        "    &ltdiv class='header'&gt\n" +
                        "        &lth2&gtErste Überschrift&lt/h2&gt\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "\n" +
                        "    &ltdiv class='header'&gt\n" +
                        "        &lth2&gtZweite Überschrift&lt/h2&gt\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "\n" +
                        "    &ltdiv class='header'&gt\n" +
                        "        &lth2&gtDritte Überschrift&lt/h2&gt\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "\n" +
                        "    &ltdiv class='header'&gt\n" +
                        "        &lth2&gtVierte Überschrift&lt/h2&gt\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "    &ltdiv&gtLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
                        "        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n" +
                        "        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n" +
                        "        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n" +
                        "        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                        "        takimata sanctus est Lorem ipsum dolor sit amet.\n" +
                        "    &lt/div&gt\n" +
                        "&lt/div&gt\n" +
                        "&lt/body&gt\n" +
                        "&lt/html&gt",
                },
                "twoWireframeWrapperClass",
                "twoTaskRequest",
                "twoImgPreviewWrapperClass",
                "twoImgPreviewClass",
                "twoOpenButtonClass",
                "twoCloseButtonClass",
                "twoModalClassA",
                "twoModalWrapper",
                "twoImgClass",
                "twoCodeWrapperClass",
            ),
        },
        {
            title: "2.2. CSS Positionierung (4 Punkte) Second Part",
            wireframe: renderWireframe(
                {
                    requestText: "Schauen Sie sich folgendes Video an und bauen Sie das dynamische Verhalten exakt nach (nur mit HTML und CSS, ohne JavaScript):",
                    imgSrc: `${baseUrl}/img/two/2_2b.png`,
                    code: "&lt!DOCTYPE html&gt\n" +
                        "&lthtml lang='en'&gt\n" +
                        "&lthead&gt\n" +
                        "    &ltmeta charset='UTF-8'&gt\n" +
                        "    &lttitle&gtLerneinheit 2: CSS 1. Teil&lt/title&gt\n" +
                        "    &ltstyle&gt\n" +
                        "        body {\n" +
                        "            font-family: Helvetica Neue;\n" +
                        "            font-size: 20px;\n" +
                        "        }\n" +
                        "        img {\n" +
                        "            width: 50%;\n" +
                        "            visibility: hidden;\n" +
                        "        }\n" +
                        "        input {\n" +
                        "            width: 20px;\n" +
                        "            height: 20px;\n" +
                        "        }\n" +
                        "        input[type=checkbox]:checked + label + .imgWrapper&gtimg {\n" +
                        "            visibility: visible;\n" +
                        "        }\n" +
                        "        .imgWrapper {\n" +
                        "            border: 4px solid blue;\n" +
                        "            padding: 16px;\n" +
                        "        }\n" +
                        "        .container {\n" +
                        "            display: flex;\n" +
                        "            margin-top: 40px;\n" +
                        "            margin-left: 20px;\n" +
                        "            margin-right: 20px;\n" +
                        "        }\n" +
                        "        .wrapper {\n" +
                        "            flex-direction: column;\n" +
                        "            justify-content: center;\n" +
                        "            align-items: flex-start;\n" +
                        "            row-gap: 20px;\n" +
                        "            border: 4px solid black;\n" +
                        "            padding: 16px;\n" +
                        "        }\n" +
                        "    &lt/style&gt\n" +
                        "&lt/head&gt\n" +
                        "&ltbody&gt\n" +
                        "    &ltdiv class='container wrapper'&gt\n" +
                        "        &ltdiv style='font-weight: bold;'&gtÜbung 2.2&lt/div&gt\n" +
                        "        &ltinput type='checkbox' id='checkboxTrick' checked&gt\n" +
                        "        &ltlabel for='checkboxTrick'&gthide and show via checkbox&lt/label&gt\n" +
                        "        &ltdiv class='imgWrapper'&gt\n" +
                        "            &ltimg src='https://upload.wikimedia.org/\n" +
                        "wikipedia/commons/a/a4/\n" +
                        "Hochschule_Bonn-Rhein-Sieg_Wolfgang_G%C3%B6ddertz_Induktion.jpg'&gt\n" +
                        "        &lt/div&gt\n" +
                        "    &lt/div&gt\n" +
                        "&lt/body&gt\n" +
                        "&lt/html&gt",
                },
                "twoWireframeWrapperClass",
                "twoTaskRequest",
                "twoImgPreviewWrapperClass",
                "twoImgPreviewClass",
                "twoOpenButtonClass",
                "twoCloseButtonClass",
                "twoModalClassB",
                "twoModalWrapper",
                "twoImgClass",
                "twoCodeWrapperClass",
            ),
        },
        {
            title: "2.3. Wireframe with HTML and CSS (4 Punkte) First Part",
            wireframe: renderWireframe(
                {
                    requestText: "Frage: Mit welchem HTML- und CSS-Code kann man diesen Wireframe exakt nachbilden? Schreiben Sie Ihren CSS-Code direkt in die HTML-Datei. Geben Sie Ihren HTML- und CSS-Quellcode zusammen in dieses Textfeld ein:",
                    imgSrc: `${baseUrl}/img/two/2_3.png`,
                    code: "&lt!DOCTYPE html&gt\n" +
                        "&lthtml lang='en'&gt\n" +
                        "&lthead&gt\n" +
                        "    &ltmeta charset='UTF-8'&gt\n" +
                        "    &lttitle&gtLerneinheit 2: CSS 1. Teil&lt/title&gt\n" +
                        "    &ltlink rel='preconnect' href='https://fonts.googleapis.com'&gt\n" +
                        "    &ltlink rel='preconnect' href='https://fonts.gstatic.com' crossorigin&gt\n" +
                        "    &ltlink href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap' rel='stylesheet'&gt\n" +
                        "    &ltstyle&gt\n" +
                        "        body {\n" +
                        "            font-family: 'Raleway', sans-serif;\n" +
                        "            background-color: #b2d6d1;\n" +
                        "            font-size: 16px;\n" +
                        "        }\n" +
                        "        .basicContainer {\n" +
                        "            display: flex;\n" +
                        "        }\n" +
                        "        .container {\n" +
                        "            padding: 0px 24px 8px 24px;\n" +
                        "            display: flex;\n" +
                        "        }\n" +
                        "        .wrapper {\n" +
                        "            flex-direction: column;\n" +
                        "            justify-content: flex-start;\n" +
                        "            align-items: center;\n" +
                        "        }\n" +
                        "        .formWrapper {\n" +
                        "            background-color: #fafafa;\n" +
                        "            padding: 30px 50px 30px 50px;\n" +
                        "            row-gap: 24px;\n" +
                        "        }\n" +
                        "        .checkboxWrapper {\n" +
                        "            flex-direction: column;\n" +
                        "            justify-content: flex-start;\n" +
                        "            align-items: flex-start;\n" +
                        "            row-gap: 8px;\n" +
                        "        }\n" +
                        "        .inputItem {\n" +
                        "            flex-direction: row;\n" +
                        "            justify-content: flex-start;\n" +
                        "            align-items: flex-start;\n" +
                        "            column-gap: 8px;\n" +
                        "        }\n" +
                        "        .formItemWrapper {\n" +
                        "            width: 100%;\n" +
                        "            flex-direction: row;\n" +
                        "            justify-content: center;\n" +
                        "            align-items: flex-start;\n" +
                        "            column-gap: 20px;\n" +
                        "        }\n" +
                        "        .textField {\n" +
                        "            align-items: center;\n" +
                        "        }\n" +
                        "        .item {\n" +
                        "            width: 50%;\n" +
                        "        }\n" +
                        "        .first {\n" +
                        "            text-align: right;\n" +
                        "        }\n" +
                        "        .second {\n" +
                        "            text-align: left;\n" +
                        "        }\n" +
                        "        [type=text], [type=number] {\n" +
                        "            border-radius: 2px;\n" +
                        "            border: 1px solid lightgrey;\n" +
                        "            padding: 8px;\n" +
                        "            width: 50%;\n" +
                        "        }\n" +
                        "        select {\n" +
                        "            border-radius: 2px;\n" +
                        "            border: 1px solid lightgrey;\n" +
                        "            background-color: #efefef;\n" +
                        "            padding: 8px;\n" +
                        "        }\n" +
                        "    &lt/style&gt\n" +
                        "&lt/head&gt\n" +
                        "&ltbody&gt\n" +
                        "    &ltdiv class='container wrapper'&gt\n" +
                        "        &lth1 style='font-weight: bold;'&gtSurvey Form&lt/h1&gt\n" +
                        "        &ltdiv style='width: 100%;'&gt\n" +
                        "            &ltdiv class='container wrapper formWrapper'&gt\n" +
                        "                &ltdiv&gtLet us know how we can improve freeCodeCamp&lt/div&gt\n" +
                        "                &ltdiv class='container formItemWrapper textField'&gt\n" +
                        "                    &ltdiv class='first item'&gt* Name:&lt/div&gt\n" +
                        "                    &ltdiv class='second item'&gt\n" +
                        "                        &ltinput type='text' placeholder='Enter your name'&gt\n" +
                        "                    &lt/div&gt\n" +
                        "                &lt/div&gt\n" +
                        "\n" +
                        "                &ltdiv class='container formItemWrapper textField'&gt\n" +
                        "                    &ltdiv class='first item'&gt* Email:&lt/div&gt\n" +
                        "                    &ltdiv class='second item'&gt\n" +
                        "                        &ltinput type='text' placeholder='Enter your Email'&gt\n" +
                        "                    &lt/div&gt\n" +
                        "                &lt/div&gt\n" +
                        "\n" +
                        "                &ltdiv class='container formItemWrapper textField'&gt\n" +
                        "                    &ltdiv class='first item'&gt* Age:&lt/div&gt\n" +
                        "                    &ltdiv class='second item'&gt\n" +
                        "                        &ltinput type='number' placeholder='Age'&gt\n" +
                        "                    &lt/div&gt\n" +
                        "                &lt/div&gt\n" +
                        "\n" +
                        "                &ltdiv class='container formItemWrapper'&gt\n" +
                        "                    &ltdiv class='first item'&gtWhich option best describes your current role?&lt/div&gt\n" +
                        "                    &ltdiv class='second item'&gt\n" +
                        "                        &ltselect name='role' id='role'&gt\n" +
                        "                            &ltoption value='student'&gtStudent&lt/option&gt\n" +
                        "                        &lt/select&gt\n" +
                        "                    &lt/div&gt\n" +
                        "                &lt/div&gt\n" +
                        "\n" +
                        "                &ltdiv class='container formItemWrapper'&gt\n" +
                        "                    &ltdiv class='first item'&gt* How likely is that you would recommend freeCodeCamp to a friend?&lt/div&gt\n" +
                        "                    &ltdiv class='second item'&gt\n" +
                        "                        &ltdiv class='basicContainer checkboxWrapper'&gt\n" +
                        "                            &ltdiv class='basicContainer inputItem'&gt\n" +
                        "                                &ltinput type='radio'&gt\n" +
                        "                                &ltdiv&gtDefinitely&lt/div&gt\n" +
                        "                            &lt/div&gt\n" +
                        "                            &ltdiv class='basicContainer inputItem'&gt\n" +
                        "                                &ltinput type='radio'&gt\n" +
                        "                                &ltdiv&gtMaybe&lt/div&gt\n" +
                        "                            &lt/div&gt\n" +
                        "                            &ltdiv class='basicContainer inputItem'&gt\n" +
                        "                                &ltinput type='radio'&gt\n" +
                        "                                &ltdiv&gtNot sure&lt/div&gt\n" +
                        "                            &lt/div&gt\n" +
                        "                        &lt/div&gt\n" +
                        "                    &lt/div&gt\n" +
                        "                &lt/div&gt\n" +
                        "\n" +
                        "                &ltdiv class='container formItemWrapper'&gt\n" +
                        "                    &ltdiv class='first item'&gtWhat do you like most in FCC:&lt/div&gt\n" +
                        "                    &ltdiv class='second item'&gt\n" +
                        "                        &ltselect name='role' id='option'&gt\n" +
                        "                            &ltoption value='student'&gtSelect an option&lt/option&gt\n" +
                        "                        &lt/select&gt\n" +
                        "                    &lt/div&gt\n" +
                        "                &lt/div&gt\n" +
                        "\n" +
                        "                &ltdiv class='container formItemWrapper'&gt\n" +
                        "                    &ltdiv class='first item'&gtThings that should be improved in the future&ltbr&gt(Check all that apply):&lt/div&gt\n" +
                        "                    &ltdiv class='second item'&gt\n" +
                        "                        &ltdiv class='basicContainer checkboxWrapper'&gt\n" +
                        "                            &ltdiv class='basicContainer inputItem'&gt\n" +
                        "                                &ltinput type='checkbox'&gt\n" +
                        "                                &ltdiv&gtFront-end Projects&lt/div&gt\n" +
                        "                            &lt/div&gt\n" +
                        "                            &ltdiv class='basicContainer inputItem'&gt\n" +
                        "                                &ltinput type='checkbox'&gt\n" +
                        "                                &ltdiv&gtBack-end Projects&lt/div&gt\n" +
                        "                            &lt/div&gt\n" +
                        "                            &ltdiv class='basicContainer inputItem'&gt\n" +
                        "                                &ltinput type='checkbox'&gt\n" +
                        "                                &ltdiv&gtData visualization&lt/div&gt\n" +
                        "                            &lt/div&gt\n" +
                        "                        &lt/div&gt\n" +
                        "                    &lt/div&gt\n" +
                        "                &lt/div&gt\n" +
                        "            &lt/div&gt\n" +
                        "        &lt/div&gt\n" +
                        "    &lt/div&gt\n" +
                        "&lt/body&gt\n" +
                        "&lt/html&gt",
                },
                "twoWireframeWrapperClass",
                "twoTaskRequest",
                "twoImgPreviewWrapperClass",
                "twoImgPreviewClass",
                "twoOpenButtonClass",
                "twoCloseButtonClass",
                "twoModalClassC",
                "twoModalWrapper",
                "twoImgClass",
                "twoCodeWrapperClass",
            ),
        },
        {
            title: "2.3. Wireframe with HTML and CSS (4 Punkte) Second Part",
            text: [
                {
                    request: "Was war in der Lösung dieser Aufgabe die größte Schwierigkeit und wie haben Sie diese gelöst?",
                    reply: "Die größe Schwierigkeit war das Layout von dem Eingabeelement und dessen Bezeichner, also z.B. 'Name' und das Textfeld. Die beiden Elemente sind mittig an der vertikalen Achse orientiert und besitzen zu ihr denselben Abstand. Das habe ich mit dem 'text-align' Attribut gelöst, wobei ich das erste, linke Element auf 'right' gesetzt habe und das zweite, rechte Element auf 'left'. Zusätzlich habe ich noch beide auf 'width: 50%' gesetzt, damit sie denselben Platz verbrauchen.",
                },
            ]
        },
    ]
}