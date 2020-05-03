let inquirer = require("inquirer");
let axios = require("axios");
let dotenv = require('dotenv').config();
let fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        type: "input",
        name: "github",
        message: "Please type your github username:"
    },
    {
        type: "input",
        name: "title",
        message: "Please type the name of your project:"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project:"
    },
    {
        type: "input",
        name: "table",
        message: "Please describe your table of contents"
    },
    {
        type: "list",
        name: "license",
        message: "Please type select the liscense you used for your project :",
        choices: [
            "ISC",
            "MIT license"

    ]
    },
    {
        type: "input",
        name: "installation",
        message: "what you need to install this project:"
       
    },
    {
        type: "input",
        name: "usage",
        message: "If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.?:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Let people know how they can contribute into your project. A contributing guideline will be a big plus.:"
    },
    {
        type: "input",
        name: "tests",
        message: " Describe and show how to run the tests with code examples:"
    },
    {
        type: "input",
        name: "questions",
        message: " Describe and show how to run the tests with code examples:"
    }
];


function init() {
    inquirer.prompt(questions)
    
    
    .then(function answers ({ github }){
        const queryUrl = `https://api.github.com/users/${github}?client_id=${process.env.client_id}&client_secret=${process.env.client_secret}`
        
    
        axios.get(queryUrl).then(function(response) {
           
                      
    
    
            const {html_url, login, avatar_url, repos_url, email, name, bio} = response.data;
            const gitInfo = {
              "html_url": html_url,
              "login": login, 
              "avatar_url": avatar_url,
              "repos_url": repos_url,
              "email": email,
              "name" : name,
              "bio": bio
            };
    console.log(response.data);
     console.log("");
    
    
    console.log(gitInfo);
    
    const data = {
        username: answers.username,
        repo: answers.github,
        title: answers.projectTitle,
        description: answers.description,
        installation: answers.installation,
        usage: answers.usage,
        license: answers.license,
        contributing: answers.contributing,
        tests: answers.tests,
        
    };
    console.log(data);
    let newinfo = JSON.stringify(gitInfo);
    
    console.log(questions.title);
    // console.log(newinfo);
    // console.log(gitInfo);
    console.log("hello");
    
    let plzwork =
     `# ${questions.title}

    <img src="https://img.shields.io/badge/license-${data.license}-green" alt="License Badge">
    <img src="https://img.shields.io/github/repo-size/${response.data.username}/${response.data.repo}" alt="Size Badge">
    
    ## Description 
    ${response.data.description}
    
    ## Table of Contents
    1. [Installation](#installation)
    1. [Usage](#usage)
    1. [License](#license)
    1. [Contributing](#contributing)
    1. [Tests](#tests)
    1. [Credits](#credits)
    1. [Questions](#questions)
    
    ## Installation
    
    ${response.data.installation}
    
    ## Usage 
    ${response.data.usage}
    
    ## License
    Licensed under the ${response.data.license} license.
    
    ## Contributing
    ${response.data.contributing}
    
    ## Tests
    
    ${response.data.tests}
    
    ## Credits
    
    ## Questions
    
    <img src="${response.data.avatar_url}" alt="Avatar Image" width="150" height="150">

    
    If you have any questions, please contact me at ${response.data.email}.
    `;
        
    
    
    writeFileAsync("README.md", plzwork + "\n", function(error){
       if(error){
           console.log(error);
       }else{
           console.log("click on the new file to see your favorite state");
       }
    })
    })
    return this.github;
        })
     
          
    }
    
        init();
        module.exports = init;