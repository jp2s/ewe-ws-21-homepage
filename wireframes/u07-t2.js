const text = "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <title>Plagiatsresolution</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "<header><h2 class=\"field field--name-title field--type-ds field--label-hidden\">Plagiatsresolution und -maßnahmen</h2></header>\n" +
    "\n" +
    "<div class=\"content\">\n" +
    "\n" +
    "    <a target=\"_blank\" class=\"%export%\" href=\"./load.php?target=assets%2Fhtml%2Fplagiatsresolution\">PDF export</a>\n" +
    "    <span class=\"%exported%\">%filemtime%</span>\n" +
    "\n" +
    "    <div  class=\"paragraphs-items paragraphs-items-field-pcf-content paragraphs-items-field-pcf-content-full paragraphs-items-full\">\n" +
    "        <div class=\"field field-name-field-pcf-content\">\n" +
    "            <div  class=\"entity entity-paragraphs-item paragraphs-item-para-text\">\n" +
    "        <div class=\"field field--name-field-pf-text-wysiwyg field--type-text-long field--label-hidden\">\n" +
    "            <p>\n" +
    "                <strong>Resolution zum akademischen Ethos und zu den akademischen Standards</strong></p>\n" +
    "            <p>\n" +
    "                In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die Hochschule Bonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmen einzuleiten.</p>\n" +
    "            <p>\n" +
    "                1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.</p>\n" +
    "            <p>\n" +
    "                2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohl über den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- und Denkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.</p>\n" +
    "            <p>\n" +
    "                3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.</p>\n" +
    "            <p>\n" +
    "                Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.</p>\n" +
    "            <p>\n" +
    "                <strong>Eckpunkte zur Plagiatsprüfung</strong></p>\n" +
    "            <p>\n" +
    "                Der Senat empfiehlt:</p>\n" +
    "            <p>\n" +
    "                1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss fester Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.</p>\n" +
    "            <p>\n" +
    "                2. Alle Abschlussarbeiten werden auf Plagiate geprüft.</p>\n" +
    "            <p>\n" +
    "                3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.</p>\n" +
    "            <p>\n" +
    "                4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.</p>\n" +
    "            <p>\n" +
    "                5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.</p>\n" +
    "            <p>\n" +
    "                6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.</p>\n" +
    "            <p>\n" +
    "                7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule stichprobenartige Plagiatsprüfungen vor.</p>\n" +
    "            <p>\n" +
    "                <strong>Selbstverpflichtungserklärung der Studierenden:</strong></p>\n" +
    "            <p>\n" +
    "                Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.</p>\n" +
    "            <p>\n" +
    "                \"Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin.\"</p>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "</article>\n" +
    "</body>\n" +
    "</html>\n";

const removeTags = text => {
    let isTag = false;
    let result = [];
    text.split("").map(char => {
        if (char === "<") {
            isTag = true;
        }
        if (!isTag && char !== '\n' && char !== '\\n') {
            result.push(char);
        }
        if (char === ">") {
            isTag = false;
        }
    })
    return result.join("").split(" ").filter(char => char !== "").join(" ");
}

const findHighestFrequency = text => {
    const counts = {};
    text.split(" ").map(char => {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    });
    const entries = Object.entries(counts);
    const sorted = entries.sort((a, b) => b[1] - a[1]);

    return [sorted[0][0], sorted[1][0], sorted[2][0]];
}

const result = findHighestFrequency(removeTags(text));
console.log(result);
