const inquirer = require('inquirer');

const managerQuestions = [ 
  {
    type: 'input',
    name: 'manager-name',
    message: "What the team manager's name? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the team manager's name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter the employee ID# of the manager (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter the employee ID# of the manager!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'manager-email',
    message: "What the team manager's email? (Required)",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the team manager's email!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'office',
    message: 'Enter the office # (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter the office #!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'employee-type',
    message: 'Is the new employee going to be an engineer or intern? (Check all that apply)',
    choices: ['Engineer', 'Intern']
  }
]

const engineerQuestions = [ 
  {
    type: 'input',
    name: 'engineer-name',
    message: 'What is the name of the engineer? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('You need to enter the name of the engineer!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineer-id',
    message: 'Enter the employee ID# of the engineer (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter the employee ID# of the engineer!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineer-email',
    message: "What the engineer's email? (Required)",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the engineer's email!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineer-github',
    message: "Enter the engineer's github username (Required)",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the engineer's github username!");
        return false;
      }
    }
  }
]

const internQuestions = [ 
  {
    type: 'input',
    name: 'intern-name',
    message: 'What is the name of the intern? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('You need to enter the name of the intern!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'intern-id',
    message: 'Enter the employee ID# of the intern (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter the employee ID# of the intern!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'intern-email',
    message: "What the intern's email? (Required)",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the intern's email!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'intern-github',
    message: "Enter the intern's school name (Required)",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the intern's school name!");
        return false;
      }
    }
  }
]

const mockData = {
  
};
