async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const reader = new FileReader();
console.log("Reader created");
console.log("State of reader is currently " + reader.readyState);

// Called in DOM ondragover
function handleHoverOver(event) {
	event.preventDefault();
    // Just to make sure there's nothing else
    localStorage.clear();
}

// Called in DOM ondrop
async function handleDrop(e) {
	e.preventDefault();
	console.log("[INP] [DTA] File received.");
	if (e.dataTransfer.files.length > 1) {
		console.error("[INP] [DTA] Multiple files uploaded. -1.");
		window.alert("Please upload only one file at a time.");
	} else if (e.dataTransfer.files[0].type != "text/plain") {
		console.error("[INP] [DTA] Invalid file type. -1.");
		window.alert("Please upload a .txt file.");
	} else {
		console.log(reader.readyState);
		console.log("[SRT] [VAL] [INP] [DTA] File validated. Checking contents...");
		// reader.onload = () => {
		console.log("State of reader is currently " + reader.readyState);
		reader.readAsText(e.dataTransfer.files[0]);
        // For whatever reason, onload just didn't work here
        // (believe me, I tried)
        // (An hour of my life I'll never get back)
        // Also tried addEventListener
        // So we're just going to sleep for 500ms and pray it's done then
        // The next guy can increase the following counter:
        // Time wasted on this: 1hr
		await sleep(500);
		console.log("State of reader is currently " + reader.readyState);
		let raw = reader.result.toString();
		let cells = raw.split('\n').map(function (el) { return el.split(/\s+/); });
        let headings = cells.shift();
        let obj = cells.map(function (el) {
            var obj = {};
            for (var i = 0, l = el.length; i < l; i++) {
              obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
            }
            return obj;
          });
          let data = JSON.stringify(obj);
          // JSON.parse() when using it
          localStorage.setItem("data", data);
		// };
	}
}