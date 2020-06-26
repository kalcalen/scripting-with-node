const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(
   fs.readFileSync("html-pages/intermediate-functions.html")
);

const components = getComponents(sourceFile);

const componentObjs = components.map((component) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "intermediate", // We are scraping only the intermediate.html file
      typeNum: 100, // Designated for basic.html
      isFavorite: false, // Default is false
   };
});

const reversedObjs = componentObjs.reverse();

const orderedObjs = [];
for (let i = 0; i < reversedObjs.length; i++) {
   const obj = reversedObjs[i];
   obj.order = obj.typeNum + i;
   orderedObjs.push(obj);
}

console.log(orderedObjs.reverse());

const targetFile = "./json-files/intermediate.json ";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
