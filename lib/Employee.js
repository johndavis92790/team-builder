class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
};

module.exports = Employee;

// const EmployeeDayOff = 'monday';

// // edit the database

// const test = {
//   name: 'test',
//   init() {
//     console.log('my test');
//   }
// };

// const test2 = {
//   name: 'test2',
//   init() {
//     console.log('my test2');
//   }
// };

// class Tester {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     return `my ${this.name}`;
//   }
// }

// class Tester2 extends Tester {
//   constructor(name) {
//     super(name);
//   }
//   bye() {
//     return `bye ${this.name}`;
//   }
// }

// console.log('Employee.js ran');

// module.exports = Tester;

// module.exports = {test, test2, test3}
