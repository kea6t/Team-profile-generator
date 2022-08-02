// create the Manager section card
const generateManager = myTeam => {
    console.log(myTeam);
    return `  
    <div class="card row text-white bg-primary mb-3" style="max-width: 18rem;">
    <!-- Creating separate arrays for each team member and filtering them out.  --> 
    <!-- Deconstructing Manager  -->
    ${myTeam
            .filter(( employee ) => employee.getRole() === 'Manager')
            .map(( manager ) => { 
                return `
    <div class="card-header fas fa-mug-hot"> ${manager.name} </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item text-dark">Office number: ${manager.officeNumber}</li>
      <li class="list-group-item text-dark">ID: ${manager.id}</li>
      <li class="list-group-item text-dark">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
    </ul>
  </div>
    `;
            })
            .join('')}
    `
};

// create the Engineer section
const generateEngineer = myTeam => {
    return `
    <div class="card row text-white bg-primary mb-3" style="max-width: 18rem;">
    <!-- Creating separate arrays for each team member and filtering them out.  --> 
    <!-- Deconstructing Engineer  -->
    ${myTeam
        .filter(( employee ) => employee.getRole() === 'Engineer')
        .map(( engineer ) => {
            console.log(engineer.github);
                return `
    <div class="card-header fas fa-glasses"> ${engineer.name} </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item text-dark href='https://github.com/${engineer.github}'></a>">
      Github: ${engineer.github}</li>
      <li class="list-group-item text-dark">ID: ${engineer.id}</li>
      <li class="list-group-item text-dark">Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></li>
    </ul>
  </div>
    `;
            })
            .join('')}
`
};

// create the Intern section
const generateIntern = myTeam => {
    return `
    <div class="card row text-white bg-primary mb-3" style="max-width: 18rem;">
    <!-- Creating separate arrays for each team member and filtering them out.  --> 
    <!-- Deconstructing Intern  -->
    ${myTeam
        .filter(( employee ) => employee.getRole() === 'Intern')
        .map(( intern ) => { 
                return ` 
    <div class="card-header fa fa-graduation-cap"> ${intern.name} </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item text-dark">School: ${intern.school}</li>
      <li class="list-group-item text-dark">ID: ${intern.id}</li>
      <li class="list-group-item text-dark">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></li>
    </ul>
  </div>
    `;
            })
            .join('')}
`
};


// export function to generate entire page
module.exports = templateData => {
    //const { manager, engineer, intern} = templateData
    console.log(templateData);
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
      <div class="container-fluid">
      ${generateManager(templateData)}
      ${generateEngineer(templateData)}
      ${generateIntern(templateData)}
       
        </div>
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Kenny</h3>
      </footer>
    </body>
    </html>
    `;
};


