const Employee = require('../lib/employee');

test('generate employee object', () => {
  const newEmp = new Employee('john', '1234', 'john@test.com');

  expect(typeof newEmp).toBe('object');
  expect(newEmp.name).toBe('john');
  expect(newEmp.id).toBe('1234');
  expect(newEmp.email).toBe('john@test.com');
  expect(newEmp.getRole()).toBe('Employee');
});
