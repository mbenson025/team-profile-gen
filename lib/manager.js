const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, email, id) {
    super(name, email, id);
  }

  getRole() {
    return 'manager';
  }
}

module.exports = Manager;
