let inquirer = require("inquirer");
let axios = require("axios");
let dotenv = require('dotenv').config();
let fs = require('fs');
const util = require("util");
let gitapi = require("./gitapi");
const writeFileAsync = util.promisify(fs.writeFile);

init();