const Employee = require('../lib/Employee');

describe('Employee', () => {
    // test for creating Employee object
    describe('employee', () => {
        it('Creates a employee object', () => {
            const employee = new Employee('Dave');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.name.length).toBeGreaterThan(0);
        });
    });

    // test for creating Employee id 
    describe('id', () => {
        it('Creates a employee id', () => {
            const id = '001';
            const employee = new Employee('Dave', id);

            expect(employee.id).toBe(id);
        });
    });

    // test for creating Employee email
    describe('email', () => {
        it('Creates a employee email', () => {
            const email = 'iamafake@email.com';
            const employee = new Employee('Dave', 101, email);

            expect(employee.email).toBe(email);
        });
    })

    // test for getName() function
    describe('getName', () => {
        it('Gets a employee name from getName() function', () => {
            const employee = new Employee('Dave');

            expect(employee.getName()).toBe('Dave');
        });
    })

    // test for getId() function
    describe('getId', () => {
        it('Gets employee id from getId() function', () => {
            const id = '001';
            const employee = new Employee('Dave', id);

            expect(employee.getId()).toBe(id);
        });
    });

    // test for getRole() function
    describe('getRole', () => {
        it('Gets the role of a employee', () => {
            const email = 'iamafake@email.com';
            const employee = new Employee('Dave', 101, email);

            expect(employee.getRole()).toBe('Employee');
        });
    });

});
