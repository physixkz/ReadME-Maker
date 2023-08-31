// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Provide license information:',
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: 'Provide Table of Contents:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'links',
    message: 'Enter links:',
  },
];

// TODO: Create a function to write README file
function writeToFile(directory, fileName, data) {
    const filePath = path.join(directory, fileName);
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} generated successfully at ${filePath}`);
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate README content based on answers
    const readmeContent = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
${answers.tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.links}
`;
    // Write the generated README content to the README.md file
    writeToFile('./utils/Complete-ReadME', 'README.md', readmeContent);
});
}
// Function call to initialize app
init();