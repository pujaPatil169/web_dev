const express = require('express');
const app = express();
// console.dir(app);

// app.use((req,res) => {
//     console.log('we got a new request!!');
    // console.dir(req);
    // res.send('hello!,we got youre requesst ,this is a response !');
    // res.send({ color: 'red' })   //--we need to turn this off anytime we send something back,anytime we call res.send we are done for that one request ,for below routes to work we need to turn off this res.send inside app.use because it matches for every single request we can have only one res.send per request
    //we can't have an http request that have more than one response
    // res.send('<h1>this is my webpage!</h1>')  //if you will run the request in your browser this h1 tag html line will actually be rendered on webpage by browser
// })//the way that this method app.use() work is that any time we have incoming request ,it doesn't matter if it's get or post or any other kind of request this callback inside app.use() runs anytime we have an incoming request and it also doesn't matter where this request is going to ,this callback will run as long there is a request hitting the server
//an http request is not a javascript object it;s a text information it's not particular to any programming language but express takes that data/text info from http requst and it parses it and it turns it into a object that it passes it in this case to our callbacks for app.use 



//defining routes
//below we are routing some incoming requests to some outgoing response ,we are matching a path that youre requesting after localhost:3000
//now this are only matching get requests,which is the only type of request we can send by hitting enter in the browser 
//this routes below are direct match routes 

app.get('/', (req,res) => {
    res.send('welcome to home page');
})//req and res objects are automatically passed in the route handling callback or in app.use()
//callback  , express parses the incoming request objects and converts it into javascript object and passed it automatically in the callback
app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params);
    const { subreddit,id } = req.params;
    res.send(`<h1> viewing the post id:${id} on the ${subreddit} subreddit</h1>`);
    // res.send('this is subreddit ');       //this will match the actual string subreddit but this will also match anything that follows this pattern,: it represend that subreddit is the path variable and it can be anything ,we are not enforcing what that subreddit has to be,we are not checking if it's a valid english word or anything like that,it's literally a pattern that we are matching
})
app.get('/cats', (req, res) => {
    res.send('Meow!');  //we use this to respond ,to send back content in this case a very simple string 'meow' that will be turned into html
                        //this is an ex of direct match route this code will only run if incoming request is exactly asking for /dogs and nothing else 
})
app.get('/dogs', (req,res) => {
    res.send('Woof');
})

//query string
//express automatically parses the query string and turns it into an javascript object and adds it into the req object under the property name query,express handles multiple key value pairs
app.get('/search', (req, res) => {
    console.log(req.query);
    const { q, sort } = req.query;//here we can have acces to  multiple key value pairs of query string
    if (!q) {
        res.send('nothing found if nothing searched!!1o')
    }
    res.send(`<h1>search results for: ${q} and sorted in ${sort} manner </h1> `);
})

app.get('*', (req, res) => {
    res.send('i dont know that path')       //this '*' means everythisn it just matches everything that we write apter localhost:3000 -including this base url as well it doesnt matter what path is it matches everything as long as it is get request (for this case we have written it with get that's why but it won't work for post or other request except get request)
})
//*very imp---routes are matchd in order and the above route with('*') it just matches everything so we must need to keep it after all the other routes */
//post request

app.post('/cats', (req,res) => {
    res.send('this is different that get request,its an post request!')
})
//as soosn as we send something back we are done with that requsest 

app.listen(3000, () => {
    console.log('listenig on port 3000!')
});  //--3000 is the port,listen is the method that comes with our app  it needs to have a port that it;s going to listen on
//this callback will run when the app has started listening(means server is started listening on that port ) or when it's(web server) actually running on that port
//it is sitting there listeningg for any incoming requests 

//ctr+c ---to get out of the process where server is running ,basically ctr+c to stop server from running 
//port---they are like addreses on your machine 
//so instead of having all trafiic from email and file transfer and http requests and whole bunch of other stuff so instead of having it all go through one port on your machine there are different address that have unique numbers that we can use to identify them  and refer to them 
//if we have more than one server that we are running like if you have more than one express apps on your machine up and running ,you would need to put it on a different port 
//we can have different servers on different ports and they get sort of their own entrance to our machine ,thei own tunnel so we can have seperate traffic 
//we need to listen on a port 

//method app.listen starts the server ---very imp point .

//thire are two really important objects that express make for us --request and response object 
//on every incoming requesst we have acces to two different parameters in this function app.use((req,res)=>{}) that are automatically passed in  ,the first one is an object(req) that represents the request the incoming request and second one (res) is the object representing the outgoing response so you can name them whatever you want req/res or request/response you can name them whatever you want ,this are objects made by express and passed in to this callback 
//this method res.send()--is versatile
//we can also respond with string that contains html for ex look above coded

//req----req(request) is an object created by express based uppon the incoming http request,res--(response)is an object created by express,response have a bunch of methods on it and also req also haave bunch of methods on it 


// Request Body in Express:
//
// For POST requests, the data sent in the body is accessed via req.body.
// By default, req.body is undefined until we use body-parsing middleware.
// Body-Parsing Middleware:
//
// To parse incoming request bodies, we need to use middleware:
// express.urlencoded(): Parses URL-encoded data (like form submissions).
// express.json(): Parses JSON data.
// These middlewares must be explicitly included in the Express app using app.use().
// Response Handling:
// Once data is parsed, you can destructure it from req.body and use it to generate responses.
