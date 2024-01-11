// Including: Inquirer, FS, generateMarkdown.js
const inq = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

function logit(message, label) {
    console.log(label, message)
}

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data, ) {
    fileName ? fs.writeFile(fileName, data, err => {
        if (err) { logit(err) }}) : logit(`${fileName} is not valid.`); 
}

// TODO: Create a function to initialize app
function init() {
    //Fake variable
    const removeMe = 'test data.'

    //Let's write our file
    writeToFile(`./output/README.md`, removeMe);
}

// Function call to initialize app
init();