import { User } from "./user.js"
import { List } from "./list.js";
import { Item } from "./item.js";

window.onload = function ()  {
    if(localStorage.getItem("manter") == "true"){
        if( "null" != localStorage.getItem("loggeduser")){
            location.replace("index.html");
        } else{
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
    var user = new User("jer", 123, "mmailll")
    user.addList(list)
    listas[0].addItem(new Item("bola", "é uma bola"))
    listArray = List.arrayFromJSON(JSON.parse(JSON.stringify(listas)))
    console.log(listArray)
    
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

    if (null === localStorage.getItem("logins")) {
        const newtext = {
            admin: {
                pw: "admin",
                email: "admin@email.com",
                listas: [],
            }
        }
        localStorage.setItem("logins", JSON.stringify(newtext));
    }

    if (username.value == "" || password.value == "") {
        alert("Insira valor em ambos os campos!");

    } else {
        let loginJson = JSON.parse(localStorage.getItem("logins"));
        if (passwordField.value == loginJson[usernameField.value].pw) {
            localStorage.setItem("loggeduser", username.value);
            localStorage.setItem("manter", cbmanter.checked );
            password.value = "";
            username.value = "";
            location.replace("index.html");
        } else {
            alert("Senha Incorreta!");
            password.value = "";
            passwordField.focus();
        }
    }
});