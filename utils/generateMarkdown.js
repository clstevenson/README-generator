/*
 * All prompts (and user responses) will be in index.js and passed to this file thru the data object
 * That includes license choice, presumably as data.license.
 */

// TODO: Create a function to generate markdown for README
// This function will call the three license functions below when constructing the MD file
function generateMarkdown(data) {
  // literal value will initialized and modified based on user responses
  let literal = `# ${data.title}\n\n`;


  // add license badge if data.license is not an empty string using renderLicenseBadge()
  if (data.license) {
    literal += renderLicenseBadge(data.license);
  }


  // add a TOC with three optional items (see template)


  // Add the obligatory sections: Description, Installation, Usage, Questions/contact


  // Add the Contribution and Testing sections if necessary


  // Add license section using renderLicenseSection()

  return literal;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n';
    case 'Apache': return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n';
    case 'BSD2': return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n\n';
    case 'BSD3': return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n';
    case 'GPLv3': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n';
    default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
/* IS THIS FUNCTION NEEDED? Can't it be part of the renderLicenseSection() code block? */
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports = generateMarkdown;
