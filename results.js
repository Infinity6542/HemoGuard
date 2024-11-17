class Results {
    constructor(diagnosis) {
        this.diagnosis = null;
    }
    destruct() {
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
}