const Intern = require('../lib/Intern');


describe('Intern', () => {
    // const variables for testing
    const name = 'Cat';
    const id = 103;
    const school = 'GMU';
    const email = 'iamafakestudent@email.com';
    const intern = new Intern(name, id, email, school);
    // test for creating school
    describe('school', () => {
        it('Creates a school for intern', () => {
            expect(intern.school).toBe(school);
        });
    });

    // test for getSchool() function
    describe('getSchool', () => {
        it('Should get the school name from getGithub() function', () => {

            expect(intern.getSchool()).toBe(school);
        });
    });

    // test for getRole() function
    describe('role', () => {
        it('Should get the role of a Intern', () => {
            expect(intern.getRole()).toBe('Intern');
        });
    });
});