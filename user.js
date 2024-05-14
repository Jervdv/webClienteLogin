class User{

    constructor(name, pw, email){
        this.name = name;
        this.pw = pw;
        this.email = email;
        this.lists = []
    }
    
    addList(list){
        this.lists.push(list.uuid);
    }   
    removeList(list) {
        const index = this.lists.indexOf(list);
        if (index !== -1) {
            this.lists.splice(index, 1);
        }
    }
    toJSON() {
        return {
            name: this.name,
            email: this.email,
            pw: this.pw,
            lists: this.lists
        };
    }

    static arrayfromJSON(userjson) {
        var userArray = []
        for (const user of userjson) {
            var newUser = new User(user.name, user.pw, user.email); 
            newUser.lists = user.lists
            userArray.push(newUser)
        }
        return userArray;
    }
    
}

export { User };