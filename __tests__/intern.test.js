const Intern = require('../lib/Intern');


describe('Intern', () => {
    // test for creating school
    describe('school', () => {
        it('Creates a school for intern', () => {
            const school = 'GMU';
            const email = 'iamafakestudent@email.com';
            const intern = new Intern('Cat', 103, email, school);

            expect(intern.school).toBe(school);
        });
    });

    // test for getSchool() function
    describe('getSchool', () => {
        it('Should get the school name from getGithub() function', () => {
            const school = 'GMU';
            const email = 'iamafakestudent@email.com';
            const intern = new Intern('Cat', 103, email, school);

            expect(intern.getSchool()).toBe(school);
        });
    });

    // test for getRole() function
    describe('role', () => {
        it('Should get the role of a Intern', () => {
            const school = 'GMU';
            const email = 'iamafakestudent@email.com';
            const intern = new Intern('Cat', 103, email, school);

            expect(intern.getRole()).toBe('Intern');
        });
    });
});