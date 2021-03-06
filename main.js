"use strict";
let img;
let login;

document.addEventListener("DOMContentLoaded", oninit);

// oninit bevor content geladen wird!
function oninit() {
    checkUser();
}

function checkUser() {
    let check = false;
    const user = {
        name: "AQ",
        password: "Zypern2021",
    };
    while (check != true) {
        let login = prompt("Bitte geben Sie den Usernamen ein!");
        if (login === user.name) {
            let password = prompt("Bitte geben Sie das Password ein!");
            if (password === user.password) {
                check = true;
            }
        }
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function wait(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}

function getStyle() {
    this.img.style.width = "auto";
    this.img.style.height = "auto";
    this.img.style.maxWidth = "100%";
    this.img.style.maxHeight = "100%";
}

window.onload = async function changePicture() {
    let n = 1;
    let x = "pic2";
    this.img = document.getElementById("idHeaderPicture");

    for (let i = 0; i < n; i++) {
        if (x == "pic1") {
            await wait(5);
            this.img.src = "./pictures/logo.jpg";
            this.getStyle();
            x = "pic2";
            n = n + 1;
        } else if (x == "pic2") {
            await wait(5);
            this.img.src = "./pictures/_1350254-1.jpg";
            this.getStyle();
            x = "pic3";
            n = n + 1;
        } else if (x == "pic3") {
            await wait(5);
            this.img.src = "./pictures/_1350160-1.jpg";
            this.getStyle();
            x = "pic4";
            n = n + 1;
        } else if (x == "pic4") {
            await wait(5);
            this.img.src = "./pictures/_1350253-1.jpg";
            this.getStyle();
            x = "pic1";
            n = n + 1;
        }
    }
};
