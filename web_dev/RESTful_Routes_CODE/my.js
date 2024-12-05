// GET VS. POST
// GET
// POST
// - Used to retrieve information
// - Data is sent via query string
// - Information is plainly visible in the URL!
// - Limited amount of data can be sent
// - Used to post data to the server
// - Used to write/create/update
// - Data is sent via request body, not a query string!
// - Can send any sort of data (JSON!)

//when we are talking about html forms we saw that we can set the method on the form to be get or post  and that has an impact on how the data is submitted on the resulting htttp request
//post---request to post or send information,conventionally it is used to create things where you can send a bunch of data like signing up ,registering your account or sending a new comment that will be added to your blog ,uploading a new photo or just posting a new blog
//get ---get request to search, retrieve or get information,retrieving page ,viewing things basically there is no impact on backend beacause of it  there shouldn't be anything being created ,deleted or updated,when we submit a get request if we have a data that is being sent alongside or with the request it's included in the query string that means we can see the data in the url,the get request is bookmarkable we see the whole request in the url with the query with the data in there and urls are limited i think it's 2048 character so the ammount of daata that you can send in a get request is limited
//we use get requset all the time anytime we are requesting the resourse ,the page like i want the home page i want to see the form  give me the about page ,show me the top post on reddit ,we are not actually impacting anything behind the scenes,we are not sending data that is going to be used to create something  or to edit something or delete something  if we are sending a data in the get request usually it's search term or filters or sort  by or query
//we use post request if we have information that is important that we need to send AS part of the request  and it won't be included in the query string  instead it's actually sent in the request body so it's not sent via query string  this means we can send more data as we are not limited by the lenth of the url and we can send data of any type including json  vs with query string everything will treated as a text
//we can send data in different format in the request body of post requst
//query data is automatically parsed and included on req.query

// Supporting Multiple Data Formats:

// The body parser can handle different data formats, including JSON, URL-encoded data, and more, depending on the middleware used [1, 3].
// Middleware Usage:

// The body parser middleware needs to be defined before the route handlers in your Express application to ensure the data is parsed before it’s accessed.Body parsing middleware in Express.js is used to handle and process data sent in the body of HTTP requests before it reaches your request handlers. Here’s what they do:

// Parsing JSON Data:

// Middleware like express.json() parses incoming requests with JSON payloads and makes the data available in req.body.

// The req.body object in Express.js is used to store data submitted in the body of an HTTP request. Here's how it works:

// Definition: req.body contains key-value pairs of data sent in the request body. By default, it is undefined until you use middleware to parse the request body [2].

// Usage: When a client sends data to the server, such as through a form submission or a JSON payload, this data is captured in req.body. For example, if a user submits a form with their email and password, this information is stored in req.body and sent to the server [4].

// Middleware: To populate req.body, middleware such as express.json() and express.urlencoded() is used. These middleware functions parse incoming requests with JSON payloads and URL-encoded data, respectively, and make the data available under req.body [5].

// Example:

// javascript
// Copy code
// const express = require('express');
// const app = express();

// // Middleware to parse JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/submit', (req, res) => {
//   console.log(req.body); // { email: 'user@example.com', password: '12345' }
//   res.send('Data received');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
// Importance: req.body is essential for handling data input from the client side, enabling servers to process and respond to user inputs effectively [1].


// When handling form submissions in Express.js, the choice of middleware depends on the type of data being submitted:

// Text Data:

// If the form contains text data, such as input fields for plain text, numbers, or simple data types, you should use express.urlencoded() middleware.

// JSON Parsing: When a request with a JSON payload is received, express.json() reads and parses the JSON data.
// Available in req.body: The parsed JSON data is then assigned to req.body, making it easily accessible within your request handlers.


// The express.json() middleware in Express.js is designed to handle incoming requests with JSON payloads. When we say it "reads and parses the JSON data," it means:

// Reading the Request Body: When a request is sent to an Express server with a JSON payload (such as in the body of a POST request), express.json() middleware reads this data from the request.

// Parsing the JSON: After reading the data, express.json() parses the JSON string into a JavaScript object. This transformation is necessary because JavaScript cannot directly interact with raw JSON strings; it works with objects.

// Making Data Available in req.body: Once the JSON data is parsed, it is assigned to the req.body property. This allows your route handlers to easily access and manipulate the data within the request.



