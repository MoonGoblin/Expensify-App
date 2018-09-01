// This is an ES6 concept, not react or redux.
// Below is an example of Object Destructuring.
// Lecture 88

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
const {city, temp: temperature} = person.location; // deconstruct it

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