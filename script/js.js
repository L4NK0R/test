"use strict"
let div = document.querySelector(".logo");
div.addEventListener("click", gotomain);
function gotomain(event){
    document.location.href = "../index.html";
}
let burger = document.querySelector(".loginM");
let burgerClose = document.querySelector(".closeLoginM");
burger.addEventListener("click", toOpenBurger);
let popup = document.querySelector(".popupMenu");
let main = document.getElementById("main");
burgerClose.addEventListener("click", toCloseBurger);
function toOpenBurger(event){
    popup.classList.remove("none");
    main.classList.add("none");
    burger.classList.add("none");
    burgerClose.classList.remove("none");
}
function toCloseBurger(event){
    popup.classList.add("none");
    main.classList.remove("none");
    burger.classList.remove("none");
    burgerClose.classList.add("none");
}