import {fetchCode} from "../util/code.js";
import {renderCode} from "../ui/General/General.js";
import {defaultCodeClasses} from "../util/classes.js";

export const tocTen = {
    content: [
        {
            title: "Static classes in TypeScript",
            descriptions: [
                "TypeScript in contrast to Java and C#",
            ]
        },
        {
            title: "Fehler finden mit TypeScript",
            descriptions: [
                "Add Types",
                "TypeScript Errors"
            ]
        },
        {
            title: "TypeScript auf Deno",
            descriptions: [
                "Deno Runtime Engine",
                "Deno Server",
            ]
        },
    ],
}

export const exerciseTen = {
    title: "Lerneinheit 10: TypeScript",
    tasks: [
        {
            title: "10.1. Static classes in TypeScript (2 Punkte)",
            text: [
                {
                    request: "Gibt es in TypeScript statische Klassen? Erläutern Sie den Unterschied von TypeScript zu anderen objekt-orientierten, statisch typisierten Programmiersprachen wie Java und C#.",
                    reply: "In TypeScript gibt es keine statischen Klassen. Da bei TypeScript im Gegensatz zu C# und Java nicht alles in einer Klasse geschrieben sein muss, besteht kein Bedarf für statische Klassen." +
                        "<br>" +
                        "TypeScript besitzt ein strukturelles Typsystem. Das heisst, Elemente sind kompatibel zueinander, wenn sie dieselben Eigenschaften besitzen. Das steht im Kontrast zu Java und C#, die ein nominatives Typsystem besitzen. Bei diesem Typsystem sind Elemente nur kompatibel zueinander, wenn ihre Deklaration denselben Typ hat. Elemente zweier Typen, die genau dieselben Eigenschaften besitzen, sind also nicht kompatibel zueinander."
                }
            ]
        },
        {
            title: "10.2. Fehler finden mit TypeScript (3 Punkte)",
            text: [
                {
                    request: `Gegeben sei folgendes fehlerbehaftete JavaScript-Programm. Ergänzen Sie dieses um möglichst viele Typisierungen und übersetzen Sie es in ein TypeScript-Programm.<br><br>${renderCode("const add = (x,y) => x+y;\n" +
                        "const equals = (x,y) => x===y;\n" +
                        "\n" +
                        "console.log( add(1,2) );\n" +
                        "console.log( add(true, true ) );\n" +
                        "console.log( add(true, false ) );\n" +
                        "var x = y = 1;\n" +
                        "console.log( add(equals(x,y), equals(y,x)) );", defaultCodeClasses)}<br>Was ist der Fehler in dem gegebenen JavaScript-Code?`,
                    reply: "Da JavaScript eine lose Typisierung hat, werden Datentypen je nach Situation automatisch in andere Datentypen umgewandelt. So werden Boolesche Werte in die Zahlen 1 und 0 umgewandelt, sobald man sie addiert."
                },
                {
                    request: "Geben Sie hier Ihren TypeScript-Code ein:",
                    reply: renderCode("const add = (x: number, y: number): number => x+y;\n" +
                        "const equals = (x: any, y: any): boolean => x===y;\n" +
                        "\n" +
                        "console.log( add(1,2) );\n" +
                        "console.log( add(true, true ) );\n" +
                        "console.log( add(true, false ) );\n" +
                        "var x = y = 1;\n" +
                        "console.log( add(equals(x,y), equals(y,x)) );", defaultCodeClasses)
                },
                {
                    request: "Welche Fehler meldet TypeScript?",
                    reply: "TypeScript meldet folgende Fehler:<br>" +
                        "TS2304: Cannot find name 'y'.<br>" +
                        "TS2345: Argument of type 'boolean' is not assignable to parameter of type 'number'."
                },
                {
                    request: "Geben Sie weitere Beispiele an, wie TypeScript bei der Fehlersuche helfen kann:",
                    reply: "TypeScript meldet einen Fehler, wenn bestimmte Eigenschaften eines Typs fehlen, die man dann nachträglich hinzufügen kann. <br>" +
                        "Umgedreht gibt es einen Fehler beim Zugriff auf Eigenschaften, die bei einem Typ nicht existieren. <br>" +
                        "Hilfreich ist auch der Hinweis auf den Rückgabewert einer Funktion, wenn TypeScript meldet, dass eine Funktion 'void' anstatt eines bestimmtetn Typs zurückgibt. Das weist darauf hin, dass man an einer Stelle das 'return' vergessen hat. <br>" +
                        "Ebenso meldet sich TypeScript, wenn man explizite Typen vergessen hat und man somit implizit den 'any' Type benutzt."
                }
            ]
        },
        {
            title: "10.3. TypeScript auf Deno(5 Punkte)",
            text: [
                {
                    request: "Auf Deno ist TypeScript ohne Übersetzung direkt ablauffähig. Deno ist also die Runtime Engine für TypeScript.<br>" +
                        "<br>" +
                        "Schreiben Sie in TypeScript möglichst umfangreich statisch typisiert ein auf Deno ablauffähiges Programm server.ts, das Sie mit deno run --allow-net server.ts starten können, das die COVID-19-Fallzahlen in Deutschland einliest, Minimum, Maximum, Durchschnitt und Summe berechnet und diese auf einer Webseite ausgibt.<br>" +
                        "<br>" +
                        "Ein Beispiel-Programm zu server.ts finden Sie im Deno-Manual unter Making an HTTP request",
                    reply: renderCode(await fetchCode("../wireframes/u10-t3.ts"), defaultCodeClasses)
                },
            ]
        },
    ]
}