const Employee = require('../lib/Employee');
// Engineer class that inherit's Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    // returns github
    getGithub(){
        return this.github;
    }
    // Overridden to return Engineer
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer
