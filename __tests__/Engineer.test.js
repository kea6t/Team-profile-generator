const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
    // const variables for testing
    const name = 'Peter'
    const id = 102;
    const email = 'iamafake@email.com';
    const github = 'iamgithub';
    const engineer = new Engineer(name, id, email, github);

    // test for creating username
    describe('username', () => {
        it('Should create a github username for engineer', () => {

            expect(engineer.github).toBe(github);
        });
    });

    // test for getGithub() function
    describe('github', () => {
        it('Should get the github username from getGithub() function', () => {

            expect(engineer.getGithub()).toBe(github);
        });
    });

    // test for getRole() function
    describe('role', () => {
        it('Should get the role of a Engineer', () => {

            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});






