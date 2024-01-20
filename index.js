// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// below is a "local" require not from npm
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

const data = {};

// testing data
data.title = "My Awesome Project";
data.license = 'MIT';
data.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
data.installation = 'npm i';
data.usage = 'Download, run "node index.js" and then open README.md';
data.github = 'clstevenson';
data.email = 'chrislstevenson@gmail.com';
data.contribute = 'submit a pull request';
// data.test = 'run the following tests.';

// Function to write README file in a separate subdirectory
function writeToFile(fileName, data) {
  const outputDir = './output'

  // separate directory for generated READMEs
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fileName = outputDir + '/' + fileName;
  fs.writeFile(fileName, generateMarkdown(data), err => {
    if (err) console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  const filename = data.title.split(' ').join('') + "-README.md";
  writeToFile(filename, data);
}

// Function call to initialize app
init();
