import { User } from "./user.js"

window.onload = function () {
    if (localStorage.getItem("manter") == "true") {
        if ("null" != localStorage.getItem("loggeduser")) {
            location.replace("index.html");
        } else {
            localStorage.setItem("manter", false);
        }
    } else {
        localStorage.setItem("loggeduser", null);
    }
} //da clear no usuario logado

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let usernameField = document.getElementById("username");
    let passwordField = document.getElementById("password");
    let cbmanter = document.getElementById("manter");

    let userList = [];
    let userJson;

    if (null == localStorage.getItem("users") || "null" == localStorage.getItem("users")) {
        alert("localstorage corrompido?");
        const newUser = new User("Admin", "admin", "admin@email.com");
        userList.push(newUser);
        localStorage.setItem("users", JSON.stringify(userList));
    }

    if (username.value == "" || password.value == "") {
        alert("Insira valor em ambos os campos!");

    } else {
        userJson = JSON.parse(localStorage.getItem("users"));
        userList = User.arrayfromJSON(userJson)
        for (const user of userList) {
            if (user.name == usernameField.value) {
                if (user.pw == passwordField.value) {
                    localStorage.setItem("loggeduser", user.name);
                    passwordField.value = "";
                    username.value = "";
                    location.replace("index.html");
                } else {
                    alert("Senha incorreta!")
                    password.value = "";
                    passwordField.focus();
                }
            }
        }
    }
});