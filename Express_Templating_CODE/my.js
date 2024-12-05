// TEMPLATING
// Templating allows us to define a preset "pattern" for a
// webpage, that we can dynamically modify.
// For example, we could define a single "Search" template
// that displays all the results for a given search term. We
// don't know what the term is or how many results there
// are ahead of time. The webpage is created on the fly.

//templeting--where instead of writing static html code that is always the same we can embed information and logic so we can repeate parts of the template over and over with a loop
//so end goal is to combine some form of logic  with creating html responses and there are many tools out theree to help us do this and the one we are going to use is 'EJS' stands for enbeded javascript--it;s not exactly same as javascript but it's adding logic into our templates and 
//let's configure a simple express app to use ejs we actually have to tell express this(ejs) is the templating engine we want to use (some of the templating engines are pug,handlebars,nonechuck)
//the whole point of using templating or templating engine is to be able to add logic in and interpolate data basically fill in the blanks
//it's souped up html where we can have dynamic values added in we can have loops,conditionals all of that is why we are learning ejs 
//so now what i was getting to is that generally we want to remove as much logic as possibel from our template we want to try and move as much of the logic out 

//we use template for fill in the blanks another thing that we use template alot is for looping for creation of similar content

//static files

//serving static files basically referes to serving things like css, javascript files that we want to include in the response back to the client 
//express.static() is the something known as a middleware ,app.use(some code) this is going to run every single time we had any request it;s not a route it doesn't care if it;s a get request or post request it doesn't care about the path that it's goig to execute the every single request
//app.use(express.static('public')) this is an example of something called as a middleware and think of it as something that just runs in between the request coming in and response going out
//exprees.static() is built in to express and then we pass in an argument of the folder that we want to serve our assets from ,you can actually serve multiple seperate folders
//in this case as you have use everything inside of the public dirctory will be accesible in our templates

//error while using javascript bootstrap we need to add jquery i could have                 use the cdn anyway for bootstrap but i wil instead go to jquery website and i will download the jquery 

//--------partials----------

//technically ejs calles them include it's a way of including templates in other templates so subtemplate instead of some other template we have some code some markkup that wee are duplicating
//what we are going to do is create  something that all of our template use in common then we can just include in our sub template whenever needed

//<%-  %>  outputs the unescaped value into the template what that means is if there is html that we are outputing  it is not going to escape it  ,escaping content means that we are treating it basically as a string we are not going to  treat it as html and render it vs here where we use equall sign instead of - this sign the content whatever is inside of the braskeets is going to be escaped it won't be treated as html