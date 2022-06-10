const Engineer = require('../lib/engineer');

//test inheritance/create engineer object
test('engineer object', () => {
  const eng = new Engineer('mason', '47', 'mbenson@test.com', 'mbenson025');
  expect(eng.name).toBe('mason');
  expect(eng.id).toBe('47');
  expect(eng.email).toBe('mbenson@test.com');
  expect(eng.github).toBe('mbenson025');
});

//test github grab
test('engineer github', () => {
  const eng = new Engineer('mason', '47', 'mbenson@test.com', 'mbenson025');
  expect(eng.getGitHub()).toEqual(expect.stringContaining('mbenson025'));
});

//check role for 'engineer'
test('getRole() function returns Engineer', () => {
  const role = 'Engineer';
  const eng = new Engineer('mason', '47', 'mbenson@test.com', 'mbenson025');
  expect(eng.getRole()).toBe(role);
});
