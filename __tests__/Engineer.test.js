const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

test('creates an engineer array', () => {
  const test = new Engineer('John Davis', '1234', 'test@gmail.com', 'Engineer', 'test');

  expect(test.name).toBe('John Davis');
  expect(test.type).toBe('Engineer');
  expect(test.email).toBe('test@gmail.com')
  expect(test.github).toBe('test');
  console.log(test);
  
});