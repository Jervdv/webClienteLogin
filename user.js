class User{

    constructor(name, pw, email){
        this.name = name;
        this.pw = pw;
        this.email = email;
        this.lists = new Set();
    }
    
    addList(list){
        this.lists.push(list);
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
            lists: Array.from(this.lists).map(list => list.uuid)
        };
    }

    static fromJSON(userjson, listsjson) {
        const user = new User(userjson.name, userjson.pw, userjson.email);
        for (const listofuser of userjson.lists) {
            user.lists.addList(listsjson.listofuser);
        }
        return user;
    }
    
}

import { List } from './list.js';

export { User };