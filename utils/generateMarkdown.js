// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = [
  {
    name: 'Apache 2.0 License',
    badge: '![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)',
    link: 'https://opensource.org/licenses/Apache-2.0',
  },
  {
    name: 'Boost Software License 1.0',
    badge: '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
    link: 'https://www.boost.org/LICENSE_1_0.txt',
  },
  {
    name: 'BSD 3-Clause License',
    badge: '![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  {
    name: 'BSD 2-Clause License',
    badge: '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)',
    link: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  {
    name: 'The Hippocratic License 2.1',
    badge: '![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)',
    link: 'https://firstdonoharm.dev',
  },
  {    
    name: 'The Hippocratic License 3.0',
    badge: '![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)',
    link: 'https://firstdonoharm.dev',
  },
  {    
    name: 'MIT License',
    badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    link: 'https://opensource.org/licenses/MIT',
  },
  {    
    name: 'Mozilla Public License 2.0',
    badge: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    link: 'https://opensource.org/licenses/MPL-2.0',
  },
  {    
    name: 'Do What the F*ck You Want to Public License',
    badge: '![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)',
    link: 'http://www.wtfpl.net/about/',
  },
  {    
    name: 'Unlicense',
    badge: '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)',
    link: 'http://unlicense.org/',
  }];
function renderLicenseBadge(license) {
  let licenseBadge = '';
  (license === 'No License') ? licenseBadge                                        : 
  (licenses.forEach((element) => (element.name === license) ? licenseBadge = element.badge  :
  'Not found'));
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  (license === 'No License') ? licenseLink                                        : 
  (licenses.forEach((element) => (element.name === license) ? licenseLink = element.link  :
  'Not found'));
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  const link= renderLicenseLink(license);
  return ((license === 'No License') 
  ? 
`
## License

This code is not protected under any License.
`
  : 
`
## License

This code is under ${license} license. In order to know what you can and can't do with this code, we recommend to visit the following link [${license}](${link}).
`
  )
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title} [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

## Description

${data.description}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contribuitors}

${renderLicenseSection(data.license)}

`;
}
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};

