describe('declaring variables', () => {
    describe('using let', () => {
        it('uninitialized let', () => {
            let x;

            x = 12;
            expect(x).toBe(12);

            x = 'Pizza';
            expect(x).toBe('Pizza');
        });
        it('using a typed let', () => {
            let x: number;

            x = 12;
            expect(x).toBe(12);

            // x = 'Pizza';
            // expect(x).toBe('Pizza');
        });
        it('using an initialized let', () => {
            let x = 12;

            expect(x).toBe(12);

            // x = 'Tacos'; //nope! it is a number!

            x = 42;

            const PI = 3.14;
        });
    });
    describe('using const', () => {
        it('protects you from reassigning a variable', () => {
            const minAge = 21;

            // minAge = 12;

            const friends = ['sean', 'amy', 'jessika'];

            friends[0] = 'byron';

            expect(friends).toEqual(['byron', 'amy', 'jessika']);

            const message = { from: 'stacey', note: 'get milk' };

            // message = {};

            message.note = 'get soy milk';

        });
    });
    describe('advanced types', () => {
        it('has union types', () => {
            let x: number | string;

            x = 12;

            x = 'puppy';

        });
        it('type aliases', () => {
            type thingWithLettersAndStuff = string;

            let name: thingWithLettersAndStuff;

            name = 'Octane';

            type NumberOfString = number | string;

            type CreditCardNumber = string;
            // Allows you to assign a more descriptive type name OR gives you job security. Thanks, Jeff!
            interface Person {
                name: string;
                age: number;
                cc: CreditCardNumber;
            }

        });
    });
    describe('some of the built-in types', () => {
        it('has numbers', () => {
            const n1 = 3;
            const n2 = 3.14;
            const n3 = 0xff; // Hexadecimal
            const n4 = 0o22; // Base 8
            const n5 = 0b0101; // base 2 (binary)
            const myPay = 1_333_222;

            let x: number;

            x = n1;
            x = n2;
            x = n3;
            x = n4;
            x = n5;
            x = myPay;
        });
        it('has string', () => {
            const s1 = 'This is a string';
            // tslint:disable-next-line: quotemark
            const s2 = "Double Quote";

            const s3 = 'She said "Ok"';
            // tslint:disable-next-line: quotemark
            const s4 = "The name is Flanner O'Connor";

            const s5 = 'It is Four O\'Clock';
        });

        it('template string', () => {
            // These are back-tick delimited

            const s1 = `Jeff`;
            const story = `Chapter 1.

            It was a dark and stormy night.

            The end.`;

            const age = 50;
            const s3 = `The name is ` + s1 + ` and the age is ` + age + `.`;
            const s4 = `The name is ${s1} and the age is ${age}.`;

            expect(s3).toEqual(s4);
        });
    });
    it('what is so bad about the var keyword???', () => {
        const age = 27;

        if (age >= 18) {
            // tslint:disable-next-line: no-var-keyword
            var message = 'Old Enough';
        }

        expect(message).toBe('Old Enough');
    });
    describe('arrays', () => {
        it('has a literal syntax', () => {
            const friends = ['amy', 'david', 'jessika'];

            expect(friends[1]).toBe('david');

            friends[0] = 'sam';
            expect(friends[0]).toBe('sam');

            // friends[2] = 99; // NO! This is an array of strings!

            friends[999] = 'Gaia';

            expect(friends[999]).toBe('Gaia');
        });
        it('more on declaring them', () => {
            let favNum: number[]; // an array of numbers.

            let favNum2: Array<number>;

            let stuff: (number | string)[];

            let stuff2: Array<number | string>;

        });

        describe('solving problems with tuples', () => {
            it('first the problem, without a tuple', () => {
                function formatName(first: string, last: string): { fullName: string, numberOfLetters: number } {
                    const result = `${last}, ${first}`;
                    return {
                        fullName: result,
                        numberOfLetters: result.length
                    };
                }

                const formattingResponse = formatName('Han', 'Solo');

                expect(formattingResponse.fullName).toBe('Solo, Han');
                expect(formattingResponse.numberOfLetters).toBe(9);

                const { fullName: herName } = formatName('Kylo', 'Ren');
                expect(herName).toBe('Ren, Kylo');

                const movie = {
                    title: 'Jaws',
                    director: 'Spielberg',
                    yearReleased: 1977
                };
                const { title, director: by } = movie;
                expect(title).toBe('Jaws');
                expect(by).toBe('Spielberg');
            });
            it('doing it with a tuple', () => {
                function formatName(first: string, last: string): [string, number] {
                    const result = `${last}, ${first}`;
                    return [result, result.length];
                }

                const formattingResponse = formatName('Han', 'Solo');
                expect(formattingResponse[0]).toBe('Solo, Han');
                expect(formattingResponse[1]).toBe(9);

                const [name, letters] = formatName('Kylo', 'Ren');
                expect(name).toBe('Ren, Kylo');
                expect(letters).toBe(9);
            });

        });
        describe('Destructerint', () => {
            it('array destructering', () => {
                const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                const [first, second, , fourth] = someNumbers;

                expect(first).toBe(1);
                expect(second).toBe(2);
                expect(fourth).toBe(4);

                const [head, ...rest] = someNumbers;

                expect(first).toBe(1);
                expect(rest).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);

            });
            it('object destructering', () => {
                const person = {
                    firstName: 'Ben',
                    lastName: 'Solo',
                    job: 'Jedi trainee'
                };

                const { firstName, lastName: ln, ...rest } = person;
                expect(firstName).toBe('Ben');
                expect(ln).toBe('Solo');
                expect(rest).toEqual({ job: 'Jedi trainee' });
            });

            it('array spread operator', () => {
                const numbers = [1, 2, 3];
                const newNumbers = [0, ...numbers, 4];
                expect(newNumbers).toEqual([0, 1, 2, 3, 4]);
            });

            it('object spread operator', () => {
                const movie = { title: 'Star Wars', director: 'Lucas', yearReleased: 1978 };
                const movie2 = { ...movie, yearReleased: 1977 };

                expect(movie2).toEqual({ title: 'Star Wars', director: 'Lucas', yearReleased: 1977 });
            });
        });

        describe('object literals', () => {
            it('has them', () => {
                interface Person {
                    name: string;
                    department: string;
                    salary: number;
                    manager?: string;
                }

                const bob: Person = {
                    name: 'Bob Smith',
                    department: 'QA',
                    salary: 100_000,
                    manager: 'Mary'
                };

                const mary: Person = {
                    name: 'Mary Jones',
                    department: 'CEO',
                    salary: 80_000
                };

                function printEmployeeInfo(p: Person) {
                    let prelude = `Person ${p.name} works in the ${p.department} and makes ${p.salary}`;
                    if (p.manager) {
                        prelude += `and they are managed by ${p.manager}`;
                    } else {
                        prelude += ` and they have no manager`;
                    }
                    console.log(prelude);
                }

            });
            it('has duck typing', () => {
                interface MessageHavingThing { message: string; }
                function logMessage(thingy: MessageHavingThing) {

                    console.log('Got: ' + thingy.message);
                }

                logMessage({ message: 'Call Your Mom' });

                // logMessage();

                const book = {
                    title: 'Clean your garage',
                    message: 'A clean garage is a sign of a healthy mind'
                };

                logMessage(book);
            });
        });

    });
});
describe('truthy and falsey operators', () => {
    it('has truthy and falsey values', () => {
        expect('tacos').toBeTruthy();
        expect('').toBeFalsy();
        expect(0).toBeFalsy();
        expect(-1).toBeTruthy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
    });
});
