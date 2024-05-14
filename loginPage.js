import { User } from "./user.js"
import { List } from "./list.js";
import { Item } from "./item.js";

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

    //SOMENTE TESTES
    var list = new List("nomeee")
    var listas = []
    var listArray
    listas = [list]
    listas[0].addItem(new Item("bola", "é uma bola"))
    listArray = List.arrayFromJSON(JSON.parse(JSON.stringify(listas)))
    console.log(listArray)
    var user = new User("jer", 123, "mmailll")
    user.addList(listas[0])
    var users = []
    users.push(user);
    console.log(User.arrayfromJSON(JSON.parse(JSON.stringify(users))))


    var users = [user]
    //var jsonuser = JSON.parse(JSON.stringify(users))
    // users = User.fromJSON(jsonuser, listArray)
    //console.log(JSON.stringify(listas))

} //da clear no usuario logado

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let usernameField = document.getElementById("username");
    let passwordField = document.getElementById("password");
    let cbmanter = document.getElementById("manter");

    let userList = [];
    let userJson;

    if (null === localStorage.getItem("users")) {
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
                }
            } else {
                alert("Senha incorreta!")
                password.value = "";
                passwordField.focus();
            }
        }
        /* if (passwordField.value == userList[usernameField.value].pw) {
            localStorage.setItem("loggeduser", username.value);
            localStorage.setItem("manter", cbmanter.checked);
            password.value = "";
            username.value = "";
            location.replace("index.html");
        } else {
            alert("Senha Incorreta!");
            password.value = "";
            passwordField.focus();
        } */
    }
});