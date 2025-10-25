var formConEl = document.querySelector(".formContainer")
var switchConEl = document.querySelector(".switchContainer")
var switchpanel = document.querySelector(".move")
var signInEl = document.querySelector("#sign-in")
var signUpEl = document.querySelector("#sign-up")

var overlayContainerEl = document.querySelector(".overlay-container")
var overlaylEl = document.querySelector(".overlayLeft")

function alt(){
    formConEl.classList.toggle("changed")
    switchConEl.classList.toggle("changed")
    signInEl.classList.toggle("changed")
    signUpEl.classList.toggle("changed")
    overlayContainerEl.classList.toggle("changed")
    overlayrEl.classList.toggle("changed")
}



