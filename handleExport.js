// Get the data
import results from "./proc_dta.ts";

// Verify integrity of data
if (typeof results.diagnosis != "string") {
    throw new Error(
        "[CRT] [ERR] [Dx] Invalid diagnosis. Expected diagnosis to be string, where diagnosis is" +
        typeof results.diagnosis
    );
} else {
    console.info("[Dx] Diagnosis received and is valid. It is: " + results.diagnosis);
}

// Pass off the data
