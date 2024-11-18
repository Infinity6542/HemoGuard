class Results {
    constructor() {
        // Diagnosis (good or bad). 0 is good, -1 is bad. Anything else is invalid.
        this.diagnosis = 0;
        // List of categorised items detected
        this.items = [];
        // Count of bad items
        this.count = 0;
    }
    destruct() {
        // Self destruct function
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
        // Type safety (check that name is, indeed, a string)
        //TODO: Refactor this
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