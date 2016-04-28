console.log("hallo");




var fs = require('fs');
console.log("hallo");
fs.writeFileSync("indexByPPN.json", "");
fs.writeFileSync("ppnlist.json", "");
var exemplars = require("./exemplars.json");


function indexBy(arr, prop) {
	return arr.reduce(function (prev, item) {
		if (!(item[prop]in prev))
			prev[item[prop]] = [];
		prev[item[prop]].push(item);
		return prev;
	}, {});
}

function writeToFile(filename, data) {
   var err = fs.appendFileSync(filename, data + "\n");
   if (err) {
          console.log("Error writing to file " + filename + "!");
          throw err;
   }
}







var ppns = indexBy(exemplars, "ppn");
var ppnsList = [];
console.log("hallo");
for (ppn in ppns) {
	ppnsList.push(ppn);
	console.log("hallo");
}

writeToFile("indexByPPN.json", JSON.stringify(ppns));
writeToFile("ppnlist.json", JSON.stringify(ppnsList));
