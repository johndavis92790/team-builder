const Intern = require('../lib/Employee.js');
const Employee = require('../lib/Employee.js');

test('creates an Intern array', () => {
  const test = new Intern('John Davis', '1234', 'test@gmail.com', 'Intern', 'School');

  expect(test.name).toBe('John Davis');
  // expect(test.school).toBe('School');
  console.log(test);
  
});