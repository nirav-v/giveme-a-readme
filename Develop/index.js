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
     
    ])
    .then((answers => {
        // console.log(answers)
        fs.writeFile('projectREADME.md', generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log('Successfully created your project README!'))
    }));
}

init();