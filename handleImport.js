// Get the data
let input = document.getElementById("input").files[0];

// Check that data exists
if (!input) {
    alert("[CRT] [INP] [DTA] No data provided.");
    return -1;
} else if (typeof text !== "string") {
    return false;
} else {
    try {
        // Parse the data
        let proc_input = JSON.parse(text);
        return 0;
    } catch (error) {
        console.error("Error parsing data:", error);
        return -1;
    }
}

// Pass off the data
export default proc_input;