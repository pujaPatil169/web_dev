//-----------------------------node---------------------------------------

//node ---it's just javascript that will run outside of the browser,that means we miss some of the browser specific stuff like events and working with doms
//but we also get some additional features in the language that we don't have in the browser anyway
//node--using node impelementatiion of javascript code without ever opening a browser whithout even having a browser on our machine is possible
//you can use the same syntax that you already know to write code that runs on server side



//node REPL  ---it's kind of like javascript console in our browser but for node,













//we have document or window available in every javascript file in the browser

// Jab kaha jata hai ki Visual Studio Code (VS Code) ek "native app" hai, iska matlab hai ki VS Code ek aisi application hai jo ek specific platform ya device ke liye banayi gayi hai aur us platform ke capabilities aur features ka seedha istemal karti hai. VS Code Electron framework ka istemal karti hai jo ki web technologies jaise JavaScript aur Node.js ke saath combine hota hai, lekin iska runtime environment native operating system ke capabilities ka fayda uthata hai, jisse iski speed aur flexibility barh jaati 
//vs code is written in javascript ,slack - also written in javascript ,it runs both in the browser as web app and and as a native app

//-----------------electron-------------

// VS Code Electron framework ka istemal karti hai jo ki web technologies jaise JavaScript aur Node.js ke saath combine hota hai, lekin iska runtime environment native operating system ke capabilities ka fayda uthata hai, jisse iski speed aur flexibility barh jaati hai [2].
//using electron--it allows you to write javascript code to make a single app that runs both in browsers and as a native apps ,that means with a single codebase you can have code that works on mac on windows machines,will work in the browser
//crosscode---game built with javascript--browser based game buy it's also a native app you can install with steam


//the javvascript console in our browser is repl(read evaluate print loop)--you can type some code in it ,it will read it ,evaluate it and will print something back to me and then it loops its contineousluy going unlike how we typically execute a script where it just runs one time

//node console is equivalent of javascript console in chrom,in node console we can debug we can play around with new features are tools that we have installed,but we can type javascript in here\
//-------------node console----------
//type .help for more info

// > .help
// .break    Sometimes you get stuck, this gets you out
// .clear    Alias for .break
// .editor   Enter editor mode
// .exit     Exit the REPL
// .help     Print this help message
// .load     Load JS from a file into the REPL session
// .save     Save all evaluated commands in this REPL session to a file

// Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
// >

//in the browser the window is the global object --it represents a browser window hence the term window,it's top level of everything ,document object comes under it
//window object--it is where the whole bunch of things are stored like functions and things like alert are sstored it's a global scope
//similarly we have global scope in node REPL as well which is called as global(it's a global object it's what everything lives inside of)

//in terminal
//node filename ---executes the file with node
//node -----opens the node repel

//if youre having multiple node versions then you need to use nvm---node version manager
//cwd--current working directory 

//-------------process object ----------------------

//it's glovbal anytime we are using node and this includes info about and methods that provide control over current node js preoccess, this includes things like version of node,it has methods that allow yoe to get input and write to the standardd output basically  write to your console
//info about memory usage,info about current woorking directory that the user is running script in 
//process.cwd--gives path to where your currently working / where youre currently running node
//you can pass in arguments to the script ---node app.js puupie chickens dogs  ---puupie chickens dogs will passed added in an argv array after first two elements
//first two elements will be exec path(executable path ) and path to the file that we are currently executing
//argv array ---to get arguments from command line

//file system

//all file system operations(read,write,make/close/read  file/directory) have synchronous and asynchronous forms
//the async forms always takes a completion callback as it;s lassst argument
//exceptions that occur using synchronous operation are thrown  immediately and must be or maybe handled with try and catch
//what it's saying is that there ARE two differnt ways of reading files or making/deleting folders/files whatever the methods are there is async version and there is synchronous version
//if we use synchronous version it means do this thing and wait until it finishes before you move on to the next thisng
//the synchronous version will block the entire process until they complete,halting all conections,it's going to stop any other code from runnig
//unlike process which is always in scope if we're using node,fs is the module that we actually need to require
//requiring module basically how do you share 