const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
  }

  getRole() {
    return 'engineer';
  }
}

module.exports = Engineer;
