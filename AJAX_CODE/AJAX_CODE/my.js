//in this section we are gonna learn how we make request using 
//javascript 
//by clicking a link we are making http request by typing something into my url bar and hitting enter i am making an request
//hitting a refresh button i am making an request 
//this are not the only way to make request we can make request from code
//-------Ajax stands for asynchronous javascript and xml--
//it really what reffers to is the concept of making requests to load information
//or to send information to save something
//ajax refers to making requst on page while it's already been loaded or after it's been loaded
//ajax the whole concept is creating applications where using
//javascript we can load data or wwe can fetch information,or
//we can send data somewhere to save something to a database
//as we scorll down in any web page we make requests and
//we get to see that requests in dev tools by opening nerwork page


//instead of getting an html,css and javascript which is what we do to make an webpage i.e instead lot of the time when we are working with jaavascript and making requests what we want is just data 
//if i need to update the price of bitcoin in every 30sec with javascrit i don't want you
//to have to refresh the page i could use settimeout or i coult use the request i could make the request every two minutes to this api--this is the endpoint that i can requst and what it respond back with is not html,css or js  it's just plain old information in the format called json//
//when we make request using javascript ajax requests we are looking for just bare bone information we don't want the html,css or javscript i just wants the data this where api comes in
//api is a very broade term that refers to any interface for one computer to interact or communicate with another piece of software it's actually more about one piece of software to another piece of software it does't have to be seperate computers anyway it does not have to do with web in general
//most of the time when you here the web developers you here the term api most people are reffering to web api ,web api's are interfaces that are web-based,http based 
//some company let's say twitter or facebool or just some wether or bitcoin api they expose certain end points and this endpoints that are exposed are goin to respond with information for code to consume or for other pieces of software to consume so this web api's are like portal into different application or database somewhere or a dataset or just some startup information
//when we are talking about web api we are reffering to this interface that ocuurs over http and make request to particular url which we usually call endpoints
//api's work via http we send an request to an api and we get an response 
//i send a data to an api sometimes like this twilio api i am sending a information about who i wanna send a text to what this api's respond with something called as json
//there are really two common formats the populer one was xml stands for extensible markup language this days there are not much apis that respond withh xml this days what most people commonly used is json
// json stands for --javascript object notation ,json is a format for sending data sending information from me to you or from an api to my browser ,it's a way of formating data that is consistent and predicatable(there is a json validator where you can check if youre writing a valid json ,ex.undefined is not valid in json which is valid in javascript and if it is not then it will turn it into valid json)
//there is object in json with key value format but key needs to be strictly inside double quostes
//python or ruby or really any other language we still work with api's that are json api's they all have there way of parsing json and turning it into actual python code or in out case javascript code ,we have a method built in into javascript to do that which JSON.parse(text) it converts json code into javascripy code
//JSON.strigify(text) it helps us to convert the javascript code into json code and this is useful if we need to send information to an api and that api wants us to send data as json
//postman is a tool we used to make http requsts to test out different apis to save requests
//hoppscotch--opensource api development ecosystem --they exist to help developers test api request you can test your own apis

// An endpoint in terms of an API (Application Programming Interface) is a specific URL or URI (Uniform Resource Identifier) where an API can access the resources it needs to function. Each endpoint represents one function of the API and is a specific route that allows users to interact with the API.

// Here are some key points about API endpoints:

// Definition: An endpoint is the point of entry in an API where developers send requests and where the resource or service is available. It's essentially a specific URL that forms part of the API [1].

// Functionality: Endpoints are used to specify the exact location where a particular resource can be accessed. For example, in a RESTful API, an endpoint might be used to retrieve, update, or delete a particular resource.

// Structure: The structure of an endpoint typically includes the base URL, which identifies the server, and a path, which identifies the specific resource. For example, in the URL https://api.example.com/users/123, https://api.example.com is the base URL, and /users/123 is the endpoint path.

// Use Case: When you make a request to an API endpoint, the server processes the request and returns the appropriate response. This could be data retrieval, data submission, or any other action the API is designed to handle.

// Endpoints are fundamental in API design and development, enabling precise interaction with web services.

