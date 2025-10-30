// container of 2 forms
var formConEl = document.querySelector(".formContainer") as HTMLElement | null;
// container of 2 switch panels
var switchConEl = document.querySelector(".switchContainer") as HTMLElement | null;
// container of sign in form (default visible)
var signInEl = document.querySelector("#sign-in") as HTMLElement | null;
// container of sign up form
var signUpEl = document.querySelector("#sign-up") as HTMLElement | null;
// container of 2 swtich panels
var overlayContainerEl = document.querySelector(".overlay-container") as HTMLElement | null;
// left switch panel
var overlayLeftEl = document.querySelector(".overlayLeft") as HTMLElement | null;
// right switch panel (default visible)
var overlayRightEl = document.querySelector(".overlayRight") as HTMLElement | null;

function alt(): void{
    formConEl?.classList.toggle("changed");
    switchConEl?.classList.toggle("changed");
    signInEl?.classList.toggle("changed");
    signUpEl?.classList.toggle("changed");
    overlayContainerEl?.classList.toggle("changed");
    overlayLeftEl?.classList.toggle("changed");
    overlayRightEl?.classList.toggle("changed");

    signInEl?.classList.contains("changed")? signInEl.style.pointerEvents = "null":signInEl!.style.pointerEvents = "auto";
    signUpEl?.classList.contains("changed")? signUpEl.style.pointerEvents = "auto":signUpEl!.style.pointerEvents = "none";
    
    overlayLeftEl?.classList.contains("changed") ? overlayLeftEl.style.pointerEvents = "auto" : overlayLeftEl!.style.pointerEvents = "none";
    overlayRightEl?.classList.contains("changed") ? overlayRightEl.style.pointerEvents = "none" : overlayRightEl!.style.pointerEvents = "auto";
}



