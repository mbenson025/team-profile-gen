const Employee = require('../lib/employee');

test('generate employee object', () => {
  const testEmp = new Employee();

  expect(typeof testEmp).toBe('object');
});
