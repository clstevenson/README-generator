// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// below is a "local" require not from npm
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

const data = {};
// testing data
data.title = "Testing";
data.license = 'NIT';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log(generateMarkdown(data));
}

// Function call to initialize app
init();
