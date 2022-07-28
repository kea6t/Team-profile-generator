const Employee = require('../lib/Employee');
// Manager class that inherit's Employee class
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    // returns office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;