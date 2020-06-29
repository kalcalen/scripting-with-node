const fs = require("fs");

const basicSource = JSON.parse(fs.readFileSync("./json-files/basic.json"));

const intermediateSource = JSON.parse(
   fs.readFileSync("./json-files/intermediate.json")
);

const functionsSource = JSON.parse(
   fs.readFileSync("./json-files/functions.json")
);

let distSource = basicSource.concat(intermediateSource, functionsSource);

const targetFile = "./dist/dist.join";
fs.writeFileSync(targetFile, JSON.stringify(distSource));

console.log(distSource);
