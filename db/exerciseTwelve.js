import {renderTaskPage} from "../ui/TaskPage/TaskPage.js";
import {modalIdGenerator} from "../util/generator.js";
import {defaultWireframeClasses} from "../util/classes.js";

const modalIds = modalIdGenerator();

export const tocTwelve = {
    content: [
        {
            title: "Registrierung mit PHP",
            descriptions: [
                "Registration",
                "HTTP POST",
                "Persistence",
                "Hashed Passwords",
                "Validation"
            ]
        },
        {
            title: "Login mit PHP",
            descriptions: [
                "Login",
                "HTTP POST",
                "Validation"
            ]
        },
    ],
}

export const exerciseTwelve = {
    title: "Lerneinheit 12: PHP",
    tasks: [
        {
            title: "12.1. Registrierung mit PHP (3 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Erstellen Sie mit PHP 5 auf www2.inf.h-brs.de ein Registrierungsformular. Speichern Sie die eingegebenen Daten persistent in einer Datei auf www2.inf.h-brs.de. Schreiben Sie Ihre PHP-Scripte so, dass es zu keinen Nebenläufigkeitsartefakten (z.B. Lost Update) kommen kann, egal wie viele Nutzer sich gleichzeitig registrieren.",
                        taskPageSrc: "../wireframes/u12-t1.php"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value
                )
            ]
        },
        {
            title: "12.2: Login mit PHP (2 Punkte)",
            taskPages: [
                await renderTaskPage(
                    {
                        requestText: "Schreiben Sie eine sichere PHP-Lösung für Login, das die persistierten Registrierungsdaten aus der letzten Aufgabe nutzt. ",
                        taskPageSrc: "../wireframes/u12-t2.php"
                    },
                    defaultWireframeClasses,
                    modalIds.next().value
                )
            ]
        },
    ]
}