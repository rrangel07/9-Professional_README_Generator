// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title',
    },
    {
        type: 'editor',
        message: 'Provide a short description for your project',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'Provide step-by-step directions to install your project',
        name: 'installation',
    },
    {
        type: 'editor',
        message: 'Provide directions for use. Include screenshots as needed.',
        name: 'usage',
    },    
    {
        type: 'editor',
        message: 'Enter your collaborators, if any, with links to their GitHub profiles',
        name: 'contribuitors',
    },
    {
        type: 'editor',
        message: 'Provide examples on how to run your tests, if any',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose the license for your code',
        name: 'license',
        choices: ['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License','BSD 2-Clause License','The Hippocratic License 2.1','The Hippocratic License 3.0','MIT License','Mozilla Public License 2.0','Do What the F*ck You Want to Public License','Unlicense','No License'],
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('README.md',generateMarkdown.generateMarkdown(response));
        });
}

// Function call to initialize app
init();
