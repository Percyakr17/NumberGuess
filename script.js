const numBox = document.getElementById("numBox")
const result = document.getElementById("result")
const checkBtn = document.getElementById("checkBtn")
const newGameBtn = document.getElementById("newGameBtn")
const remChecks = document.getElementById("remChecks")
const image = document.getElementById("image")
const settings = document.getElementById("settings")
const changeChecks = document.getElementById("changeChecks")


let orgNum
let enterNum
let isStarted = false
let checks

function check() {
    enterNum = numBox.value
    if (!isStarted) {
        showMessage("Start the game first")
    } else if (checks === 0) {
        showLosePrompt()
    } else if (enterNum !== "") {
        if (enterNum == orgNum) {
            showMessage("Congo! You won :)")
            checkBtn.disabled = true
        } else if (enterNum < orgNum) {
            showMessage("Try a larger number")
            updatechecks()
        } else {
            showMessage("Oh! Try a smaller number")
            updatechecks()
        }
    } else {
        showMessage("Where's the number?")
    }
}

function newGame() {
    isStarted = true
    checkBtn.disabled = false
    orgNum = Math.floor(Math.random() * 20 + 1)
    numBox.value = ""
    checks = parseInt(changeChecks.value)
    showMessage("Started.....")
    remChecks.innerText = "Remaining Checks : " + checks
}

function updatechecks() {
    checks--
    remChecks.innerText = "Remaining Checks : " + checks
    if (checks === 0) {
        showLosePrompt()
    }
}

function settingsOpen() {
    settings.style.display = settings.style.display === "none" ? "block" : "none"
}

function doneBtn() {
    checks = parseInt(changeChecks.value)
    newGame()
}

function showLosePrompt() {
    checkBtn.disabled = true
    numBox.disabled = true
    showMessage("You lose! Start a new game.")

    setTimeout(() => {
        if (confirm("Game Over! You've run out of checks. Do you want to start a new game?")) {
            newGame()
        } else {
            numBox.disabled = false
            checkBtn.disabled = true
            showMessage("Game Over! Please start a new game.")
        }
    }, 300)
}

function showMessage(msg) {
    result.innerHTML = msg
}
