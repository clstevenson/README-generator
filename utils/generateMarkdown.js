/*
 * All prompts (and user responses) will be in index.js and passed to this file thru the data object
 * That includes license choice, presumably as data.license.
 */

// function to generate markdown for README; this is a public function exported to an application
function generateMarkdown(data) {
  // literal value will initialized and modified based on user responses
  let literal = `# ${data.title}\n\n`;


  // add license badge if data.license is not an empty string using renderLicenseBadge()
  if (data.license) {
    literal += renderLicenseBadge(data.license);
  }

  // Description from user input
  literal += '## Description\n' + data.description + '\n\n';

  // If there is a screenshot, put it here
  if (data.image) literal += `![screenshot](./assets/images/${data.image})\n\n`;

  // add a TOC with three optional TOC items
  literal +=
    `## Table of Contents
- [Installation](#installation)
- [Use](#use)
- [Questions](#questions)`;
  if (data.contribute) literal += '\n- [Contribution Guidelines](#contribution-guidelines)';
  if (data.test) literal += '\n- [Testing](#testing)';
  if (data.license) literal += '\n- [License](#license)';
  // add some space
  literal += '\n\n'

  // Add obligatory sections: Installation, Usage, Questions/contact
  literal +=
    `## Installation
${data.installation}

## Use
${data.usage}

## Questions
Reach out if you have questions that are not covered here!

- GitHub username: ${data.github}
- email: ${data.email}

`
  // Add the Contribution and Testing sections if necessary
  if (data.contribute) {
    literal += `## Contribution Guidelines
${data.contribute}

`
  };

  if (data.test) {
    literal += `## Testing
${data.test}

`
  };

  // Add license section if necessary
  if (data.license) {
    literal += '## License\n' + renderLicenseSection(data.license);
  }

  return literal;
} // end generateMarkdown() function

// Private function returns a license badge based on which license is passed in (or empty string if no license)
// Badges obtained from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n';
    case 'Apache': return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n';
    case 'BSD2': return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n\n';
    case 'BSD3': return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n';
    case 'GPLv3': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n';
    case 'ISC': return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n\n';
    default: return '';
  }
}

// Private function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT': return '[MIT license](https://opensource.org/licenses/MIT)';
    case 'Apache': return '[Apache 2.0 license](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD2': return '[BSD 2-clause ("simplified") license](https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD3': return '[BSD 3-clause ("new") license](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GPLv3': return '[GPL 3 license](https://www.gnu.org/licenses/gpl-3.0)';
    case 'ISC': return '[ISC license](https://opensource.org/licenses/ISC)\n\n';
    default: return '';
  }
}

// Private function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return 'This project is licensed under the terms of the ' + renderLicenseLink(license) + '.';
  } else {
    return '';
  }
}

module.exports = generateMarkdown;
