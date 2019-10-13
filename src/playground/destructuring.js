// const person = {
//   // name: 'Harris',
//   age: 25,
//   location: {
//     city: 'Melbourne',
//     temp: 20
//   }
// };

// const { name = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);
// console.log(`It's ${temperature} in ${city}`);


// const book = {
//   title: 'ego is the enemy',
//   author: 'ryan holiday',
//   publisher: {
//     name: 'penguin'
//   }
// };

// const {name: publisherName = 'self published'} = book.publisher;

// console.log(publisherName);


// const address = [
//   '112 Great Ocean Rd',
//   'Melbourne',
//   '3000'
// ];

// const [, city, postcode] = address;

// console.log(address);
// console.log(`You are in ${city}, ${postcode}`);

const item = [
  'coffee',
  '$1',
  '$2.3',
  '$5'
];

const [itemname,,mcost] = item;

console.log(`A medium ${itemname} costs ${mcost}`);