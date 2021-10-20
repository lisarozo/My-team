const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/Myteam');

function startApp(){
    inquirer.prompt([
        {
            type: "input",
            name: "mgrName",
            message: "What is your Manager's name?"
        },
        {
            type: "input",
            name: "mgrId",
            message: "What is your Manager's Employee ID?"
        },
        {
            type: "input",
            name: "mgrEmail",
            message: "What is your Manager's email?"
        },
        {
            type: "input",
            name: "mgrOfficeNum",
            message: "What is your Manager's Office Number?"
        },
    ]).then(function(answers) {
        console.log(answers)
        mainMenu()
    })
}

function mainMenu(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Would you like to keep adding employees?',
            choices: ["Engineer", "Intern", "Done"]
        }
    ]).then(({choice}) => {
        if(choice == "Engineer"){
            
            console.log("you chose engineer")
            engineerQuestion()
        }
        if(choice == "Intern"){
            
            console.log("you chose Intern")
            internQuestions()
        }
    })
    
}

function engineerQuestion(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your Engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your Engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your Engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithubUsername",
            message: "What is your Engineer's Github username?"
        },
    ]).then(function(answers) {
        console.log(answers)
        mainMenu()
    })
}

function internQuestions(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your Intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is your 's Intern ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your Intern's email?"
        },
        {
            type: "input",
            name: "mgrOfficeNum",
            message: "What is your Manager's Office Number?"
        },
    ]).then(function(answers) {
        console.log(answers)
        mainMenu()
    })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
          if (err) throw err;
        });
  }
  writeToFile('index.html', generateHTML() )

startApp()