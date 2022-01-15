const Employee = require('../lib/Employee.js');

test('creates an employee array', () => {
  const test = new Employee('John Davis', '1234', 'test@gmail.com', 'Employee');

  expect(test.name).toBe('John Davis');
  expect(test.id).toBe('1234');
  expect(test.email).toBe('test@gmail.com');
  expect(test.type).toBe('Employee');
  console.log(test);
  
});
