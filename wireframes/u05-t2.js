const calcTimer = () => {
    const activeTimer = document.getElementById("activeTimer");
    if (activeTimer) {
        const text = activeTimer.childNodes[0].innerText;
        const lastIndex = text.lastIndexOf(" ");

        const name =
            text
                .split("")
                .filter(char => text.indexOf(char) < lastIndex)
                .join("");
        const currentTimes =
            text
                .split("")
                .filter(char => text.indexOf(char) > lastIndex)
                .join("")
                .split(":");

        let h = currentTimes[0];
        let m = currentTimes[1];
        let s = currentTimes[2];

        ++s;
        if (String(s).length == 1) {
            s = `0${s}`;
        }
        if (s == 60) {
            s = "00";
            ++m;
        }

        if (String(m).length == 1) {
            m = `0${m}`;
        }
        if (m == 60) {
            m = "00";
            ++h;
        }

        if (String(h).length == 1) {
            h = `0${h}`;
        }

        document.getElementById("activeTimer").childNodes[0].innerText = `${name} ${h}:${m}:${s}`
    }
}

const stopTimers = () => {
    let timers = document.getElementsByClassName("timer");
    timers = [...timers];
    if (timers) {
        timers.map(timer => {
            let timerButton = timer.childNodes[1];
            timerButton.setAttribute("class", "startButton");
            timerButton.setAttribute("onclick", "startTimer(this.parentNode)");
            timerButton.innerText = "start";
        })
    }

    const currentTimer = document.getElementById("activeTimer");
    if (currentTimer) {
        currentTimer.removeAttribute("id");
    }
}

const stopTimer = (clickedTimer) => {
    clickedTimer.removeAttribute("id", "activeTimer");
    let timerButton = clickedTimer.childNodes[1];

    timerButton.setAttribute("class", "startButton");
    timerButton.setAttribute("onclick", "startTimer(this.parentNode)");
    timerButton.innerText = "start";
}

const startTimer = (clickedTimer) => {
    stopTimers();

    clickedTimer.setAttribute("id", "activeTimer");
    let timerButton = clickedTimer.childNodes[1];

    timerButton.setAttribute("class", "stopButton");
    timerButton.setAttribute("onclick", "stopTimer(this.parentNode)");
    timerButton.innerText = "stop";
}

const addTalker = () => {
    stopTimers();

    const inputText = document.getElementById("textInput").value;
    if (inputText) {
        document.getElementById("textInput").value = "";

        const talkerList = document.getElementById("talkerList");
        const listItem = document.createElement("li");

        const timer = document.createElement("div");
        timer.setAttribute("class", "timer container");
        timer.setAttribute("id", "activeTimer");

        const timerButton = document.createElement("div");
        timerButton.setAttribute("class", "stopButton");
        timerButton.setAttribute("onclick", "stopTimer(this.parentNode)");
        timerButton.innerText = "stop";

        const timerText = document.createElement("div");
        timerText.innerText = `${inputText} 00:00:00`

        timer.append(timerText)
        timer.append(timerButton)

        listItem.append(timer)
        talkerList.append(listItem);
    }
}

setInterval(calcTimer, 1000)

// from https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
let input = document.getElementById("textInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});