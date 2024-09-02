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
        result.innerHTML = "Start the game first"
    } else if (checks === 0) {
        showLosePrompt()
    } else if (enterNum !== "") {
        if (enterNum == orgNum) {
            result.innerHTML = "Congo ! You won :)"
            checkBtn.disabled = true
        } else if (enterNum < orgNum) {
            result.innerHTML = "Try a larger number"
            updatechecks()
        } else {
            result.innerHTML = "Oh! Try a smaller number"
            updatechecks()
        }
    } else {
        result.innerHTML = "Where's the number?"
    }
}

function newGame() {
    isStarted = true
    checkBtn.disabled = false
    orgNum = Math.floor(Math.random() * 20 + 1)
    numBox.value = ""
    checks = changeChecks.value
    result.innerHTML = "Started....."
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
    checks = changeChecks.value
    newGame()
}

function showLosePrompt() {
    result.innerHTML = "You lose! Start a new game."
    checkBtn.disabled = true
    numBox.disabled = true

    setTimeout(() => {
        alert("Game Over! You've run out of checks. Better luck next time!")
        numBox.disabled = false
        remChecks.innerText = "Remaining Checks : 0"
    }, 300)
}
