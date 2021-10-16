const inquirer = require("inquirer");

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
    })
}

function engineerQuestion(){
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
startApp()