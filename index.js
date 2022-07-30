const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const myTeam = [];

const promptManager = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Team Manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your team manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter Team Manager's Id (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your team manager's Id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter Team Manager's email (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your team manager's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter Team Manager's office number (Required)",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please enter your team manager's office number!");
                return false;
            }
        }
    },
]


// questions prompt for engineer
const promptEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Engineer's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter engineer's Id (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your engineer's Id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter engineer's email (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your engineer's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link of you engineer. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a GitHub link!');
                return false;
            }
        }
    },
]
const createEngineer = () => {
    inquirer
        .prompt(promptEngineer)
        .then((engineerResponse) => {
            const engineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github);
            myTeam.push(engineer);
            createTeamMember();
        });
}


// questions prompt for engineer
const promptIntern = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Intern's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your Intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter Intern's Id (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your intern's Id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter Interns's email (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your Intern's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school of your Intern. (Required)',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('You need to enter a school!');
                return false;
            }
        }
    },
]

const createIntern = () => {
    inquirer
        .prompt(promptIntern)
        .then((internResponse) => {
            const intern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);
            myTeam.push(intern);
            createTeamMember();
        });
}


const promptCreateTeam = [
    {
        type: 'checkbox',
        name: 'confirmAddTeam',
        message: 'Which team member would you like to start a team with?',
        choices: ['Engineer', 'Intern', 'I am done building my team!'],

    }
]

const createTeamMember = () => {
    inquirer
        .prompt(promptCreateTeam)
        .then((response) => {
            console.log(response.confirmAddTeam);
            if (response.confirmAddTeam[0] === 'Engineer') {
                createEngineer();
            } else if (response.confirmAddTeam[0] === 'Intern') {
                createIntern();
            } else if (response.confirmAddTeam[0] === 'I am done building my team!') {
                createSite(myTeam);
            }
        });
};


const createSite = () => {
    generatePage(myTeam)
    .then((pageHtml) => {
        return writeFile(pageHtml)
    })

    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}

// 
const init = () => {
    inquirer
        .prompt(promptManager)
        .then((managerResponse) => {
            const manager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.office);
            myTeam.push(manager);
            createTeamMember();
        });
};

// Function call to initialize app
init();

