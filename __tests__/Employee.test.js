const Employee = require('../lib/Employee');

describe('Employee', () => {
    // const variables for testing
    const name = 'Dave'
    const id = 101;
    const email = 'iamafake@email.com';
    const employee = new Employee(name, id, email);
    // test for creating Employee object
    describe('employee', () => {
        it('Creates a employee object', () => {

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.name.length).toBeGreaterThan(0);
        });
    });

    // test for creating Employee id 
    describe('id', () => {
        it('Creates a employee id', () => {

            expect(employee.id).toBe(id);
        });
    });

    // test for creating Employee email
    describe('email', () => {
        it('Creates a employee email', () => {

            expect(employee.email).toBe(email);
        });
    })

    // test for getName() function
    describe('getName', () => {
        it('Gets a employee name from getName() function', () => {

            expect(employee.getName()).toBe('Dave');
        });
    })

    // test for getId() function
    describe('getId', () => {
        it('Gets employee id from getId() function', () => {

            expect(employee.getId()).toBe(id);
        });
    });

    // test for getRole() function
    describe('getRole', () => {
        it('Gets the role of a employee', () => {

            expect(employee.getRole()).toBe('Employee');
        });
    });

});
