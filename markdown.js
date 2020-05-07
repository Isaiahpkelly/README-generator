let inquirer = require("inquirer");
let axios = require("axios");
let dotenv = require('dotenv').config();
let fs = require('fs');
const util = require("util");
const path = require('path');

const writeFileAsync = util.promisify(fs.writeFile);


function markDown(){

    let content = `# ${data1.title}
    <img src="https://img.shields.io/badge/license-${data1.license}-green" alt="License Badge">
    <img src="https://img.shields.io/github/repo-size/${response.data.username}/${response.data.repo}" alt="Size Badge">
    ## Description
    ${data1.description}
    ## Table of Contents
    1. [Installation](#installation)
    1. [Usage](#usage)
    1. [License](#license)
    1. [Contributing](#contributing)
    1. [Tests](#tests)
    1. [Credits](#credits)
    1. [Questions](#questions)
    ## Installation
    ${data1.installation}
    ## Usage
    ${data1.usage}
    ## License
    Licensed under the ${data1.license} license.
    ## Contributing
    ${data1.contributing}
    ## Tests
    ${data1.tests}
    ## Credits
    ## Questions
    <img src="${response.data.avatar_url}" alt="Avatar Image" width="150" height="150">
    If you have any questions, please contact me at ${response.data.email}.
    `
    
    
    
    console.log("hello");
    
    writeFileAsync("README.md", content, function(error){
       if(error){
           console.log(error);
       }else{
           console.log("click on the new file to see your favorite state");
       }
    })
}
module.exports = markDown;