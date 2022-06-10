const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//type paths
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamArr = [];

const questions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "Enter the name of the team's manager",
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'What is the ID for the manager?',
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number for this manager',
      },
    ])
    .then((userInput) => {
      const manager = new Manager(
        userInput.managerName,
        userInput.managerId,
        userInput.managerEmail,
        userInput.officeNumber
      );
      return nextQuestion(), teamArr.push(manager), console.log(teamArr);
    });
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "Enter the engineer's name",
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "Enter the engineer's ID",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter an email for this engineer',
      },
      {
        type: 'input',
        name: 'engineerGitHub',
        message: 'What is the github username for this engineer',
      },
    ])
    .then((userInput) => {
      const engineer = new Engineer(
        userInput.engineerName,
        userInput.engineerId,
        userInput.engineerEmail,
        userInput.engineerGitHub
      );
      return nextQuestion(), teamArr.push(engineer), console.log(teamArr);
    });
};

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: "Enter the intern's name",
      },
      {
        type: 'input',
        name: 'internId',
        message: "Enter the intern's ID",
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the email for this intern',
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'What school did the intern graduate from?',
      },
    ])
    .then((userInput) => {
      const intern = new Intern(
        userInput.internName,
        userInput.internId,
        userInput.internEmail,
        userInput.internSchool
      );
      return nextQuestion(), teamArr.push(intern), console.log(teamArr);
    });
};

const nextQuestion = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'teamChoice',
        message: 'Would you like to add another member to this team?',
        choices: ['Engineer', 'Intern', 'Finished'],
      },
    ])
    .then((choice) => {
      console.log(choice.teamChoice);
      if (choice.teamChoice == 'Engineer') {
        return engineerPrompt();
      }
      if (choice.teamChoice == 'Intern') {
        return internPrompt();
      }
      if (choice.teamChoice == 'Finished') {
        return createTeam();
      }
    });
};

questions();
