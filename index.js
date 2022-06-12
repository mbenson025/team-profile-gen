const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const createTeam = require('./src/createTeam');

//role paths
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
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Manager name is required';
          }
        },
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'What is the ID for the manager?',
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'ID is required';
          }
        },
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Please enter a valid email';
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number for this manager',
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Office number is required to proceed';
          }
        },
      },
    ])
    .then((userInput) => {
      const manager = new Manager(
        userInput.managerName,
        userInput.managerId,
        userInput.managerEmail,
        userInput.officeNumber
      );
      return nextQuestion(), teamArr.push(manager);
    });
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "Enter the engineer's name",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Engineer name is required';
          }
        },
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "Enter the engineer's ID",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'ID is required';
          }
        },
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter an email for this engineer',
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Please enter a valid email';
          }
        },
      },
      {
        type: 'input',
        name: 'engineerGitHub',
        message: 'What is the github username for this engineer',
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Github account username is required';
          }
        },
      },
    ])
    .then((userInput) => {
      const engineer = new Engineer(
        userInput.engineerName,
        userInput.engineerId,
        userInput.engineerEmail,
        userInput.engineerGitHub
      );
      return nextQuestion(), teamArr.push(engineer);
    });
};

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: "Enter the intern's name",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Intern name is required';
          }
        },
      },
      {
        type: 'input',
        name: 'internId',
        message: "Enter the intern's ID",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'ID is required';
          }
        },
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the email for this intern',
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Please enter a valid email';
          }
        },
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'What school did the intern graduate from?',
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return false, 'Please enter a valid school';
          }
        },
      },
    ])
    .then((userInput) => {
      const intern = new Intern(
        userInput.internName,
        userInput.internId,
        userInput.internEmail,
        userInput.internSchool
      );
      return nextQuestion(), teamArr.push(intern);
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
      if (choice.teamChoice === 'Engineer') {
        return engineerPrompt();
      }
      if (choice.teamChoice === 'Intern') {
        return internPrompt();
      }
      if (choice.teamChoice === 'Finished') {
        return createTeam(teamArr);
      }
    });
};

questions();
