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



export function deletar(row) {
    console.log(row);
}

window.onload = () => {
    const logado = localStorage.getItem("loggeduser");
    if ("null" == logado) {
        location.replace("loginPage.html");
    } else {

        document.getElementById("greet").textContent = "Olá " + logado + "!";

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

        var table = document.getElementById("listTable")

        for (var lista of listArray) {
            for (var user of userList) {
                if (user.name == loggeduname) {
                    for (var listaDoUsuario of user.lists) {
                        if (lista.uuid == listaDoUsuario) {
                            console.log(user)
                            var newRow = document.createElement("tr")
                            var nameCell = document.createElement("td")
                            var dateCell = document.createElement("td")
                            var uuidCell = document.createElement("td")
                            var itemsCell = document.createElement("td")
                            var deleteCell = document.createElement("td")

                            deleteCell.innerHTML = `<input type="button" name="del" value="Delete" onclick="deletar(this);" class="btn btn-danger">`

                            nameCell.textContent = lista.name;
                            dateCell.textContent = lista.creationDate
                            uuidCell.textContent = lista.uuid
                            itemsCell.textContent = lista.items.toString();

                            newRow.appendChild(uuidCell)
                            newRow.appendChild(nameCell)
                            newRow.appendChild(itemsCell)
                            newRow.appendChild(dateCell)
                            newRow.appendChild(deleteCell)

                            table.appendChild(newRow)


                        }
                    }
                }
            }

        }
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
            //console.log(userList)
            userList[index] = user;
        }
    });
    localStorage.setItem("users", JSON.stringify(userList))

    listArray.push(newList)

    localStorage.setItem("listas", JSON.stringify(listArray));

    location.replace("./index.html")
});


