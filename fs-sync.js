const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const firstData = readFileSync("./content/first.txt", "utf8");
const secondData = readFileSync("./content/second.txt", "utf8");

// console.log(firstData, secondData);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result : ${firstData + " " + secondData}`,
  { flag: "a" }
);

console.log("done with the task");
console.log("starting the new task");
