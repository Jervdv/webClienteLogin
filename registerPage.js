import { User } from "./user.js";
let loginForm = document.getElementById("cadastroForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let usernameField = document.getElementById("username");
    let passwordField = document.getElementById("password");
    let emailField = document.getElementById("email");
    let userJson, userList = []

    let loginText = "";
    if (null === localStorage.getItem("users")) {
        const newUser = new User("Admin", "admin", "admin@email.com");
        userList.push(newUser);
        localStorage.setItem("users", JSON.stringify(userList));
    }

    loginText = localStorage.getItem("logins");
    var loginJson = JSON.parse(loginText);

    if (usernameField.value == "" || passwordField.value == "") {
        alert("Insira valor em ambos os campos!");
    } else {
        let jaExiste = false;
        userJson = JSON.parse(localStorage.getItem("users"));
        userList = User.arrayfromJSON(userJson)
        for (const user of userList) {
            if (user.name == usernameField.value) {
                usernameField.value = "";
                alert("usuario ja existe!");
                jaExiste = true;
                usernameField.focus();
            }
        }

        if (!jaExiste) {
            userList.push(new User(
                usernameField.value,
                passwordField.value,
                emailField.value
            ))

            localStorage.setItem("users", JSON.stringify(userList));
            alert("cadastrado usario \"" + username.value + "\" com senha \"" + password.value + "\"");
            password.value = "";
            username.value = "";
            window.location.replace('loginPage.html');
        }
    }
});