const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('creates an Manager array', () => {
  const test = new Manager('John Davis', '1234', 'test@gmail.com', 'Manager', '1');

  expect(test.name).toBe('John Davis');
  expect(test.type).toBe('Manager');
  expect(test.officeNumber).toBe('1');
  console.log(test);
  
});