// The Base URL is the root URL for all of the API, if you ever make a request to swapi and you get back a 404 NOT FOUND response then check the Base URL first.

// The Base URL for swapi is:

// https://swapi.dev/api/

// The Root resource provides information on all available resources within the API.

// Example request:

// http https://swapi.dev/api/

// Let's make our first API request to the Star Wars API!

// Open up a terminal and use curl or httpie to make an API request for a resource. In the example below, we're trying to get the first planet, Tatooine:

// http swapi.dev/api/planets/1/

// https://swapi.dev/api/  after making this requst on hoppscotch we got this

// {
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "films": "https://swapi.dev/api/films/",
//     "species": "https://swapi.dev/api/species/",
//     "vehicles": "https://swapi.dev/api/vehicles/",
//     "starships": "https://swapi.dev/api/starships/"
//   }


//library axios uses fetch behind the scenes


//fetch it allows us to make request using function called fetch it supports async functions ,promises

//-----------query string------------
//it's very common to use query string to include additional information in a url
//A query string in JavaScript is a part of a URL that contains key-value pairs of parameters. It typically starts with a question mark (?) and is followed by one or more key-value pairs separated by an ampersand (&). Query strings are used to pass data to and from a web server via the URL.

// Example:
// Consider the URL: https://example.com/search?query=javascript&sort=asc

// query=javascript and sort=asc are query string parameters.
//unlike a url we can append anything to the query string and it will always be ignored by given website,server or api unless it is looking for one of these things(sort=asc,query=javascript)
//if we search for chicken in mdn it takes us to the url i.e search result url which is ---https://developer.mozilla.org/en-US/search?q=chicken
//so the server for mdm is setup to look for a value called Q and then use whatever it finds under Q as the search term or the query,lot of apis are structured in a way that they want you to provide a values vis query string for ex. tvmaze api
//URL: /search/people?q=:query
//Example: https://api.tvmaze.com/search/people?q=lauren--lauren is our search term
//some end points actually require multiple or can use multiple pieces of query string for ex.Example: https://api.tvmaze.com/schedule?country=US&date=2014-12-01
//query string - it's any sort of key value pair we want each seperated by an ampersend& we can add this to any url we want and most of the time it's going to be ignored but certain api's websites use query string

//--------headers 
//headers are additional way of passing information with a given request and actually also with an response,littel addon details as a part of your request we can view headers in the network tab

// In JavaScript, the Headers object is used to represent and manipulate HTTP request and response headers. It is part of the Fetch API and provides a convenient way to set and retrieve headers. The Headers object consists of a list of key-value pairs, where each key is a header name and the value is the corresponding header value.

// Creating and Using Headers
// To create a Headers object, you can use the new Headers() constructor. You can then add, delete, or retrieve headers using its methods such as append(), delete(), get(), and set().

// Example
// javascript
// Copy code
// // Create a new Headers object
// const headers = new Headers();

// // Add headers
// headers.append('Content-Type', 'application/json');
// headers.append('Authorization', 'Bearer token');

// // Check a header
// console.log(headers.get('Content-Type')); // Output: application/json

// // Modify a header
// headers.set('Authorization', 'Bearer new_token');

// // Delete a header
// headers.delete('Authorization');

// // Use headers in a fetch request
// fetch('https://api.example.com/data', {
//     method: 'GET',
//     headers: headers
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));
// In this example:

// We create a Headers object and add headers using append().
// We retrieve the value of a header using get().
// We modify a header using set().
// We delete a header using delete().
// We use the headers in a fetch request to make an API call.
// The Headers object makes it easy to manage HTTP headers in your JavaScript code, particularly when working with APIs and making network requests.
//they are this pairs of information that go along with request and then we also get headers back with a response called as response headers-- is just a information coming back from server like content language,type,format etc
//some api's are setup in a way that we actually have to send custom headers
//there is an api called as icanhazdadjokes in it there is no seperate endpoint to get json by default it gets html to get json we need to specify this header called as accept as given below
// API response format
// All API endpoints follow their respective browser URLs, but we adjust the response formatting to be more suited for an API based on the provided HTTP Accept header.

// Accepted Accept headers:

