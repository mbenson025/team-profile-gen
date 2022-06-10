const Manager = require('../lib/manager');

//test inheritance/create manager object
test('manager object', () => {
  const manager = new Manager('manager1', '89', 'manager@test.com', '7');
  expect(manager.name).toBe('manager1');
  expect(manager.id).toBe('89');
  expect(manager.email).toBe('manager@test.com');
  expect(manager.officeNumber).toBe('7');
});

//test officeNumber grab
test('manager officeNumber', () => {
  const manager = new Manager('manager1', '89', 'manager@test.com', '7');
  expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('7'));
});

//check role for 'manager'
test('getRole() function returns manager', () => {
  const role = 'Manager';
  const manager = new Manager('manager1', '89', 'manager@test.com', '7');
  expect(manager.getRole()).toBe(role);
});
