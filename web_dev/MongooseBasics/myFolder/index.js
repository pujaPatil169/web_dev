// ----connecting this javascript file using mongoose to the mongo database

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>{
    console.log('connection open ');
})
.catch((err)=>{
    console.log('oh no error');
    console.log(err);
})

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});

//now what i do is take this shema and tell mongoose i want to make a model using that schema 


const Movie = mongoose.model('Movie',movieSchema);

// const amadeous = new Movie({title:'amadeous',year:1995,score:8,rating:'R'});
// module.exports ={amadeous};

// amadeous.save()
// .then(()=>{
//     console.log('movie saved');
// })
// .catch((err)=>{
//     console.log('movie not saved');
//     console.log(err);
// });

Movie.insertMany([
        { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }])
        .then((data)=>{
            console.log('movies saved');
            console.log(data);
        })
//if we are calling insertmany then we dont need to use .save() to save it to database it will be already saved to database,but insertmany will return a promise 

//just writing the code here doesn't do anything in database we first need to save it then it will be added to the database
//in above line Movie--we pass in the name of our model which is Movie--this should be singular and first letter should be capitalise and mongoose is gonna take that and it will create a collection for us called - movies and it will be plural and it will lowercasee it ,so the collection is movies and the model name is Movie,movies--it actually make collection for us in mongo database in this case movieApp and second thing that we pass in is our schema that we made in upper line 
//Movie--model class,now i have model class called movie


//.connnect meythod returns a promise thaats why we are using .then aand .catch
//2--movieApp is a name of database if it does not exist it will make it for you and will connect it and if it does exist it will connect it 
//whole point of using mongoose is to have an easier way to interact with the mongo database from javascript file or javascript land
//models---are classes ,javascript classes that we make with the assistance of mongoose that represent information in a mongo database or specifically they represent information in some collection 
//first open node repl and then .load index.js and then run this line --Movie.find({})--this gives all the movies inside Movie class/model/collection --it just finds all of them 
//Movie.find({})--this returns a query object which is a thenable object 
//Movie.findOne({})--even if this query matches all buy due to findOne this will give you only the first match
//.exec() method gives us full fledged promise a real promise and not thenable object 
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
//   .then(() => {
//     console.log('connection open');
//   })
//   .catch((err) => {
//     console.log('oh no error');
//     console.log(err);
//   });

// const movieSchema = new mongoose.Schema({
//   title: String,
//   year: Number,
//   score: Number,
//   rating: String
// });

// const Movie = mongoose.model('Movie', movieSchema);

// // Declare amadeous in the global scope
// const amadeous = new Movie({ title: 'amadeous', year: 1995, score: 8, rating: 'R' });

// // Save amadeous to the database and log it to ensure it's defined
// amadeous.save()
//   .then((doc) => {
//     console.log('Movie saved:', doc);
//   })
//   .catch((err) => {
//     console.log('Error saving movie:', err);
//   });
