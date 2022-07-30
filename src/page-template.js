const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// create the Manager section card
const generateManager = projectsArr => {

    return `  
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <!-- Creating separate arrays for each team member and filtering them out.  --> 
    <!-- Deconstructing Manager  -->
    ${projectsArr
            .filter(({ manager }) => manager)
            .map(({ name, email, id, office }) => {
                return `
    <div class="card-header">${name} fas fa-mug-hot</div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Office number: ${office}</li>
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
    </ul>
  </div>
    `;
            })
            .join('')}
    `
};

// create the Engineer section
const generateEngineer = projectsArr => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <!-- Creating separate arrays for each team member and filtering them out.  --> 
    <!-- Deconstructing Engineer  -->
    ${projectsArr
            .filter(({ manager }) => manager)
            .map(({ name, email, id, github }) => {
                return `
    <div class="card-header">${name} fas fa-glasses</div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Github: ${github}</li>
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
    </ul>
  </div>
    `;
            })
            .join('')}
`
};

// create the Intern section
const generateIntern = projectsArr => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <!-- Creating separate arrays for each team member and filtering them out.  --> 
    <!-- Deconstructing Intern  -->
    ${projectsArr
            .filter(({ manager }) => manager)
            .map(({ name, email, id, school }) => {
                return ` 
    <div class="card-header">${name} fa fa-graduation-cap</div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">School: ${school}</li>
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
    </ul>
  </div>
    `;
            })
            .join('')}
`
};

// function to select which employees to add to the team.
// Using switch statement to select team members
// calling the functions created above for populating the cards
const employeeCards = (teams) => {
    let cards = "";
    teams.forEach(myTeam => {
        switch (myTeam.getRole()) {
            case 'Manager': cards += `${generateManager(teams)}`
                break;
            case 'Engineer': cards += `${generateEngineer(teams)}`
                break;
            case 'Intern': cards += `${generateIntern(teams)}`
                break;
        }
    });
    return cards;
}


// function to generate entire page
const generatePage = myTeam => {

    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title>Team Profile Generator</title>
      </head>
    
    <body>
    <header class="mx-auto text-center text-white bg-primary">
    <h1>My Team</h1>
    </header>
      <main class="container fluid text-white">
        ${employeeCards(myTeam)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Kenny</h3>
      </footer>
    </body>
    </html>
    `;
};

module.exports = generatePage;
