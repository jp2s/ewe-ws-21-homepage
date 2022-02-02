import {fetchCode} from "../util/code.js";
import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {modalIdGenerator} from "../util/generator.js";
import {defaultCodeClasses, defaultWireframeClasses} from "../util/classes.js";
import {renderCode} from "../ui/General/General.js";

const modalIds = modalIdGenerator();

export const tocEleven = {
    content: [
        {
            title: "Komponente in Vue.js",
            descriptions: [
                "Components",
                "Single File Component",
                "Word Counter",
                "Text Analyzer",
            ]
        },
        {
            title: "Menü-Komponente",
            descriptions: [
                "Single File Component",
                "Reusable Component",
                "Horizontal and Vertical Menu Variant"
            ]
        },
        {
            title: "Vue.js WWW-Navigator",
            descriptions: [
                "Content from JSON-File",
                "Full Website",
                "Site for Web Topics",
                "Menus and Submenus",
                "Responsive Layout",
                "Implementing with Vue.js",
                "Single Page Application"
            ]
        },
    ],
}

export const exerciseEleven = {
    title: "Lerneinheit 11: Vue.js",
    tasks: [
        {
            title: "11.1: Komponente in Vue.js (2 Punkte)",
            text: [
                {
                    request: "Schreiben Sie eine Vue.js Single File Component mit einem Text-Eingabefeld und 3 Ausgabefeldern, in denen man während des Tippens sehen kann, (a) wie viele Buchstaben (b) wie viele Leerzeichen und (c) wie viele Worte man in das Text-Eingabefeld bereits eingegeben hat.\n" +
                        "<br><br>" +
                        "Betten Sie Ihre Komponente in eine Webseite zweimal ein und testen Sie, ob beide Komponenten unabhängig voneinander sind.",
                    reply: renderCode(await fetchCode("../wireframes/TextAnalyzer.js"), defaultCodeClasses),
                }
            ],
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Geben Sie die Webseite, auf der Sie Ihre Komponente mehrfach testen, hier ein:",
                        taskPageSrc: "../wireframes/u11-t1.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value
                )
            ]
        },
        {
            title: "11.2: Menü-Komponente (3 Punkte)",
            text: [
                {
                    request: "Schreiben Sie eine möglichst flexible Vue.js Single File Component für Menüs und wenden Sie diese in derselben Webseite zweimal an, einmal horizontal, das andere Mal vertikal." +
                        "<br><br>" +
                        "Component File:",
                    reply: renderCode(await fetchCode("../wireframes/MyMenu.js"), defaultCodeClasses),
                }
            ],
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Geben Sie die Webseite, auf der Sie Ihre Komponente mehrfach testen, hier ein:",
                        taskPageSrc: "../wireframes/u11-t2.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value
                )
            ]
        },
        {
            title: "11.3: Vue.js WWW-Navigator (5 Punkte)",
            text: [
                {
                    request: "Schreiben Sie Ihren WWW-Navigator als SPA in Vue.js" +
                        "<br><br>" +
                        "Dokumentieren Sie Ihren Entscheidungsprozess: In welche Komponenten wollen Sie Ihre App zerlegen? Wie soll das State Management implementiert werden?",
                    reply: "Die Seite habe ich in mehrere Komponenten unterteilt. Diese bestehen aus einem 'Header' für die Navigation der Seiten, der wiederum aus 'Menu-Entries' besteht. Der eigentliche Seiteninhalt ist 'Content', der ebenfalls aus 'Menu-Entries' für die Unterseiten besteht, sowie einem 'Content-Frame'. Dieses 'Content-Frame' zeigt den Text der Unterseite samt Referenz an.\n" +
                        "<br><br>" +
                        "Das State Management besteht aus einer Setter-Methode in der Parent-Komponente und einer Event-Handler Property in der Child-Komponente, die diese Methode dann aufruft. Somit kann beim Klicken auf einen Menüeintrag der State vom Menu-Index geändert werden. Die einzelnen Seiten werden dann mittels Conditional-Rendering auf Basis von diesem Index angezeigt.",
                },
                {
                    request: "ContentComp.js:",
                    reply: renderCode(await fetchCode("../wireframes/ContentComp.js"), defaultCodeClasses)
                },
                {
                    request: "ContentFrameComp.js:",
                    reply: renderCode(await fetchCode("../wireframes/ContentFrameComp.js"), defaultCodeClasses)
                },
                {
                    request: "ContentMenu.js:",
                    reply: renderCode(await fetchCode("../wireframes/ContentMenu.js"), defaultCodeClasses)
                },
                {
                    request: "HeaderComp.js:",
                    reply: renderCode(await fetchCode("../wireframes/HeaderComp.js"), defaultCodeClasses)
                },
                {
                    request: "MenuEntryComp.js:",
                    reply: renderCode(await fetchCode("../wireframes/MenuEntryComp.js"), defaultCodeClasses)
                },
            ],
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Geben Sie die Webseite, auf der Sie Ihre Komponente mehrfach testen, hier ein:",
                        taskPageSrc: "../wireframes/u11-t3.html"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value
                )
            ]
        }
    ]
}