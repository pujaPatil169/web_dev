const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

// const {v4:uuidv4} =require('uuid')--this is copied from the docs of uuid,this is destructuring here where we can provide  a new name so that we can rename somethinf instead of just getting v4 out of uuid means instead of writing just {v4} = require('uuid') we can name it whatever we want documentation have given it a name uuidv4 - {v4:uuidv4}=require('uuid') but colt steel have given it a name just uuid i.e {v4:uuid}=require('uuid')

// uuid();--this function will generate an unique id's whenever we will call it
app.listen('3000', () => {
    console.log('listening on port 3000');
})
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//we are using _method for query string because it won't be conflicting
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'
))
let comments = [
    {
        // id:1
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        //  id:2,
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        // id:3,
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        // id:4,
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]


// app.use(express.urlencoded({ extended: true }))
// in above line of code in app.use we are telling express explicitly to use express.urlencoded middleware  that is going to parse the request body into javascipt object,this middleware will convert request body containing urlencodeed data into the js object
// app.use(express.json())
app.get('/comments', (req, res) => {
    res.render('index', { comments });
})
app.get('/comments/new', (req, res) => {
    res.render('new');
})
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    // res.send('it worked');
    res.redirect('/comments')  //whatt it does is after hitting post requst i.e after submitting the form it is just going to send back to /comments
})
//instead of rendering something directly from our post route we (for ex you have rendred it worked from post route) are going to redirect a user somewhere 
//res.redirect(url) is going to rederict to some url that we specify  redirect status codes starts with 3 ,the default status code that express will send back when i do res.redirect is a 3O2,WHAT happens when our browser gets 3O2 status code is that it actually follows up and make a second request based upon the location that was sent back from the initial response 
//what i am going to do is just redirect the user back to our index where all the comments are

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const comment = comments.find(c => c.id == id);
    res.render('show', { comment })
})

/*thsi is gpt code below one 
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    console.log('Requested ID:', id);
    const comment = comments.find(c => c.id == id);
    console.log('Found Comment:', comment);
    if (!comment) {
        return res.status(404).send('Comment not found');
    }
    res.render('show', { comment });
});*/

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newcommentText = req.body.comment;
    foundComment.comment = newcommentText;
    res.redirect('/comments')
})
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comments = comments.filter(c => c.id != id);
    res.redirect('/comments');
    
})
//    const comments =comments.filter()--for each comment in comments that is not equal to the id in the path add it into the filtered array 
//comments.filter()--returns a new array it does not    update the comments array but in above code we are updating comments array by assigning it a new filtered array 
//then how are we going to remove that foundComment from comments ,we will use array method filter --it takes callback and our callback function should return true or false its a boolean function and for whichever element the callback returns true for those elements will be added to the filtered array so i want every elment that does not have this id ,
//so filter everything out into a new array ,it;s generally a good practice to not mutate an array  instead what we do is make a copy and make a change to that copy 
//    comments.find(c => c.id === parseInt(id)); This line of code searches through an array of comments to find the first comment object that has an id property matching the id variable. It assigns this found comment object to the comment constant.
app.get('/comments/:id/edit',(req,res)=>{
    const {id}=req.params;
    const comment= comments.find(c=>c.id==id);
    res.render('edit',{comment});
})


app.get('/tacos', (req, res) => {
    res.send('get /tacos response');
})

app.post('/tacos', (req, res) => {
    // console.log(req.body);
    const { meat, qty } = req.body;
    res.send(`ok,here are your ${qty} ${meat} tacos`)
    // res.send('post request at /tacos');
})

//now we have a very basic post route now let's extract the data from the request body adn do something with it so whether the sent through a form or through a postman we will have data potentially in our post request body and in express there is an easy way to acces that data just like if we have a query string data it's automatically parsed and included on req.query remember this is an object(req) made for us depending upon the incoming http request 
//in the casse of post request ,this request  object will also include a propery called req.body --contains key value pairs of data submitted in the request body  by default it is undefined and it is populated when you use body parsing middlware such as express.json or express.urlencoded so this boils down to the fact that we can send data in different formats
//following ex shows how to use body parsing middleware to populate the req.body 
//the incoming data into the request body is parsed and converted into the javascript object and added into the req.body --it contains data in the form of javascript object ,middleware converts data of different formats into the js objects and adds it into the req.body ,different data formats needs different middlewares to parse them into js object and add it to the req.body 
//we need to tell express explicitly about which middleware we are using  by running --app.use(express.json()) or app.use(express.urlencoded({extended:true}))

//app.use --is used to run ttthe code whenever there is request send to server,i.e whenever any request hits the server 
// Parsing the JSON: After reading the data, express.json() parses the JSON string into a JavaScript object. This transformation is necessary because JavaScript cannot directly interact with raw JSON strings; it works with objects.

// Supporting Multiple Data Formats:

// The body parser can handle different data formats, including JSON, URL-encoded data, and more, depending on the middleware used [1, 3].
// Middleware Usage:

//  *****The body parser middleware needs to be defined before the route handlers in your Express application to ensure the data is parsed before it’s accessed.

