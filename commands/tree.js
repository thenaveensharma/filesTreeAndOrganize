let chalk = require("chalk");
let figlet = require("figlet");
let fs = require("fs");
let path = require("path");
function treeF(direcPath) {
    let desPath;
    if (direcPath == undefined) {
      treeHelper(process.cwd(),"");
        return;
    } else {
        let isExist = fs.existsSync(direcPath);

        if (isExist) {
            treeHelper(direcPath,"");
        } else {
            console.log(
                chalk.redBright(figlet.textSync("Kindly enter a valid path"))
            );
            return;
        }
    }
}

function treeHelper(direcPath,indent) {
    let isFile = fs.lstatSync(direcPath).isFile();
    if (isFile) {
        let fileName = path.basename(direcPath);
        console.log(indent + "|---"+fileName)

    } else {
        let dirName = path.basename(direcPath);
        console.log(indent + "!---" + dirName);
        let childrens = fs.readdirSync(direcPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(direcPath, childrens[i])
            treeHelper(childPath, indent + "\t");
        }
    }
}
module.exports={
    treeKey:treeF
}