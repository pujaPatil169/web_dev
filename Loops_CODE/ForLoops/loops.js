// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for(let i=1;i<people.length;i++){
//     console.log(people[i].toUpperCase());
// }


//this code down here gives error
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
// let firstNames=fullNames.map(function(name){
//   return  `${this.first}`;
// })
//explaination of error
/*The issue with the provided code is that the context (this) inside the map() 
function is not correctly referencing the object in the fullNames array.
When using this inside the callback function passed to map(), it refers to the global
 object, which doesn't have a first property. To fix this, you can directly access
  the first property of each object using the name parameter of the callback function.
   The corrected code correctly extracts the first names from the fullNames array 
   using the map() method.*/

///corrected code

// SOLUTION #1:

const firstNames = fullNames.map(function (name) {
  return name.first;
});
// SOLUTION #2:

// // Arrow function syntax approach:
// const firstNames = fullNames.map(name => name.first);


// //arrow function
// const greet = (str) => {
//     console.log(`Hey ${str}!`);
// };
// const rolldie = () => {
//     return Math.floor(math.random() * 6) + 1;
    
// }
    //implicit return replace curly braces with parenthesi no need to write return keyword
// const rolldieee = () => (
//      Math.floor(math.random() * 6) + 1;  )


const new= movies.map(function (movie) {
    return movie.title;
})