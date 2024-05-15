import { User } from "./user.js";
import { List } from "./list.js";

let btsair = document.getElementById("btSair");
let newList = document.getElementById("novaLista");
let nomeField = document.getElementById("nomelista");

btsair.addEventListener('click', () => {
    console.log("oi");
    localStorage.setItem("loggeduser", null);
    localStorage.setItem("manter", false);
    setTimeout(function () {
        location.replace('loginPage.html');
    }, 0);
});

window.onload = () => {
    const logado = localStorage.getItem("loggeduser");
    if ("null" == logado) {
        location.replace("loginPage.html");
    } else {
        document.getElementById("greet").textContent = "Olá " + logado + "!";
    }
}

newList.addEventListener("submit", (e) => {
    e.preventDefault();
    let listas, users;
    let userList, listArray = [];
    let loggeduname = localStorage.getItem("loggeduser");

    if (null === localStorage.getItem("users")) {
        const newUser = new User("Admin", "admin", "admin@email.com");
        userList.push(newUser);
        localStorage.setItem("users", JSON.stringify(userList));
    }

    userList = User.arrayfromJSON(JSON.parse(localStorage.getItem("users")));

    if (null == localStorage.getItem("listas") || "null" == localStorage.getItem("listas")) {
        const newList = new List("listaDefault");
        listArray.push(newList)
        localStorage.setItem("listas", JSON.stringify(listArray))

        userList.forEach((user, index) => {
            if (user.name == "Admin") {
                user.addList(newList)
                console.log(userList)
                userList[index] = user;
            }
        });
        localStorage.setItem("users", JSON.stringify(userList))
    }

    listArray = List.arrayFromJSON(JSON.parse(localStorage.getItem("listas")));

    let newList = new List(nomeField.value)
    
    userList.forEach((user, index) => {
        if (user.name == loggeduname) {
            user.addList(newList)
            console.log(userList)
            userList[index] = user;
        }
    });
    localStorage.setItem("users", JSON.stringify(userList))
    
    listArray.push(newList)

    localStorage.setItem("listas", JSON.stringify(listArray));
});

