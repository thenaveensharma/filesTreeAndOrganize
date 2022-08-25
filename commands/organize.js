let chalk = require("chalk");
let figlet = require("figlet");
let fs = require("fs");
let path = require("path");
function organizeF(direcPath) {
    let desPath;
    if (direcPath == undefined) {
      desPath=process.cwd();
        return;
    } else {
        let isExist = fs.existsSync(direcPath);

        if (isExist) {
            //do  operation
            desPath = path.join(direcPath, "organized_files");
            if (fs.existsSync(desPath) == false) {
                fs.mkdirSync(desPath);
            }
        } else {
            console.log(
                chalk.redBright(figlet.textSync("Kindly enter a valid path"))
            );
            return;
        }
    }
    organizeHelper(direcPath, desPath);
}

function organizeHelper(src, des) {
    let childNames = fs.readdirSync(src);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            let category = getcategory(childNames[i]);
            sendFiles(childAddress, des, category);
        } else {}
    }
}

function getcategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "other";
}

function sendFiles(srcFilePath, desPath, category) {
    let catPath = path.join(desPath, category);
    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath);
    }
    let fileName = path.basename(srcFilePath);
    let desFilePath = path.join(catPath, fileName);
    fs.copyFileSync(srcFilePath, desFilePath);
    console.log(fileName+ " copied to "+ category);
}
module.exports={
    organizeKey:organizeF
}