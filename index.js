// Including: Inquirer, FS, generateMarkdown.js
const inq = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

function logme(message, label) {
    //logs to the console.. just making things shorter
    console.log(label, message)
}

function writeToFile(fileName, data, ) {
    // Writes to fileName, path provided
    fileName ? fs.writeFile(fileName, data, err => {
        if (err) { logme(err) }}) : logme(`${fileName} is not valid.`); 
}

const questions = [
    //creating questions for the inquirer prompt
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'ghUser',
        validate: function (test) { 
            if(test.length < 1) { return 'Must be a valid username.'; } return true;
        }
    },
    {
        type: 'input',
        message: 'What is your Project Name?',
        name: 'projectName'
    }
]


//async function to allow for await
async function init() {
    const usrResponse = await inq.prompt(questions);
    logme(usrResponse, "Response:");

    //Let's write our file
    writeToFile(`./output/README.md`, removeMe);
}

// Function call to initialize app
init();