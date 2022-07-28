// Employee parent class with the following properties and methods.
class Employee {
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
    }
    // returns name
    getName(){
        return this.name;
    }
    // returns Id
    getId(){
        return this.id;
    }
    // returns email
    getEmail(){
        return this.email;
    }
    // returns Employee
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;