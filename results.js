class Results {
    constructor(diagnosis) {
        this.diagnosis = null;
        this.items = [];
    }
    destruct() {
        delete this.items;
        delete this.diagnosis;
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
        if (typeof item != "string") {
            throw new Error(
                "[CRT] [ERR] [Dx] Invalid item value type. Expected item to be string, where item is" +
                typeof item
            );
        }
        this.items.push(item);
    }
}