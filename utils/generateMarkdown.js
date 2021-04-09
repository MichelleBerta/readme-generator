// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ##TABLE OF CONTENTS

  #1. Email
  ${data.email}

  #2. Username 
  ${data.username}

  #3. Title
  ${data.title}

  #4. Project Description
  ${data.description}

  #5. Installation Instructions
  ${data.installation}

  #6. Usage
  ${data.usage}

  #7. License Requirements
  ${renderLicenseBadge(data.license)};
  ${renderLicenseLink(data.license)};
  ${renderLicenseSection(data.license)};

  #8. Contributors
  ${data.contributing}

  #9. Tests
  ${data.tests}
`;
}



module.exports = generateMarkdown;