// n this example, when a POST request with a JSON body is sent to /data, the express.json() middleware parses the JSON string into an object and assigns it to req.body, allowing the handler to log and respond with the data.

// The express.urlencoded() middleware in Express.js is used to parse incoming request bodies that are encoded in URL-encoded format. When a form is submitted with application/x-www-form-urlencoded as the Content-Type in the HTTP request header, this middleware parses the data and makes it available in req.body.

// Here's how it works:

// Purpose: Parses URL-encoded data from forms submitted via POST requests.
// Usage: It's typically used for handling form submissions where the form data is sent as URL-encoded key-value pairs.
// Functionality: Converts the URL-encoded data into a JavaScript object, making it accessible through req.body in route handlers.
// HTML or Binary Data:

// If the submitted data includes HTML content or binary files (like images or documents), you should use multer middleware.


//---------------------rest-------------------

//rest stands for representational state transfer

// REPRESENTATIONAL
// STATE TRANSFER
// REST is an "architectural style or paradimn for distributed
// hypermedia systems". Yikes.
// It's basically a set of guidelines for how a client + server
// should communicate and perform CRUD operations on
// a given resource

//it is some set of guidelines ,some ideas,principles for how clients and server should communicate with one another 
//rest is this guidelines,priciples or rules ,something that is called or considered restfull system complies with this rules of rest 
//the reason why we care about it is that we are going to create api's  and create routes that will consider restfull 
//rest is a set of principle we follow when architechting an web application 

//resource is just a entity that we are going to expose or provide acces to via http
//rest is the set of rules that we follow when architechting an web application it's a set of rules for client server communnication ,having a client server    architecture where our client and server are seperated and we could swap in a different client for ex i could maake request from browser or postman
//the idea of statelessness ,where we have talked about this concept of http as A stateless protocol  every request is sort of on it's own in a vacuume it doesn't have access to you know the request that came before other things 
//uniform interface---every restful system has a uniform interface which most of the time consists of having some sort of consistent url pattern matched with different http verbs 
//combining some url some base url with different methods to expose full crud operations over http 
//so we are going to create our own api's our own appplication lets say for ex we are working with tweets or comments where somebody could create a new comment ,or delete or update comment or view a single comment via http crud(create,read,update,delete or destroy) operation we have a lot of ways we could structure those routes ,but we are going to follow the restful pattern 
//gist on github--gist are just like fiiles anybody can share on github ,github has an api that exposes crud functionality for gist so if i want to view gist this is the end point that i will request-- get/gists  this will give me all of the gist for some user you have to be authenticated with this api the thing the resource we are working with here is gist ,get /gist or post /gist ---this are some of  the endpoints exposed by github to perform crud operation ,the 

//the http verb patch --is used to update something
//  get /gist{gist_id} --gives comment
// patch /gist{gist_id} ----updates the comment
//delete /gist{gist_id} ---deletees the comment
//get /gist --gives listt of all gist 
//post /gist --creates new comment

//the same endpoint /gist{gist_id} get to this endpoint get's the detail on one gist and patch to this same endpoint updates that gist  and we can selete delete verb with the same endpoint and it will delete that gist
//so we have this resource gistt that has been exposed to us via the api of github where i can send http request from anywhere ,assuming i am authenticated it doen't matter if i am in the browser or postman i can send request from anywhere,i can view,delete,update,create gist i have crud capabilities via http and it;s all following thsi pattern of having some resource name and then matching that path with an http verb 
//rest itself does not refer to a particular pattern where you have to have gist/something --http verb path/some stadardised format for the url and that exposes crud functionality for that particular resource

///---------let's actually implement our own restfull server architecture lets pick a resource we don't have databaases yet so we are going to create an array that will pretend as our database and our resource ,so the thing that we are trying to make  crud happen for we are trying to expose crud functionality for is a comment 
//some of our basic restfull routes 
// GET /allcomment
// GET /showmellcomment 
// GET /all
//this our basic crud functionality blueprint 
//post /newcomment
//post /createcomment 
//we are going to follow the pattern and this pattern is not necesarilly the same thing as rest it is rest compliance  but what i am showing you here is not the one way of implementing restfull api 
//we are going to set up our resource and our path is going to be named our resource but plurarised /comments and that will be our base for everything we do then we are going to have different http verbs 
//but usually when we work in a database we will have some form of unique identifier created for us 
//there are many different ways of structuring your application in a way that is considered restfull
//we are going to make restfull application where we are serving html and user can  interact with forms to create a new comment or to edit  a comment 


