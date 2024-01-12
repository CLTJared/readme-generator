// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';

    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    default:
      return '';
    }

}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  // URL: https://choosealicense.com/licenses/
  switch (license) {
    case 'MIT':
      return '[MIT](https://choosealicense.com/licenses/mit)'

    case 'The Unlicense':
      return '[The Unlicense](https://choosealicense.com/licenses/unlicense/)'

    case 'GPLv3':
      return '[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)'

    default:
      return ''
    }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  return `License created under ${link}. See for more details.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const contributors = !data.contributors ? "N/A" : data.contributors;

  return `# ${data.project}

  # Description
  ${data.description}
  
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license) ${renderLicenseBadge(data.license)}
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  # Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  # License
  ${renderLicenseSection(data.license)}
  
  # Contributors
  ${contributors}
  
  # Test
  ${data.test}
  
  # Questions
  Please reach out via email if you have any questions.
  * GitHub: https://www.github.com/${data.ghUser}
  * eMail: ${data.email}
`;
}

module.exports = {generateMarkdown};