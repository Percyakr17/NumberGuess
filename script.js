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

function check(){
    
    enterNum = numBox.value
    if(isStarted == false){
        result.innerHTML = "Start the game first"
    }else if(checks === 0){
        result.innerHTML = "You lose! Start new game again"
        updatechecks()
        checkBtn.disabled = true
    }
    else if(enterNum != ""){
        if(enterNum == orgNum){
            result.innerHTML = "Congo ! You won :)"
            checkBtn.disabled = true
        } else if(enterNum < orgNum){
            result.innerHTML = "Try a larger number"
            updatechecks()
        } else{
            result.innerHTML = "Oh! Try a smaller number"
            updatechecks()
        }
    }
    else{
        result.innerHTML = "Where's the number?"
    }
    
}

function newGame(){
    isStarted = true
    checkBtn.disabled = false
    orgNum = Math.floor(Math.random() * 20 + 1)
    numBox.value = ""
    checks = changeChecks.value
    result.innerHTML = "Started....."
    remChecks.innerText = "Remaining Checks : " + checks
}

function updatechecks(){
    checks--
    remChecks.innerText = "Remaining Checks : " + checks
}

function settingsOpen(){
    if(settings.style.display === "none"){
        settings.style.display = "block"
    }else{
        settings.style.display = "none"
    }
}

function doneBtn(){
    checks = changeChecks.value
    newGame()
}