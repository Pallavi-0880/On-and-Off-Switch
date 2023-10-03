
const button = document.querySelector(".btn")
let comp = 0;
button.addEventListener("click", changeButton)
function changeButton() {
    if (comp === 0) {
        button.textContent = "Turn on"
        button.style.backgroundColor = "green"
        let img = document.querySelector("#image")
        img.setAttribute("src", "bulb-on.png")
        comp = 1
    }
    else {
        button.textContent = "Turn off"
        button.style.backgroundColor = "white"
        let img = document.querySelector("#image")
        img.setAttribute("src", "bulb-off.png")
        comp = 0
    }
}