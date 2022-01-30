import {fetchCode} from "../util/code.js";
import {renderWireframe} from "../ui/Wireframe/Wireframe.js";
import {modalIdGenerator} from "../util/generator.js";

const modalIds = modalIdGenerator()

export const tocOne = {
    content: [
        {
            title: "Fachliche Argumentation über Erfolgsprinzipien des WWW",
            descriptions: [
                "Arguments against the WWW",
                "Arguments in favor of the WWW",
                "Broken links",
            ]
        },
        {
            title: "HTTP",
            descriptions: [
                "HTTP Status Codes 200, 301, 400 and 403",
                "HTTP Options",
                "Caching of HTTP Requests",
            ]
        },
        {
            title: "HTML-Literatur lesen und Fragen beantworten",
            descriptions: [
                "What is HTML?",
                "Nesting HTML Lists",
                "Building a menu / table",
                "Naming conventions",
                "Image attributes",
            ]
        },
        {
            title: "HTML Wireframe",
            descriptions: [
                "Wireframe without CSS",
                "Wireframe without JavaScript",
            ]
        },
    ],
}

const wireframeClasses = {
    wireframeWrapperClass: "oneWireframeWrapperClass",
    requestClass: "oneTaskRequest",
    imgPreviewWrapperClass: "oneImgPreviewWrapperClass",
    imgPreviewClass: "oneImgPreviewClass",
    openButtonClass: "oneOpenButtonClass",
    closeButtonClass: "oneCloseButtonClass",
    modalClass: "oneModalClass",
    modalWrapper: "oneModalWrapper",
    imgClass: "oneImgClass",
    codeTitleClass: "oneCodeTitleClass",
    codeWrapperClass: "oneCodeWrapperClass",
    iframeTitleClass: "oneIframeTitleClass",
    wireframePagePreviewContainerClass: "oneWireframePagePreviewContainerClass",
    wireframePagePreviewWrapperClass: "oneWireframePagePreviewWrapperClass",
    wireframePagePreviewClass: "oneWireframePagePreviewClass",
    wireframePageModalClass: "oneWireframePageModalClass",
    wireframePageModalWrapper: "oneWireframePageModalWrapper",
    wireframePageClass: "oneWireframePageClass",
    wireframePageRefClass: "oneWireframePageRefClass"
}

