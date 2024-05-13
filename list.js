class List {

    constructor(name) {
        this.name = name;
        this.creationDate = new Date();
        this.uuid = crypto.randomUUID();
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }


    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }


    toJSON() {
        return {
            name: this.name,
            uuid: this.uuid,
            creationDate: this.creationDate,
            items: this.items,
        };
    }

    static arrayFromJSON(listsjson) {
        var listArray = []
        for (const list of listsjson) {
            var newlist = new List(list.name); 
            newlist.items =  Item.fromJSON(list.items);
            newlist.creationDate = list.creationDate;
            newlist.uuid = list.uuid;
            listArray.push(newlist)
        }
        return listArray;
    }

}

import { Item } from './item.js';
export { List };