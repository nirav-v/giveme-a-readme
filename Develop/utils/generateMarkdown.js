// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {
  return `# ${data.title}
  Description: 
  ${data.description}

  ## Table of Contents: 
  ### Installation
  ### Usage
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
