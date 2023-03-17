const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.resolve(process.env.INIT_CWD, "./.eslintrc.js"))) {
    fs.copyFileSync(path.resolve(process.env.INIT_CWD, "./node_modules/@taskli-st/tsconfig/.eslintrc.js"), path.resolve(process.env.INIT_CWD, "./.eslintrc.js"));
}

if (!fs.existsSync(path.resolve(process.env.INIT_CWD, "./.eslintignore"))) {
    fs.copyFileSync(path.resolve(process.env.INIT_CWD, "./node_modules/@taskli-st/tsconfig/.eslintignore"), path.resolve(process.env.INIT_CWD, "./.eslintignore"));
}
