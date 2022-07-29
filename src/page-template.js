// create the Manager section
const generateManager = () => {
    return `  
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${ data.getName() } fas fa-mug-hot</div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Office number: ${data.getOfficeNumber()}</li>
      <li class="list-group-item">ID: ${data.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}" class="card-link">${data.getEmail()}</a></li>
    </ul>
  </div>
  div class="card-body">
      <a href="#${email}" class="card-link">Email</a>
    </div>
    `;
};

// create the Engineer section
const generateEngineer = () => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${ data.getName() } fas fa-glasses</div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Github: ${data.getGithub()}</li>
      <li class="list-group-item">ID: ${data.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}" class="card-link">${data.getEmail()}</a></li>
    </ul>
  </div>
  div class="card-body">
      <a href="#${email}" class="card-link">Email</a>
    </div>
    `;
};

// create the Intern section
const generateIntern = () => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${ data.name } fa fa-graduation-cap</div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">School: ${school}</li>
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}" class="card-link">${data.getEmail()}</a></li>
    </ul>
  </div>
  div class="card-body">
      <a href="#${email}" class="card-link">Email</a>
    </div>
    `;
};

// function to select which employees to add to the team.
// Using switch statement to select team members
// calling the functions created above for populating the cards
const employeeCards = (teams) => {
    let card = "";
    teams.forEach(data => {
        switch (data.getRole()) {
            case 'Manager': card += `${generateManager()}`
            break;
            case 'Engineer': card += `${generateEngineer()}`
            break;
            case 'Intern': card += `${generateIntern()}`
            break
        }
    });
    return card;
}

// export function to generate entire page
const generatePage = (teams) => {

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
        ${employeeCards(teams)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Kenny</h3>
      </footer>
    </body>
    </html>
    `;
};

module.exports = generatePage
