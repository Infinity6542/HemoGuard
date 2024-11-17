class Results {
    constructor(diagnosis) {
        this.diagnosis = null;
        this.items = [];
        this.count = 0;
    }
    destruct() {
        delete this.items;
        delete this.diagnosis;
        delete this.count;
        delete this;
    }
    diagnose(diagnosis) {
        if (typeof diagnosis != "string") {
            throw new Error(
                "[CRT] [ERR] [Dx] Invalid diagnosis value type. Expected diagnosis to be string, where diagnosis is" +
                typeof diagnosis
            );
        }
        this.diagnosis = diagnosis;
    }
    append(item) {
        if (typeof item.name != "string") {
            throw new Error(
                "[CRT] [ERR] [Dx] Invalid item value type. Expected item to be string, where item is" +
                typeof item
            );
        } else if (item.category != 0) {
            this.count++;
        }
        this.items.push(item.name);
    }
}