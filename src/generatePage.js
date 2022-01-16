const { writeFile } = require('../utils/generate-file');

function generateManager(templateData) {
  var currentManager = templateData.managers;
  return `
  ${currentManager
    .map(({ name, id, email, officeNumber }) => {
      return `
      <div class="card m-2 shadow mb-5 bg-body rounded" style="width: 250px">
        <div class="card-header bg-primary">
          <h5 class="card-title text-white">${name}</h5>
          <p class="card-text text-white">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <span><a href="mailto:${email}" class="card-link">${email}</a></span></li>
          <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
      </div>
      `;
    })
    .join('')}`
};

function generateEngineer(templateData) {
  if (!templateData.engineers) {
    return '';
  }
  // for (let i = 0; i < templateData.engineers.length; i++) {
    var currentEngineer = templateData.engineers;
    return `
    ${currentEngineer
      .map(({ name, id, email, github }) => {
        return `
        <div class="card m-2 shadow mb-5 bg-body rounded" style="width: 250px">
          <div class="card-header bg-primary">
            <h5 class="card-title text-white">${name}</h5>
            <p class="card-text text-white">Engineer</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <span><a href="mailto:${email}" class="card-link">${email}</a></span></li>
            <li class="list-group-item">Git Hub: <span><a href="https://github.com/${github}" class="card-link">${github}</a></span></li>
          </ul>
        </div>
      `;
    })
    .join('')}`
  // }
}

function generateIntern(templateData) {
  // for (let i = 0; i < templateData.interns.length; i++) {
    if (!templateData.interns) {
      return '';
    }
    var currentIntern = templateData.interns;
    return `
    ${currentIntern
      .map(({ name, id, email, school }) => {
        return `
        <div class="card m-2 shadow mb-5 bg-body rounded" style="width: 250px">
          <div class="card-header bg-primary">
            <h5 class="card-title text-white">${name}</h5>
            <p class="card-text text-white">Intern</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <span><a href="mailto:${email}" class="card-link">${email}</a></span></li>
            <li class="list-group-item">School: ${school}</li>
          </ul>
        </div>
      `;
      })
      .join('')}`
    // }
}
const generateCards = templateData => {
  return `
    <div class="d-flex flex-wrap m-3" style="justify-content: center">
      ${generateManager(templateData)}
      ${generateEngineer(templateData)}
      ${generateIntern(templateData)}
      
    </div>
  `;
};

function generatePage (templateData) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body>
    <header>
      <nav class="navbar navbar-light bg-danger" style="height: 100px">
        <div class="container-fluid">
          <a class="navbar-brand fs-1 text-white position-absolute top-50 start-50 translate-middle" href="#">My Team</a>
        </div>
      </nav>
    </header>
      ${generateCards(templateData)}
  </body>
  </html>
  `;
};

function writeHtml(templateData){
  writeFile(generatePage(templateData));
}

module.exports = { writeHtml };