class Results {
    constructor(diagnosis) {
        this.diagnosis = 0;
        this.items = [];
        this.count = 0;
    }
    destruct() {
        delete this.items;
        delete this.diagnosis;
        delete this.count;
        delete this;
    }
    // diagnose(diagnosis) {
    //     if (typeof diagnosis != "string") {
    //         throw new Error(
    //             "[CRT] [ERR] [Dx] Invalid diagnosis value type. Expected diagnosis to be string, where diagnosis is" +
    //             typeof diagnosis
    //         );
    //     }
    //     this.diagnosis = diagnosis;
    // }
    diagnose(diagnosis) {
        if (typeof diagnosis.name != "string") {
            throw new Error(
                "[CRT] [ERR] [Dx] Invalid diagnosis value type. Expected diagnosis to be string, where diagnosis is" +
                typeof diagnosis
            );
        } else if (diagnosis.category != 0) {
            this.count++;
        }

        if (this.count != 0 && this.diagnosis == 0) {
            this.diagnosis = -1;
        }

        this.diagnosis.push(diagnosis.name);
    }
}