// text/html - HTML response (default response format)
// application/json - JSON response
// text/plain - Plain text response
// Note: Requests made via curl which do not set an Accept header will respond with text/plain by default.
//so we need to set this accept header and it's not someting we can do by just sendding a request in the browser up here i.e url in browser but we can do it when we send a request via code or via something like hoppscotch or postman in it there is a header section and you just add your header in here

//--------fetch--------------------------------------

//newer way of making requests via js,supports promises,async functions



//------------axios ------------------

//it's a seperaate library that's not native to javascript ,that is made for http requests
//axios is a library for making http requests,creating requests and working with them,behind the scenes it does use fetcch in the browser,it's not part of javascript it is not native it's built on top of javascript
//we have to import it or add it to our code so we can use it
//axios is a library that works for node.js
//u can use one library that will make requests from the browser and the same library will make requests from the server side


//---------------extra points-----------------

// -------------# What is a repository-------------
// 🗒️ Answer
// A repository, often referred to as a "repo," is a central location where data is stored and managed. In the context of software development, a repository is used to store and manage code, project files, documentation, and other related resources. Repositories facilitate version control, allowing multiple contributors to work on a project simultaneously while tracking changes, managing revisions, and maintaining the integrity of the codebase. Popular platforms for hosting repositories include GitHub, GitLab, and Bitbucket.

// Repositories are essential for:

// Version Control: Tracking changes in code over time.
// Collaboration: Allowing multiple developers to contribute to the same project.
// Backup: Ensuring code and project files are safely stored and recoverable.
// Documentation: Keeping project-related documentation organized and accessible.
// Deployment: Managing and automating the deployment of software projects.


{/* <response>
# ----------------What is a CDN------------------------
🗒️ Answer
A Content Delivery Network (CDN) is a system of geographically distributed servers that
 work together to deliver web content and services to users more efficiently. 
 The main purpose of a CDN is to reduce latency and improve the performance of 
 websites by caching content closer to the end-users. This helps in speeding up the 
 loading times of web pages and reduces the load on the origin server. */}


//  # `<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>`--this is a hosted nice little CDN
// 🗒️ Answer
// This line is an HTML script tag that imports the Axios library from a Content Delivery Network (CDN). Here's a breakdown of its components:

// <script src="..."></script>: This is an HTML script tag used to include external JavaScript files in a web page.
// https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js: This URL points to the minified version of the Axios library (version 1.6.7) hosted on the jsDelivr CDN.
// --this is a hosted nice little CDN: This part is a comment explaining that the script is hosted on a CDN.
//***** CDNs are used to serve content such as JavaScript libraries from a network of servers distributed around the world, which helps to improve load times and reduce latency for users accessing the content.
//content on cdn is hosted online we don't have to download it beforehand

//---------------name attribute---------

// The input elements have name attributes (firstname and lastname).
// When the form is submitted, the form data is sent to  the server with firstname and lastname as keys for the values entered by the user.
// For example, if the user enters "John" for the first name and "Doe" for the last name, the server receives the data as firstname=John&lastname=Doe.i.e the it gives input value enter by user and we can acces it by(if name="query") console.log(form.element.query.value)--this will give data submitted by user
//dynamic applications---every page in them is constructed when it is requestedconst img = document.createElement('img');

//-----------terminal---------------------------------------------------------------

//provides all an all access pass to your computer and all of it's different settings and different pieces of software and parts of the operating system that we can do a whole bunch of stuff with that normally is completly off limit(forbidden/restricted),we can make serious changes we can change permissions we can modify settings that are normally off limit,we can view hidden files
//lot of the technologies the tools that we will be using like node,express,databases are all based around command line/terminal
//shell is the program running on  terminal ,there are lots of shell newer one is z shell and the populer one is bash shell either of themm supports all the commands that we needed but on you device it is fish shell


// Terminal: A terminal is a hardware device or software program that allows users to interact with a computer using text-based commands. It provides a text-based interface to enter commands and receive text output from the system [1].

// Shell: A shell is a program that interprets commands and executes them. It is a command-line interface (CLI) that processes user commands and returns text output. Common shells include Bash (Bourne Again Shell) in Unix/Linux systems and Command Prompt in Windows [4].