export const exerciseOne = {
    title: "Lerneinheit 1: HTTP, URI und HTML",
    tasks: [
        {
            title: "1.1. Fachliche Argumentation über Erfolgsprinzipien des WWW (2 Punkte)",
            text: [
                {
                    request: "Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?",
                    reply: "Ein Argument von der Hypertextcommunity war, dass das Konzept von TBL ein Rückschritt gewesen wäre, da sie schon weiter in der Wissenschaft vorangeschritten seien und mehr erreicht haben. Zudem bemängeln sie das mögliche Auftreten der \"broken links\", also Links, die ins Leere zeigen und auf nichts mehr verweisen.",
                },
                {
                    request: "Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?",
                    reply: "Argumente für den Erfolg sind die Eigenschaften der Offenheit, Dezentralität und Evolvierbarkeit.",
                },
                {
                    request: "Was wäre der Preis für die garantierte Verhinderung von “broken links”?",
                    reply: "Ein Nachteil der referentiellen Integrität ist der erhöhte Bedarf an Rechenressourcen.",
                }
            ]
        },
        {
            title: "1.2. HTTP (2 Punkte)",
            text: [
                {
                    request: "Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?",
                    reply: "HTTP Status Code 200 bedeutet, dass die Anfrage erfolgreich war.",
                },
                {
                    request: "Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?",
                    reply: "HTTP Status Code 301 bedeutet, dass die angefragte Seite dauerhaft auf eine andere Seite verschoben wurde und der Link ausgetauscht werden sollte.",
                },
                {
                    request: "Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was können Sie dagegen tun?",
                    reply: "HTTP Status Code 400 bedeutet, dass der Server die Anfrage nicht bearbeiten kann oder bearbeiten wird. Man kann die angefragte URL auf Fehler überprüfen, den Cache leeren, das System neu starten, die Internetverbindung überprüfen oder Browser Erweiterungen deaktivieren.",
                },
                {
                    request: "Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was können Sie dagegen tun?",
                    reply: "HTTP Status Code 403 bedeutet, dass der Zugriff vom Server verwehrt wurde. Man kann prüfen, ob man die benötigten Rechte zum Zugriff besitzt oder ob man sich richtig autorisiert hat. Auch hier kann man den Cache leeren oder das System neu starten.",
                },
                {
                    request: "In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgründen soll die Abfrage jedoch cacheable sein. Wie könnten Sie dafür eine Lösung angehen?",
                    reply: "Man könnte die Daten für eine OPTIONS Anfrage über eine GET Anfrage abrufbar machen und diese GET Anfrage dann cachen.",
                },
            ]
        },
        {
            title: "1.3. HTML-Literatur lesen und Fragen beantworten (2 Punkte)",
            text: [
                {
                    request: "Was ist HTML?",
                    reply: "HTML ist eine Sprache, mit der man Bilder, Links und Text strukturiert. Mit HTML wird der Inhalt im WWW dargestellt.",
                },
                {
                    request: "Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen?",
                    reply: "Man kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen, indem man in die li Listenelemente wieder eine geordnete Liste mit ol einfügt. Dort drin fügt man wieder eine geordnete Liste in dem Listenelement ein und wiederholt den Einfügeprozess. Den Einfügeprozess wiederholt man ingesamt dann 3 Mal.",
                },
                {
                    request: "Wie ist eine HTML-Tabelle aufgebaut?",
                    reply: "HEine HTML-Tabelle wird mit dem table Tag eingeleitet. Für jede Zeile in der Tabelle benutzt man ein tr Tag. In diesem Tag wird der Inhalt jeder Zelle in ein td Tag geschrieben. Zusätzlich kann man noch innerhalb des td Tags ein th Tag benutzen für die Kopfzeile.",
                },
                {
                    request: "Welche Konventionen sollte man bei Pfaden und Dateinamen beachten?",
                    reply: "Die Namen aller Dateien sollten kleingeschrieben werden, sowie nur Buchstaben, Zahlen, Bindestriche und Unterstriche enthalten. Dateien sollten nach Typ in entsprechende Ordner sortiert werden, wie 'img' für Bilder. Dateien sollten dem Inhalt entsprechend benannt werden, wie 'index' für die Startseite und Einstiegspunkt.",
                },
                {
                    request: "Wie baut man in HTML ein Menü?",
                    reply: "Für ein Menü eignet sich eine ungeordnete Liste mit dem u Tag. Die Menüeinträge werden dann von li Tags als Listenelement umschlossen. Wenn damit ein Navigationsmenü implementiert wird, dann umschließt man die Liste bzw. den Inhalt noch mit einem nav Tag.",
                },
                {
                    request: "Welche Attribute sollte man bei Bildern wie verwenden?",
                    reply: "Das 'src' Attribut wird für die Quelle des Bildes durch eine URL verwendet. 'height' und 'width' werden für die Angaben der Breite und Höhe verwendet. Beim 'alt' Attribut wird Text angegeben, der angezeigt wird, falls das Bild nicht geladen werden kann.",
                },
            ]
        },
        {
            title: "1.4. HTML Wireframe (4 Punkte)",
            wireframe: renderWireframe(
                {
                    requestText: "Mit welchem HTML-Code (ohne CSS, nur mit HTML-Tags) kann man diesen Wireframe exakt nachbilden?",
                    imgSrc: "https://kaul.inf.h-brs.de/we/assets/img/wireframe01.jpg",
                    wireframePageSrc: "../wireframes/u01.html",
                    code: await fetchCode("../wireframes/u01.html")
                },
                wireframeClasses,
                modalIds.next().value
            ),
        },
    ]
}