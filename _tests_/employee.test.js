const Employee = require('../lib/employee');

test('generate employee object', () => {
  const newEmp = new Employee('john', '25', 'john@test.com');

  expect(typeof newEmp).toBe('object');
});

test('generate employee name', () => {
  const name = 'john';
  const newEmp = new Employee(name);

  expect(newEmp.name).toBe(name);
});

test('generate employee id', () => {
  const id = '25';
  const newEmp = new Employee('john', '25', 'john@test.com');

  expect(newEmp.id).toBe(id);
});

test('generate employee email', () => {
  const email = 'john@test.com';
  const newEmp = new Employee('john', '25', 'john@test.com');

  expect(newEmp.email).toBe(email);
});

test('generate role', () => {
  const role = 'Employee';
  const newEmp = new Employee('john', '25', 'john@test.com');

  expect(newEmp.getRole()).toBe(role);
});
