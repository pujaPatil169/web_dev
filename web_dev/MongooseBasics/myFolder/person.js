// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopApp')
// .then(()=>{
//     console.log('connection open');
// })
// .catch((err)=>{
//     console.log('oh no error');
//     console.log(err);
// })

// const personSchema= new mongoose.Schema({
//     first:String,
//     last:String
// })

// personSchema.virtual('fullName').get(function(){
//        return `${this.first} ${this.last}`
// })

//there is .get similarly there is .set  or we can say we can define getter and setter 
// We can define a setter and a getter.

// We're defining a getter.

// So when I get full name, when I call dot full name,

// I want to retrieve some value

// that is first and last name combined

// with a space in between.
// the idea is that this vertual property(fullName) exists

// not in the database at all,

// but only on the Mongoose side of things in JavaScript.

// const Person = mongoose.model('Person',personSchema);

// Ensure this code block is not duplicated
const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
    console.log('connection open');
})
.catch((err) => {
    console.log('oh no error');
    console.log(err);
});

// Define the person schema
const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

// Define a virtual property for full name
personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`;
});

// Define the Person model
const Person = mongoose.model('Person', personSchema);

// Create an instance of Person
const rani = new Person({ first: 'rani', last: 'chao' });
console.log(rani.fullName); // This should output 'tammy chao'
