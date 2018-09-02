// Object Destructuring

// This is an ES6 concept, not react or redux.
// Below is an example of Object Destructuring.
// Lecture 88

console.log('************** Object Destructuring *****************');

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'San Diego',
        temp: 92
    }
};

console.log(`${person.name} is ${person.age}.`);

// const name = person.name;
// const age = person.age;
const {name, age} = person; // this does the same thing

console.log(`${name} is ${age}.`);

// Lots of use of 'location'
if (person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}.`);
}

// a more readable way:
// const {city, temp} = person.location; // deconstruct it

// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`);
// }

// a more readable way with renaming:
var {city, temp: temperature} = person.location; // deconstruct it

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

// Set up default values
// Will use the default value only if it is missing, if not
// missing, it will use the value in the object.
// the example below shows renaming and default value at the same time:
//contst { name: firstName = 'Anonymous', age} = person;

// Challenge:

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); // Penguin, default value can be Self-Published.
{}

// Array Destructuring

console.log('************** Array Destructuring *****************');

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// Clunky way without destructuring
console.log(`You are in ${address[1]} ${address[2]}.`);


var [street, city, state, zip] = address; // matching stuff up by position

// Note there is no re-naming syntax with arrays - you just don't need it.

console.log(`You are in ${city} ${state}.`);

// You can use default values:
const address2 = [];

const [, , theState = 'New York'] = address2;

console.log('The state is ' + theState);

// Challenge

console.log('************** Array Destructuring Challenge *****************');

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// grab first and third items using array destructuring
console.log('A medium Coffee (hot) costs $2.50');

const [itemName, , mediumPrice] = item;

console.log('A medium ' + itemName + ' costs ' + mediumPrice);

// or in this new syntax:

console.log(`A medium ${itemName} costs ${mediumPrice}`);
