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
  ${data.title}

  ##TABLE OF CONTENTS

  #1. Project Description
  ${data.description}

  #2. Installation Instructions
  ${data.installation}
  
  #3. Usage
  ${data.usage}
  
  #4. License Requirements
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  #5. Contributors to this project
  ${data.contributing}
  
  #6. Tests that were conducted
  ${data.tests}

  #7. This project was created by 
  ${data.username}

  #8. If you have questions about this project, you can email
  ${data.email}
  `;
}



module.exports = generateMarkdown;
