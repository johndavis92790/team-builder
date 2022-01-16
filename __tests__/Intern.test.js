const Intern = require('../lib/Intern.js');

test('creates an Intern array', () => {
  const test = new Intern('John Davis', '1234', 'test@gmail.com', 'School');

  expect(test.name).toBe('John Davis');
  expect(test.id).toBe('1234');
  expect(test.email).toBe('test@gmail.com');
  expect(test.school).toBe('School');
  console.log(test);
  
});