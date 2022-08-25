let chalk = require("chalk");
let figlet = require("figlet");
let fs = require("fs");
let path = require("path");
function helpF() {
    console.log(`
List of all commands:
node main.js tree "direcPath"
node main.js organize "direcPath"
node main.js help "direcPath"
`);
}
module.exports={
    helpKey:helpF
}