//but this stuff that i am showing you here also applies to json api's and eventually we  will create our own json apis basically  following the same format the only difference is that here we are going to render some forms firsts so that you can create something using form rather than just sending data through axios or through postman 
//index.ejs for a given resource is to just render multiple of that resource 

//we are done with the read part of our crud in the index.js file now we are going to create a commment 
//for the part of creating comment we need to set two routes ,one route for rendering or say serving the form and one route for submitting that form using get request we will serve the form using get request 
//name attribute this what the data will be sent under when that post request is  sent off

//form resubmittion if i send the post request and if i refresh that page then browser prompts confirm form resubmittion this is browser's way of telling me hey youre going to resubmit that form again and that was a postt request so youre going to send another post request it will be exact same request with the same data in the body over and over again 
//instead of rendering something directly from our post route we (for ex you have rendred it worked from post route) are going to redirect a user somewhere 

//array method find ,commments.find()
//uuid comes with a whole bunch of different pieses different versions that do different things and one that we want is v4
//whole point of the verb is to just indicate a little about what the request is supposed to the desired action and there are two that have to do with the updating something put and patch verb(http) they both have to do with updating something but a
// put request is going to completly update an entire thing for ex. if we had a comment a put request to update that comment would just take whatever payload  was included in the request and that will be new version of the comment ,we are just taking something in and basically replacing a representation 
//vs a patch request is used to partially modified something we could use the post reuest for this instead
//put and patch --they have to do with changing or editing something that already exist,patch--the payload only contains that patch the new comment text in this case vs with put--is that the payload the body include a whole comment so not just the text but also id ,username and we just replace what was already there in our database or in our fake databaase with the new payload nobody enforces this two of this we could still just used a post request for this
//in web development this days particulary in javascript there is an emphasis on something called immutability basically not mutating objecg 
//***we can not send a patch ,put or delete request we can't do anything except a get and post from a form in our browser so we use method override to solve this issue,   
// method override--let you use http verbs like put and delete in places where the client does not suppport it like a browser form,it has a couple of different ways that we can use it and the option we are going to go with is using the query value so one option is to send a http heaeder in the request that specifies this is actually supposed to be delet even though it will be a post request in the header we can say actually please treate this as delete or as a patch or put and then inside of epress it should match as delete or put or patch route */
//methodOverride is just like a middleware ,delete just like a patch request we can fake it using method override  or we could use some javascript from client we could use click listener when you click on certain button we can  send a delete request   using something like axios or fetch api so we can do it with jaavascript 
//app.delete()--we waant to delete that entire comment from the comment array 
//basically anything that is not a get rout youre going to want to redirect from 
//html forms in our browser can only send get or post request they cant send the put,patch or delete request 


//we need to call  app.use(method-overrrride) we execute that it is a middlware and then we provide a string and the option they go with is _method  we can name this whatever  and whatever that is set to(_method) in our form action if it's delete,put or patch is what the express will actually treat the http verb as so even though it's a post request from the form express is going to treat is as a delete ,put or patch request whatever that we have mention at_method 

// Boot into GRUB Menu:

// Restart your computer.
// Press and hold the ESC or Shift key to bring up the GRUB menu.
// Edit GRUB Entry:

// Highlight the reco4nery mode option but don't press Enter.
// Press e to edit the selected boot entry.
// Find the line that starts with linux and ends with ro quiet splash.
// Replace ro with rw and add init=/bin/bash at the end of this line.
// Boot with Modified Entry:

// Press Ctrl+X or F10 to boot using the modified entry. This will give you a root shell without needing a password.
// Reset the Root Password:

// Once you have the root shell, use the following command to set a new root password:
// bash
// Copy code
// passwd
// Follow the prompts to enter and confirm a new root password.
// Remount the Filesystem:

// To ensure the changes are saved, remount the filesystem:
// bash
// Copy code
// mount -o remount,rw /
// Reboot:

// After setting the new root password, reboot your system:
// bash
// Copy code
// exec /sbin/init
