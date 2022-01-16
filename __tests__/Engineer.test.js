const Engineer = require('../lib/Engineer.js');

test('creates an engineer array', () => {
  const test = new Engineer('John Davis', '1234', 'test@gmail.com', 'Github');

  expect(test.name).toBe('John Davis');
  expect(test.id).toBe('1234');
  expect(test.email).toBe('test@gmail.com')
  expect(test.github).toBe('Github');
  console.log(test);
  
});