// Console: The console can refer to different things depending on context:

// In a broad sense, it can mean the combination of hardware and software that provides text-based interaction (similar to a terminal).
// Specifically, it can refer to the text-based interface within a graphical user interface (GUI) environment where commands can be typed and executed 
//every time i make a new window:(terminal) the location that i end up in by default is something called as home direcctory,home directory is just my user account directory
//you can have multiple user accounts on your system and ,all each of this acounts have there own home directory located inside of the users folder

//ls- stands for lists and any time i type it in my terminal,it's going to list the current contents of the directory that i am in at the moment

//pwd-- it;s like a compassss it will tell you where you currently are,it stand s for print working directory,prints the path to the working directory(where you currently are)
//cd--it is versatile we can use it to move forward and backwards,use to change and move between folders
//~  --it is the short way of saying youre in the home directory
//cd .. --it is equivalent of back button you can go backword one directory,backup one level 
//  cd ../../downloads  --going back two levels

//there are two paths absolute path--can do from any folder on my machine(/user/) ,it starts from slash(refers to root directory),complete direction path to get to the one location
// relative path-- - it should be present in the current folder
//    / --it means root directory

// ╭─puja@puja in ~ via  v22.3.0 took 5ms
// ╰─λ cd /

// ╭─puja@puja in /🔒 took 3ms
// ╰─λ ls
// bin  boot  dev  etc  home  lib  lib64  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var


// you can go to root directry from anywhere by typing  --- cd / 
// you can go to home directry from anywhere by typing  --- cd ~ 

//you can make more than one directories at a time using the command mkdir,  syntax ==  mkdir nameOfDirectorysUwantToCreate seperating space as many as u want--it will be very quick if you want to make lot of folders in one go in the same location
// mkdir pets
// and then inside pets make new folders  mkdir goats cows frogs 
//suppose now youre inside goats and you want to make one more folder namming hens inside pets folder
//  mkdir ../hens
//  suppose we are now in pets directory 
// mkdir frogs/treeFrogs peackoks  ---it gonna make treeFrogs directory inside frogs which already exist in pets and peackoks directory inside pets directory

//------------------flags--------
//flags are different characters that you can pass in that alters the behaviour of the command we are using them with
// man command --it short for manual ,syntax --  man ls  --this gonna give us information about ls what it is all the info  about ls command 

// the info page of ls contains flags for ex.  -l,-s,-t ---this are some that are used with ls 
//ls - l command use if you want long listing format
//ls -t it sort in the order of newest first,ls -s sort by size
//ls -a include directory entry whose names begins with the dot .  (hidden files)

// Files and directories that begin with a dot (e.g., .filename) are treated as hidden in Unix-like operating systems, such as Linux and macOS. This convention dates back to early Unix systems. Here are some key points:

// Hidden Files: The leading dot marks files as hidden, so they don't show up in a standard directory listing(gui representation). To see them, you typically use the ls -a command on Unix-like systems [2].

//combining flags ,using multiple flags at the same time
//ls -la

//man mkdir---it will give us mkdir page of info like ls and also gives flags for mkdir
//mkdir -v horses rats elephants  --it will make this three folders inside of pet --given current dirsctory i pets

//-------creating files from the command line---------

// man touch---info page of touch to exit from that page simply type q.
//touch command--create file(multipel)--can make multiple files in one go
// touch app.css mina.txt guggy.png ---making multiple files --make sure they are seperated with space
// touch Update the access and modification times of each FILE to the current time.--it does it for that files which already exists and if file does not exist then creates it
// A FILE argument that does not exist is created empty, 

//-----deleting files ,directories--rm command---------------

//rm command ---removing/deleting file/multiple files and rmdir---for deleting folders --it will delete permanantly(unless you have been using something like git) it won't be added to trash 
//rm mina.txt  ---it will delete file mina.txt
//rmdir ---is only for deleting empty folders unlike rm it delets anny kind of file wheter empty of filled

//we will make use of flags with rm to deletee directory/directories even if it have stuff in it -- rm -rf plants   (plants -directory name--if plants have further nested directoris in it ,it will delete all at once)
//rm -rf 

