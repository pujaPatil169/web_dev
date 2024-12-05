// const express = require("express");

// const app = express();
// const path = require('path');
// const redditData = require('./data.json');
// app.use(express.static('public'));  //so i want it to be an absolute path based upon wherever this index js file is
// app.use(express.static(path.join(__dirname,'/public'))); // i could write it like this and now if i will run this index.js from anywhere it's not gonna give error  __direname --this taking absolute path to the index.js and then adding on public
// app.listen('3000', () => {
//     console.log('listening on port 3000')
// })

// app.set('view engine', 'ejs'); //set is used to tell express that we are using ejs and we don't need to require ejs in this file instead instead by installing ejs and setting the view engine to ejs ,express behind the scenes will automatically require the package called ejs 
// app.set('views',path.join(__dirname,'/views'))

// app.get('/', (req, res) => {
//     // res.send('hi');
//     res.render('home.ejs');  //actually it is not neccesary to addon .ejs extention   because we have already set view engine to ejs,we also don't need to write views/home because the default place it looks whenever we call res.render is inside of the directory  it assumes already exist called views

// })
// app.get('/r/:subreddit', (req, res) => {
//     const { subreddit } = req.params;//structuring subreddit
   
//     const data = redditData[subreddit];
//     if (data) {
//         res.render('subreddit', { ...data });
       
//  //so i could pass entire object data to my template and then in the template reference something like data.name,data.subscribers,data.description or what i  probably will refer to do is instead of just passing data itself as an object i'll actually spread it into the object that we pass in --  ...data --and what this will allow me to do is access individual properties like name subscribers,description rather than data.name,data.subscriber
//         //we are now passing information from the params from our path,what is matched here we passed that through to this templaate called subreddit we passed that through under the naem of subreddit and then here we are rendering it in the title and in an h1
//     } else //not neccesarily taking parameter from the path directly and just rendering it but taking that and then looking up information in the database,but takking that data,finding something in the database and then passing that data that we found to res.render for templaate and in templaaatee actually rendering a whole bunch of data
//     {
//         res.render('notfound',{subreddit})
//         }
// })

// app.get('/cats', (req, res) => {
//     const cats = [
//         'blue' ,'mony','mew','janet'  //just pretend that this is coming from database
//     ]
//     res.render('cats',{allCats:cats})
// })
// app.get('/rand', (req, res) => {
//     const num = Math.floor(Math.random() * 10 + 1);
//     res.render('random',{rand:num});
//     // res.render('random',{num:num});--it is just saying i want num to be num 
//     // res.render('random',{num});--it is shortcut way of writing above thisng
// })//generating num and then i can pass that through when i render my template,i can pass an second argument and it will be object,key value pairs,whatever num is it will available inside my template under the name rand so when that template will be render this is all executed/evaluated and turned into output html when thatt happens this object will be passed through to this template so basically i would have access to the variabel rand in the template
//what we saw here is that we can pass through information from our route in this case all the waaay to our template where i have access to that variable or anyother stuff
//inside of app.get or inside of any route instead of sending back a string you can send back a file a template and the method that we use for this is called render it renders a view and and sends the render html string to the client

//now what i am going to do is to tell my app to use ejs ,there is particular method on the app called app.set() and set accepts two arguments the key that we want to and the corresponding value or the property
//**imp--by default when we create a new express app  and we are using some view engine ,express is goig to assume that our views our templates exists in the directory called view,,,we can set a different directory there is actually with app.set,there is a property here called views and we can set that to be somethinf else but as you can see in docs the default is /views based upon the current working directory   */
//what happens with ejs is that when its time to render the template it takes our template and it;s going to and it's going to evaluate it in any places where it sees javascript,it will run the javascript and spit out html

//----one minor issue related to views directory--------------

//the default views directory that express is looking for is only going to work if i am running my application from within the same directory where my views folder is  so if i want it to work from different directorys if you want to be able to run the code from anywhere,you need to change the views directory 
//right now the views directory is set up to be process.currentWorkingDirectory
//process.cwd--gives the current directory i am working inside of and then it just appends slash views to that
//what you really want is you want the directory where your file is located ,index.js then /views
//there is a module built in to express called path and we are going to require it 
//there is a module we need to require called path ,path has a method on it called join

//app.set('views',path.join(__dirname,'/views'))
// __dirname--means directory name where the file index.js is located and i am joining that path full path to get there at that directory with slash views 
//all i have done is said instead of being the current working directory where i executed the fiel from where i was located when i ran index.js instead of using that i want you to use the directory name where index.js is located 
//path module comes built in with node it basically givees us methods that have to do with file and directory path 
//path.join is going to take multiple path segments and join them together and normalise them into a single path at the end so we don't have to deal with string ourselves 
//__dirname--refers to the directory name where this file is located into which we are writing __dirname file may have whatever name,/views can be of whatever name as well



 //so i could pass entire object data to my template and then in the template reference something like data.name,data.subscribers,data.description or what i  probably will refer to do is instead of just passing data itself as an object i'll actually spread it into the object that we pass in --  ...data --and what this will allow me to do is access individual properties like name subscribers,description rather than data.name,data.subscriber
        //we are now passing information from the params from our path,what is matched here we passed that through to this templaate called subreddit we passed that through under the naem of subreddit and then here we are rendering it in the title and in an h1
    // } else //not neccesarily taking parameter from the path directly and just rendering it but taking that and then looking up information in the database,but takking that data,finding something in the database and then passing that data that we found to res.render for templaate and in templaaatee actually rendering a whole bunch of data
    // {
        // res.render('notfound',{subreddit})
// }
        



const express = require("express");
const path = require('path');
const redditData = require('./data.json');  // Ensure this path is correct
const { title } = require("process");

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('listening on port 3000');
});

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');  // .ejs extension is optional
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const dataa = redditData[subreddit];

    if (dataa) {
        res.render('subreddit', { ...dataa });
    } else {
        res.render('notfound', { subreddit });
    }
});

app.get('/cats', (req, res) => {
    const cats = ['blue', 'mony', 'mew', 'janet'];
    res.render('cats', { allCats: cats });
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10 + 1);
    res.render('random', { rand: num,title:random });
});
