const fs = require("fs")

exports.writeAppPublic = writeApp;

function writeApp() {

    const filename = process.argv[2]
    const HTML5 = fs.readFileSync(`${__dirname}/index.html`)

    fs.writeFileSync(`${process.cwd()}/${filename}`, HTML5)

    console.log(`File: ${filename} has been created!`)

}

// writeApp()