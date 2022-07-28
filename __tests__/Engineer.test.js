const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
    describe('username', () => {
        it('Should create a github username for engineer', () => {
            const username = 'iamgithub';
            const email = 'iamafake@email.com';
            const engineer = new Engineer('Dave', 102, email, username);

            expect(engineer.github).toBe(username);
        });
    });

    // test for getGithub() function
    describe('github', () => {
        it('Should get the github username from getGithub() function', () => {
            const github = 'iamgithub';
            const email = 'iamafake@email.com';
            const engineer = new Engineer('Dave', 102, email, github);

            expect(engineer.getGithub()).toBe(github);
        });
    });

    // test for getRole() function
    describe('role', () => {
        it('Should get the role of a Engineer', () => {
            const email = 'iamafake@email.com';
            const github = 'iamgithub';
            const engineer = new Engineer('Dave', 102, email, github);

            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});






