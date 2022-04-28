// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Write code to get user input, generate markdown, and save it to a file.

const init = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: "input",
            message: "What is the name of your project?"
        },
     
        {
            name: 'description',
            type: "input",
            message: "Type a description of your project"
        },
     
        {
            name: 'installation',
            type: "input",
            message: "What installation instructions should the user follow?"
        },
        {
            name: 'usage',
            type: "input",
            message: "Provide instructions and examples for use"
        },
        {
            name: 'license',
            type: "list",
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3","Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense" ],
            message: "Select the license that your project is covered under"
        },
        {
            name: 'contributing',
            type: "input",
            message: "Provide guidlines on how others can contribute to this project"
        },
        {
            name: 'tests',
            type: "input",
            message: "Provide examples of how to run any tests for you app"
        },
        {
            name: 'github',
            type: "input",
            message: "What is your github username?"
        },
        {
            name: 'email',
            type: "input",
            message: "Lastly, what is your email?"
        }
    
    ])
    .then((answers => {
        fs.writeFile('projectREADME.md', generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log('Successfully created your project README!'))
    }));
}

init();