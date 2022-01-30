export const fetchCode = src =>
    fetch(src)
        .then(result => result.text())
        .then(text => text.split("").map(char => {
            switch (char) {
                case "<":
                    return "&lt";
                case ">":
                    return "&gt";
                case "\"":
                    return "'";
                default:
                    return char;
            }
        }).join(""))
