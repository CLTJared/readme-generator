// Including: Inquirer, FS, generateMarkdown.js
const inq = require('inquirer');
const fs = require('fs');
const mark = require('./utils/generateMarkdown.js');

function logme(message, label) {
    //logs to the console.. just making things shorter
    console.log(label, message)
}

function writeToFile(fileName, data) {
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
            if(test.trim().length < 1) { return 'Must be a valid username.'; } return true;
        }
    },
    {
        type: 'input',
        message: 'What is your Project Name?',
        name: 'project',
        validate: function (test) {
            if(test.trim().length < 1) { return 'Must be a valid project name.'; } return true;
        }
    },
    {
        type: 'input',
        message: 'How would you describe this project? (minimum 5 chars)',
        name: 'description',
        validate: function (test) {
            if(test.length < 5) { return 'Must be a valid description.'; } return true;
        }
    },
    {
        type: 'list',
        message: 'Choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function (test) {
            if(test.length < 1) { return 'Email address is not valid.'; } 
            else if(!test.includes('@')) { return 'Email address is not valid.'; }
            return true;
        }
    },
    {
        type: 'input',
        message: 'How is this installed?',
        name: 'installation',
        validate: function (test) {
            if(test.length < 1) { return 'Must be a valid input.'; } return true;
        }
    },
    {
        type: 'input',
        message: 'How is this project used?',
        name: 'usage',
        validate: function (test) {
            if(test.length < 1) { return 'Must be a valid input.'; } return true;
        }
    }, 
    {
        type: 'input',
        message: 'Did you have any contributors?',
        name: 'contributors'
    },  
    {
        type: 'input',
        message: 'What were your test cases?',
        name: 'test',
        validate: function (test) {
            if(test.length < 1) { return 'Must be a valid test case.'; } return true;
        }
    }
]

function init() {
    inq.prompt(questions).then((response) => {
        const goodData = mark.generateMarkdown(response);
        writeToFile(`./output/README.md`, goodData);
    })
}

// Function call to initialize app
init();