//express is a framework for web development for creating servers using node 
//with express all of sudden we are integrating code that other people have written a tool that have lot of new methods
//express is specifically web development framwork it helps make web applications and api's

// EXPRESS HELPS US...
// Start up a server to listen for requests
// Parse incoming requests--http request are just they are text information  they are not javascript object or anything so express helps with that it will turn text info into request or request into objects(js objects)
// Match those requests to particular routes
// Craft our http response and associated content
//it helps match those requests so that we can write code that only runs when youre  requesting slash/something
//  we could have different code, different function that are runninggg depending upon what request is requesting 
//it helps us set the status code the content that we are responding with headers
//axios--http request library we include in our code

//--------------library vs framework-------------------

//in general libraris and frameworks are just code other people have written for us,they are code that we typically download using the tool like npm or we might include as a script if we are doing client side javascript for ex bootstrap that we included as a script it's a library that we include as a single script or axios that is http request library we include in our code
//library is something that you can integrate in your code at any point they typically gives methods some functionality that yoou decide when to incorporate it and how to use it and you decide when to use that and put that anywhere in your code you are incharge you control it 
//framework provides actuall structure or framework for building application and youre merely participating in it  youre writing youre according to how the framework works and youre following the rule,just like everything else it is a code someone else has written for us and we need to install it with tools like npm

// LIBRARIES VS.
// FRAMEWORKS
// LIBRARy
// When you use a library, you are in charge!
// You control the flow of the application
// code, and you decide when to use the
// library.
// FRAMEWORKS
// With frameworks, that control is inverted.
// The framework is in charge, and you are
// merely a participant! The framework tells
// you where to plug in the code.



// WHAT IS EXPRESS?
// OUR FIRST FRAMEWORK!
// Express is a "fast, unopinionated, minimalist web
// framework for Node.js:" It helps us build web apps!
// It's just an NPM package which comes with a bunch of
// methods and optional plugins that we can use to build
// web applications and API's

//at it;s core express is just a package that we install using npm and it gives different methods ,addons ,plugins to build web applications and make our own api[]


//we have client for ex google chrome browser searching for chickens ,chickens is our query ,i.e google chrome is sending request(url) to that server and and the server's jobs is to take that query ,url,request and  figure what to respond with and then build that response and send it back so express is going to help us with this piece of server 
//express is going to help us listening to the incoming requessts figuring out what they are asking for, what are they searching for?,what is the q that they  are looking for,what's the form data that they are submitting ,what's the username and password are those valid often do things like check information against the database or save info to database ,building the responsse and send that back to the client so express helps do that

//the next thing that we should is try sending a request to our new server we have set up but where do we send a request to what url do i request  for ex i am requesting google i go to www.google.com,but what url do i send a request to here well we don't use any fancy url there is no domain name involved this is only served locally on my machine so i can send requst to this server on my machine from chrome,safari,firefox or postman but other people on different machines can't send requist to this server on my machine
//if i had this server running right now and youre on a different network somewhre else on different machine you would not be able to request this  it's running locally on my computer and we need to acknowledge the port number in this case it's 3000 and we need to go to particular place called a local host
//so local host is just reference to your basically this machine on which server is running
//an http request is not a javascript object it;s a text information it's not particular to any programming language but express takes that data/text info from http requst and it parses it and it turns it into a object that it passes it in this case to our callbacks for app.use 
//res.send() ---sends the http response 
//res.send()---accepts different type of data so we can respond with a string and it will just respond with plain text ,we could also respond with a javascript object and it will turn that into json as part of our response 
//how we can respond with specific responses depending on the incoming request and the resource that's being requested 
// res.send([body])    
// Sends the HTTP response.

// The body parameter can be a Buffer object, a String, an object, Boolean, or an Array. For example:

// res.send(Buffer.from('whoop'))
// res.send({ some: 'json' })
// res.send('<p>some html</p>')
// res.status(404).send('Sorry, we cannot find that!')
// res.status(500).send({ error: 'something blew up' })
// This method performs many useful tasks for simple non-streaming responses: For example, it automatically assigns the Content-Length HTTP response header field and provides automatic HEAD and HTTP cache freshness support.

// When the parameter is a Buffer object, the method sets the Content-Type response header field to “application/octet-stream”, unless previously defined as shown below:

// res.set('Content-Type', 'text/html')
// res.send(Buffer.from('<p>some html</p>'))
// When the parameter is a String, the method sets the Content-Type to “text/html”:

// res.send('<p>some html</p>')
// When the parameter is an Array or Object, Express responds with the JSON representation:

// res.send({ user: 'tobi' })
// res.send([1, 2, 3])

//routing 

//how we can respond with different content for different incoming requests
//routing is not specific to express in any server that we develope whether it;s a rails app or express app or some other framework like flask app or django app rounting is super common term
//it referes to taking incoming request and a path that is requested and matching that to some code in some respponse 
//app.get() expects two things the path that we are matching and then a callback function  that will run when a requst comes in matching the path

//the routes that we define recently for ex /cats,/dogs are direct match routes but often we want define pattern for our routes 
//defining patterns for routess -- and the way that we do that in express is by creating our route where inside the path string we actually use a colon to designate something as a variable or a path variable

//query string--is the portion of the url that comes after ? and we can include information in key value pairs as part of this query string
//often applications are set up so that they are expecting something in the query string
//if req object there is property called pathname it consits of path from the url 
//so parsing the query string and having acces to it in an exprees app could be imp

//we define some route ,we do not add anything to the path here in terms of matching a query string or looking for a query string instead the request object that express construct for us and passes in to our callback this request object has a particular property called as query and in that property we will find key value pairs made or based uppon the query string 