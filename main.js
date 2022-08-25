#!/usr/bin/env node
let chalk = require("chalk");
let figlet = require("figlet");
let fs = require("fs");
let path = require("path");
let tree=require('./commands/tree');
let help=require('./commands/help');
let organize=require('./commands/organize')

let types = {
    Video: ["mp4", "mkv", "MP4", "webm"],
    Audio: ["mp3"],
};

let inpurArr = process.argv.slice(2);
//node main.js tree "direcPath"
//node main.js organize "direcPath"
//node main.js help "direcPath"

let command = inpurArr[0];

switch (command) {
    case "tree":
        tree.treeKey(inpurArr[1]);
        break;

    case "organize":
        organize.organizeKey(inpurArr[1]);
        break;

    case "help":
        help.helpKey();
        break;

    default:
        console.log(
            chalk.redBright(figlet.textSync("Please 🙏🏻 enter a valid command"))
        );
        break;
}