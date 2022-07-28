const Manager = require('../lib/Manager');

describe('Manager', () => {
    // const variables for testing
    const name = 'Chewy';
    const id = 1004;
    const email = 'iamafakemanager@email.com';
    const office = 867-5309;
    const manager = new Manager(name, id, email, office);
    // test for creating office number
    describe('office number', () => {
        it('Creates a office number for manager', () => {
            expect(manager.officeNumber).toBe(office);
        });
    });

    // test for getSchool() function
    describe('getOfficeNumber', () => {
        it('Should get the office number from getOfficeNumber() function', () => {
            expect(manager.getOfficeNumber()).toBe(office);
        });
    });

    // test for getRole() function
    describe('role', () => {
        it('Should get the role of a Intern', () => {
            expect(manager.getRole()).toBe('Manager');
        });
    });
});