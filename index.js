const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//class paths
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//question array
const questions = {
  //manager array
  Manager: [
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
  ],

  //engineer array
  Engineer: [
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
      name: 'managerEmail',
      message: 'Enter the email for this engineer',
    },
  ],

  //intern array
  Intern: [
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
  ],
};
