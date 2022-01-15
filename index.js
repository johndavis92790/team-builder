const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

var employees = [];

const promptUser = (type) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employeeName',
      message: `What the ${type}'s name? (Required)`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Please enter the ${type}'s name!`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeID',
      message: `What the ${type}'s ID #? (Required)`,
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log(`Please enter the ${type}'s ID #!`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: `What the ${type}'s email? (Required)`,
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log(`Please enter the ${type}'s email!`);
          return false;
        }
      }
    }
  ]);
};

const promptAnother = employeeData => {
  return inquirer.prompt([ 
    {
      type: 'confirm',
      name: 'confirmAnother',
      message: 'Would you like to add another employee?',
      default: false
    },
    {
      type: 'checkbox',
      name: 'type',
      message: 'Is the new employee going to be an engineer or intern? (Check all that apply)',
      choices: ['Engineer', 'Intern'],
      when: ({ confirmAnother }) => confirmAnother
    }
  ])
  .then(choice => {
    if (choice.confirmAnother){
      if (choice.type[0] === 'Engineer') {
        promptUser('engineer')
          .then(promptEngineer)
          
      } else {
        promptUser('intern')
          .then(promptIntern)
      }
    } else {
      return employees;
    }
  });
}

const promptEngineer = employeeData => {
  if (!employees.engineers) {
    employees.engineers = [];
  }
  return inquirer.prompt([ 
    {
      type: 'input',
      name: 'github',
      message: `What the eningeer's github? (Required)`,
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log(`Please enter the eningeer's github!`);
          return false;
        }
      }
    }
  ])
  .then(engineerData => {
    employeeData.github = engineerData.github;
    const engineer = new Engineer(
      employeeData.employeeName,
      employeeData.employeeID,
      employeeData.employeeEmail,
      employeeData.github
    );
    employees.engineers.push(engineer);
    console.log('employees', employees);
    return employeeData;
  })
  .then(promptAnother);
}

const promptIntern = employeeData => {
  if (!employees.interns) {
    employees.interns = [];
  }
  return inquirer.prompt([ 
    {
      type: 'input',
      name: 'school',
      message: `What the intern's school name? (Required)`,
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log(`Please enter the intern's school name!`);
          return false;
        }
      }
    }
  ])
  .then(internData => {
    employeeData.school = internData.school;
    const intern = new Intern(
      employeeData.employeeName,
      employeeData.employeeID,
      employeeData.employeeEmail,
      employeeData.school
    );
    employees.interns.push(intern);
    console.log('employees', employees);
    return employeeData;
  })
  .then(promptAnother);
}
 
const promptManager = employeeData =>{
  employeeData.type = 'Manager'
  if (!employees.managers) {
    employees.managers = [];
  }
  return inquirer.prompt([ 
    {
      type: 'input',
      name: 'officeNumber',
      message: `What the manager's office #? (Required)`,
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log(`Please enter the manager's office #!`);
          return false;
        }
      }
    }
  ])
  .then(managerData => {
    employeeData.officeNumber = managerData.officeNumber;
    const manager = new Manager(
      employeeData.employeeName,
      employeeData.employeeID,
      employeeData.employeeEmail,
      employeeData.officeNumber
    );
    employees.managers.push(manager);
    console.log('employees', employees);
    return employeeData;
  })
  .then(promptAnother);
}



promptUser('manager')
  .then(promptManager)
  .then(employees => {
    
  })
  



// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'employeeName',
//       message: `What the ${type}'s name? (Required)`,
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log(`Please enter the ${type}'s name!`);
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'employeeID',
//       message: `What the ${this.type}'s ID #? (Required)`,
//       validate: idInput => {
//         if (idInput) {
//           return true;
//         } else {
//           console.log(`Please enter the ${this.type}'s ID #!`);
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'employeeEmail',
//       message: `What the ${this.type}'s email? (Required)`,
//       validate: emailInput => {
//         if (emailInput) {
//           return true;
//         } else {
//           console.log(`Please enter the ${this.type}'s email!`);
//           return false;
//         }
//       }
//     }
//   ])
// };

// const promptProject = portfolioData => {
//   console.log(`
// =================
// Add a New Project
// =================
// `);

//   // If there's no 'projects' array property, create one
//   if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   }
//   return inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of your project? (Required)',
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project name!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'input',
//         name: 'description',
//         message: 'Provide a description of the project (Required)',
//         validate: descriptionInput => {
//           if (descriptionInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project description!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'checkbox',
//         name: 'languages',
//         message: 'What did you this project with? (Check all that apply)',
//         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//       },
//       {
//         type: 'input',
//         name: 'link',
//         message: 'Enter the GitHub link to your project. (Required)',
//         validate: linkInput => {
//           if (linkInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project GitHub link!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'confirm',
//         name: 'feature',
//         message: 'Would you like to feature this project?',
//         default: false
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAddProject',
//         message: 'Would you like to enter another project?',
//         default: false
//       }
//     ])
//     .then(projectData => {
//       portfolioData.projects.push(projectData);
//       if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//       } else {
//         return portfolioData;
//       }
//     });
// };

// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
// });

// const {test, test2} = require('./lib/Employee.js');

// const test2 = new Tester2('test2');
// test2.hello(); // my test2
// test2.bye(); // bye

// const Tester = require('./lib/Employee.js');

// const test = new Tester('test');
// console.log(test.hello()); // my test