
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

    static fromJSON(json) {
        return new Item(json.name, json.description);
    }
}

export { Item };