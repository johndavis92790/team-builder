const Manager = require('../lib/Manager.js');

test('creates an Manager array', () => {
  const test = new Manager('John Davis', '1234', 'test@gmail.com', '1');

  expect(test.name).toBe('John Davis');
  expect(test.id).toBe('1234');
  expect(test.email).toBe('test@gmail.com');
  expect(test.officeNumber).toBe('1');
  console.log(test);
  
});
