// import { Employee, Contractor } from './hr'; // defaults to index.ts
import * as fromHR from './hr';

describe('modules and classes oh my', () => {

    it('creating an employee', () => {

        const bob = new fromHR.Employee('Bob', 'Smith', 120000);

        expect(bob.firstName).toBe('Bob');
        expect(bob.lastName).toBe('Smith');
        expect(bob.fullName).toBe('Bob Smith');
        expect(bob.salary).toBe(120_000);

        bob.giveRaise(1000);
        expect(bob.salary).toBe(121_000);
    });

    it('working with a contractor', () => {
        const joe = new fromHR.Contractor('Joe Schmidt');
        expect(joe.name).toBe('Joe Schmidt');
    });
});

