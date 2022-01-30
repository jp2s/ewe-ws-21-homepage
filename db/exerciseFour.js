import {renderCode} from "../ui/General/General.js";
import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {modalIdGenerator} from "../util/generator.js";

const modalIds = modalIdGenerator();

export const tocFour = {
    content: [
        {
            title: "Funktionen",
            descriptions: [
                "JavaScript",
                "Functions",
                "Callbacks",
            ]
        },
        {
            title: "Objects",
            descriptions: [
                "JavaScript",
                "Objects",
                "Protoype",
            ]
        },
        {
            title: "Fibonacci",
            descriptions: [
                "JavaScript",
                "Fibonacci Function",
                "Recursion",
                "Performance",
                "Number.MAX_VALUE",
                "Number.MAX_SAFE_INTEGER",
                "BigInt",
            ]
        },
        {
            title: "Topsort",
            descriptions: [
                "JavaScript",
                "Algorithm",
                "Topological Sort",
            ]
        },
    ],
}

const codeClasses = {
    codeTitleClass: "fourCodeTitleClass",
    codeWrapperClass: "fourCodeWrapperClass"
}

const wireframeClasses = {
    wireframeWrapperClass: "fourWireframeWrapperClass",
    taskPageWrapperClass: "fourWireframeWrapperClass",
    requestClass: "fourTaskRequest",
    imgPreviewWrapperClass: "fourImgPreviewWrapperClass",
    imgPreviewClass: "fourImgPreviewClass",
    openButtonClass: "fourOpenButtonClass",
    closeButtonClass: "fourCloseButtonClass",
    modalClass: "fourModalClass",
    modalWrapper: "fourModalWrapper",
    imgClass: "fourImgClass",
    codeTitleClass: "fourCodeTitleClass",
    codeWrapperClass: "fourCodeWrapperClass",
    iframeTitleClass: "fourIframeTitleClass",
    wireframePagePreviewContainerClass: "fourWireframePagePreviewContainerClass",
    wireframePagePreviewWrapperClass: "fourWireframePagePreviewWrapperClass",
    wireframePagePreviewClass: "fourWireframePagePreviewClass",
    wireframePageModalClass: "fourWireframePageModalClass",
    wireframePageModalWrapper: "fourWireframePageModalWrapper",
    wireframePageClass: "fourWireframePageClass",
    wireframePageRefClass: "fourWireframePageRefClass"
}

