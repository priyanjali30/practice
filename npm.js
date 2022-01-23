//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//nom install -g <packageName>
// sudo npm install -g <packageName> (mac)

//i or install

//package.json - manifest file (stores important info about projects or the packages)

//3 ways to create it
//1. manual approach (create package.json in the root, then create properties etc)
//npm init (step by step, press enter to skip it)
//npm init -y (everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
