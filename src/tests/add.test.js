const add = (a, b) => a + b;
// const add = (a, b) => a + b + 1;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;


test('should add two numbers', () => {
    const result = add(3, 4);

    // This is essentially an assertion. Jest also has an assertion library. See below.
    // if ( result !== 7) {
    //     throw new Error('You added 4 and 3. The result was ' + result + '. Expcted 7');
    // }

    expect(result).toBe(7);
});


test ('should generate greeting from name', () => {
    const result = generateGreeting('TheName');

    expect(result).toBe('Hello TheName!');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});