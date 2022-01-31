import {renderCode} from "../ui/General/General.js";

export const tocSeven = {
    content: [
        {
            title: "Funktionen in JavaScript",
            descriptions: [
                "Functions",
                "Arrow Functions",
                "Currying",
                "Increment",
                "Prototype"
            ]
        },
    ],
}

const codeClasses = {
    codeTitleClass: "sevenCodeTitleClass",
    codeWrapperClass: "sevenCodeWrapperClass"
}

export const exerciseSeven = {
    title: "Lerneinheit 7: Funktionale Programmierung",
    tasks: [
        {
            title: "7.1: Funktionen in JavaScript (8 Punkte)",
            text: [
                {
                    request: "Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegennimmt und eine Funktion zurückgibt, die dieses Argument zurückgibt.",
                    reply: renderCode("const identity_function = x => x => x;", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)",
                    reply: renderCode("const addf = x => y => x+y;", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.",
                    reply: renderCode("const applyf = op => x => y => op(x, y);", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.",
                    reply: renderCode("const curry = (op, x) => y => op(x, y);", codeClasses)
                },
                {
                    request: "Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben, ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?",
                    reply: renderCode("const inc_addf = x => addf(x)(1);\n" +
                        "const inc_applyf = x => applyf((x, y) => x+y)(x)(1);\n" +
                        "const inc_curry = x => curry(((x, y) => x+y), x)(1);", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.",
                    reply: renderCode("const twice = op => x => (y => op(x, y))(x, x);", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert, die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.",
                    reply: renderCode("const composeu = (op1, op2) => x => op2(op1(x));", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.",
                    reply: renderCode("const composeb = (op1, op2) => (x, y, z) => op2(op1(x, y), z);", codeClasses)
                },
                {
                    request: "Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden, z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.",
                    reply: renderCode("const once = op => {\n" +
                        "    let not_called = true;\n" +
                        "    return (x, y) => {\n" +
                        "        if (not_called) {\n" +
                        "            not_called = false\n" +
                        "            return op(x, y);\n" +
                        "        }\n" +
                        "        return new Error();\n" +
                        "    }\n" +
                        "}", codeClasses)
                },
                {
                    request: "Schreiben Sie eine rücknehmbare Funktion revocable(), die als Parameter eine Funktion nimmt und diese bei Aufruf ausführt. Sobald die Funktion aber mit revoke() zurück genommen wurde, führt ein erneuter Aufruf zu einem Fehler.",
                    reply: renderCode("const revocable = op => {\n" +
                        "    const obj = {};\n" +
                        "    let invoke = true;\n" +
                        "    Object.prototype.invoke = x => invoke ? op(x) : new Error();\n" +
                        "    Object.prototype.revoke = () => {\n" +
                        "        invoke = false;\n" +
                        "    }\n" +
                        "    return obj;\n" +
                        "}", codeClasses)
                },
                {
                    request: "Implementieren Sie ein \"Array Wrapper\"-Objekt mit den Methoden get, store und append, so dass ein Angreifer keinen Zugriff auf das innere, private Array hat.",
                    reply: renderCode("const vector = () => {\n" +
                        "    const obj = {data: []};\n" +
                        "\n" +
                        "    Object.prototype.get = i => obj.data[i];\n" +
                        "    Object.prototype.store = (i, val) => obj.data[i] = val;\n" +
                        "    Object.prototype.append = val => obj.data[obj.data.length] = val;\n" +
                        "\n" +
                        "    return obj;\n" +
                        "}", codeClasses)
                },
            ],
        }
    ]
}