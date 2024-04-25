// Function that returns a license badge based on the license passed in
function renderLicenseBadge(license) {
  if (license === 'None') {
      return '';
  }
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'None') {
      return '';
  }
  return `- [License](#license)`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me via GitHub or email:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
