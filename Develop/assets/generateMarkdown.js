//  Create a function that returns a license badge based on which license is passed in //
const fs = require('fs'); 

// If there is no license, return an empty string //

function renderLicenseBadge(license) {
switch(license) {
  case data.license === 'AGPL-3.0':
    data.licenseBadge = 'AGPL_v3'
    break;
  case data.license === 'GPL-3.0':
    data.licenseBadge = 'GPLv3'
    break;
  case data.license === 'MIT':
    data.licenseBadge = 'MIT'
    break;

  default: 
        '';
}

}

// Create a function that returns the license link // 
// If there is no license, return an empty string //

function renderLicenseLink(license) {
  switch(license) {
    case data.license === 'AGPL-3.0':
      data.licenseLink = 'AGPL_v3'
      break;
    case data.license === 'GPL-3.0':
      data.licenseLink = 'GPLv3'
      break;
    case data.license === 'MIT':
      data.licenseLink = 'MIT'
      break;
  
    default: 
          '';
  }
}

//  Create a function that returns the license section of README //
// If there is no license, return an empty string //

function renderLicenseSection(license) {
  if (!data.license) {
    "";
  }
}

// Create a function to generate markdown for README //

function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## License
  ${data.license}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Any Questions? Please reachout to me at ${data.email}
  In addition, you can view this project and others at https://github/${data.github}
`;
}

function writeFile (data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./Test.md", generateMarkdown(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "index.md created" });
    });
  });
};

// Export writeFile function to be used in index.js //
module.exports = {
  writeFile,
};