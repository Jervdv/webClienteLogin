class List {

    constructor(name) {
        this.name = name;
        this.creationDate = new Date();
        this.uuid = crypto.randomUUID();
        this.items = new Set();
    }

    addItem(item) {
        this.items.add(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getListFromUUID(uuid){
        
    }

    toJSON() {
        return {
            name: this.name,
            creatioDate: this.creationDate,
            uui: this.uuid,
            items: Array.from(this.items),
        };
    }

    static fromJSON(json) {
        const newlist = new List(json.name);
        json.forEach(itemJson => {
            const item = Item.fromJSON(itemJson);
            this.list.items.add(item);
        });
        return newlist;
    }
    
}

import { Item } from './item.js';
export { List };