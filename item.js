class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    toJSON() {
        return {
            name: this.name,
            description: this.description
        };
    }

    static fromJSON(itemsJson) {
        var itemArray = []
        for (const item of itemsJson) {
            var newItem = new Item(item.name, item.description)
            itemArray.push(newItem);
        }
        return itemArray;
    }

    static testFunc(){
        console.log("Estamos em uma classe item");
    }
}

export { Item };