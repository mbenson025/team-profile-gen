const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//class paths
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
        message: 'Enter the ID for the manager',
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the email for the manager',
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
      console.log(manager);
    });
};

//engineer array
// Engineer: [
//   {
//     type: 'input',
//     name: 'engineerName',
//     message: "Enter the engineer's name",
//   },
//   {
//     type: 'input',
//     name: 'engineerId',
//     message: "Enter the engineer's ID",
//   },
//   {
//     type: 'input',
//     name: 'engineerEmail',
//     message: 'Enter the email for this engineer',
//   },
//   {
//     type: 'input',
//     name: 'engineerGitHub',
//     message: 'Enter a github username for this engineer',
//   },
// ]

//intern array
// Intern: [
//   {
//     type: 'input',
//     name: 'internName',
//     message: "Enter the intern's name",
//   },
//   {
//     type: 'input',
//     name: 'internId',
//     message: "Enter the intern's ID",
//   },
//   {
//     type: 'input',
//     name: 'internEmail',
//     message: 'Enter the email for this intern',
//   },
//   {
//     type: 'input',
//     name: 'internSchool',
//     message: 'Enter a school for this intern',
//   },
// ]

questions();
