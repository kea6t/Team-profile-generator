const Employee = require('../lib/Employee');
// Intern class that inherit's Employee class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
    }
    // returns school
    getSchool(){
        return this.school;
    }
    // Overridden to return Intern
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;
