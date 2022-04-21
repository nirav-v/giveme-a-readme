// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {
  return `# ${data.title}

 <img src = "https://img.shields.io/badge/License-${data.license}-blue" />

  ## Description: 
  ${data.description}

  ## Table of Contents: 
  ### Installation
  ### Usage
  ### License
  ### Contributing
  ### Tests
  ### Questions
  
  ## Installation: 
     ${data.installation}

  ## Usage: 
     ${data.usage}

  ## License: 
  Licensed under ${data.license} 

  ## Contributing: 
  ${data.contributing}

  ## Tests: 
  ${data.tests}

  ## Questions: 

  ### My Github profile: ${data.github}

  ### For additional questions reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