export const exerciseFour = {
    title: "Lerneinheit 4: JavaScript",
    tasks: [
        {
            title: "4.1. Funktionen (2 Punkte)",
            text: [
                {
                    request: "Schreiben Sie eine Funktion identity(), die ein Argument als Parameter entgegen nimmt und dieses als Ergebnis zurück gibt.",
                    reply: renderCode("function identity (a) {\n" +
                        "  return a;\n" +
                        "}", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt.",
                    reply: renderCode("function identity_function (a) {\n" +
                        "  return function () {\n" +
                        "    return a;\n" +
                        "  }\n" +
                        "}", codeClasses)
                },
                {
                    request: "Schreiben Sie zwei binäre Funktionen add und mul, die Summe und Produkt berechnen.",
                    reply: renderCode("function add (a, b) {\n" +
                        "  return a+b;\n" +
                        "}\n" +
                        "\n" +
                        "function mul (a, b) {\n" +
                        "  return a*b;\n" +
                        "}", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)",
                    reply: renderCode("function addf (a) {\n" +
                        "  return function (b) {\n" +
                        "    return a+b;\n" +
                        "  }\n" +
                        "}", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.",
                    reply: renderCode("function applyf (operation) {\n" +
                        "  return function(a) {\n" +
                        "    return function(b) {\n" +
                        "      return operation(a, b);\n" +
                        "    }\n" +
                        "  }\n" +
                        "}", codeClasses)
                }
            ]
        },
        {
            title: "4.2. Objekte(2 Punkte)",
            text: [
                {
                    request: "Schreiben Sie die Prototypen Person und Auto in JavaScript, so dass jede Person weiß, welche Autos sie besitzt. Schreiben Sie eine Funktion conflict(), die feststellt, ob ein Auto von mehr als einer Person besessen wird.",
                    reply: renderCode("let Auto = {\n" +
                        "    toString: function () {\n" +
                        "        return `${this.brand}`;\n" +
                        "    },\n" +
                        "    brand: '',\n" +
                        "}\n" +
                        "\n" +
                        "let Person = {\n" +
                        "    toString: function () {\n" +
                        "        return `i own ${this.cars.join(', ')}`;\n" +
                        "    },\n" +
                        "    cars: [],\n" +
                        "}\n" +
                        "\n" +
                        "let Mazda = {\n" +
                        "    __proto__: Auto,\n" +
                        "    brand: 'Mazda'\n" +
                        "}\n" +
                        "let Toyota = {\n" +
                        "    __proto__: Auto,\n" +
                        "    brand: 'Toyota'\n" +
                        "}\n" +
                        "let Honda = {\n" +
                        "    __proto__: Auto,\n" +
                        "    brand: 'Honda'\n" +
                        "}\n" +
                        "\n" +
                        "const johnDoe = {\n" +
                        "    __proto__: Person,\n" +
                        "    cars: [Mazda, Toyota]\n" +
                        "}\n" +
                        "const janeDoe = {\n" +
                        "    __proto__: Person,\n" +
                        "    cars: [Honda, Mazda]\n" +
                        "}\n" +
                        "\n" +
                        "function conflict(selectedCar, persons) {\n" +
                        "    return persons\n" +
                        "        .map(person => person.cars\n" +
                        "            .filter(car => car.toString() === selectedCar.toString()))\n" +
                        "        .flatMap(car => car).length > 1\n" +
                        "}\n" +
                        "\n" +
                        "console.log(johnDoe)\n" +
                        "console.log(johnDoe.toString())\n" +
                        "\n" +
                        "console.log(conflict(Mazda, [janeDoe, johnDoe]))",
                        codeClasses
                    )
                }
            ]
        },
        {
            title: "4.3. Fibonacci(3 Punkte)",
            text: [
                {
                    request: "Was ist die größte Fibonacci-Zahl, die sich noch als Integer sicher speichern lässt (Number.MAX_SAFE_INTEGER)? Die wievielte Fibonacci-Zahl in der Fibonacci-Folge ist das?",
                    reply: "Die größte Fibonacci-Zahl, die sich noch als Integer sicher speichern lässt, ist 8944394323791464. Dies ist die 79. Fibonacci-Zahl"
                },
                {
                    request: "Was ist die größte Fibonacci-Zahl, die sich noch als Number speichern lässt (Number.MAX_VALUE)? Die wievielte Fibonacci-Zahl in der Fibonacci-Folge ist das (d.h. welche Stelle in der Fibonacci-Folge)?",
                    reply: "Die größte Fibonacci-Zahl, die sich noch als Number sicher speichern lässt, ist 1.3069892237633987e+308. Dies ist die 1477. Fibonacci-Zahl"
                },
                {
                    request: "Schreiben Sie im Browser die Fibonacci-Funktion in JavaScript und geben Sie die ersten 2000 Fibonacci-Zahlen 0,1,1,2,3,5,8,13,... auf der Konsole mit console.log() aus.\n" +
                        "\n" +
                        "Achten Sie auf Performanz: Berechnen Sie jeden Fibonacci-Wert nur einmal. Speichern Sie zu diesem Zweck jede bereits berechnete Fibonacci-Zahl in einer Tabelle.",
                    reply: "See Code below"
                },
            ],
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Wechseln Sie zu BigInt, um alle 2000 Fibonacci-Zahlen korrekt anzuzeigen. Geben Sie hier HTML- und JavaScript-Code zusammen ein:",
                        taskPageSrc: "../wireframes/u04-t3.html"
                    },
                    wireframeClasses,
                    modalIds.next().value,
                ),

            ]
        },
        {
            title: "4.4. Topsort (3 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "In jedem Projekt fallen Aufgaben (Tasks) an. Zwischen den Aufgaben gibt es paarweise Abhängigkeiten. Z.B. kann Task2 von Task1 abhängen, d.h. erst muss Task1 fertig sein, bevor Task2 starten kann, weil es dessen Ergebnisse benötigt. Tasks können auch unabhängig voneinander sein und parallel ablaufen. In JavaScript können Sie die Abhängigkeiten in Arrays codieren, z.B. kann man bei [ [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"studieren\", \"prüfen\"] ] nicht prüfen, ohne vorher gegessen zu haben. Transitive Abhängigkeiten müssen also berücksichtigt werden.\n" +
                            "<br><br>" +
                            "Schreiben Sie in JavaScript eine Funktion topsort(), die eine topologische Sortierung berechnet. Topologische Sortierung ist eine Form von Sortierung. Sie kennen die Funktion Array.prototype.sort() und wissen, was als Ergebnis erwartet wird, nämlich eine sortiere Liste. Genauso ist das hier. Die Funktion topsort() soll eine sortierte Liste ausgeben, die keine der eingegebenen Abhängigkeiten verletzt.\n" +
                            "<br><br>" +
                            "Achten Sie auf Performanz. Berechnen Sie die topologische Sortierung in linearer Zeit (Average Case)." +
                            "<br><br>" +
                            "Geben Sie hier HTML- und JavaScript-Code zusammen ein:",
                        taskPageSrc: "../wireframes/u04-t4.html"
                    },
                    wireframeClasses,
                    modalIds.next().value,
                ),

            ]
        }
    ]
}