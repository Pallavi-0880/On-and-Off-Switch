const button = document.querySelector(".btn")
let text = 0;
button.addEventListener("click", changeButton)
function changeButton(){
    if (text === 0) {
        button.textContent = "Turn On"
        button.style.backgroundColor="lightgreen"
        text = 1
    }
    else {
        button.textContent = "Turn Off"
        button.style.backgroundColor="White"
        text = 0
    }
}