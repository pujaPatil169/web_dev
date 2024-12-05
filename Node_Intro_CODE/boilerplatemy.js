const fs = require('fs');


// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('dog', { recursive: true }, (err) => {
//     console.log('in the callback');
//   if (err) throw err;
// });

// console.log(' i come after mkdir in the file ');  //----this thing will be printed first and then directory dog will be created and then the callback function will run i.e in this case "in the callback " will be printed at last"


//-----another version of the above code from node docs---------
//this code below throws an error 

// import { mkdir } from 'node:fs';

// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// mkdir('dog', { recursive: true }, (err) => {
//   if (err) throw err;
// });
const folderName = process.argv[2];
fs.mkdirSync(`${folderName}`);  //-----synchronous version of mkdir doesn't need callback
fs.writeFileSync(`${folderName}/index.html`);
fs.writeFileSync(`${folderName}/app.css`);
fs.writeFileSync(`${folderName}/app.js`);

//------fs.writeFileSync --------------

//it is going to write data to the file replacing the file if it already exist meaning it will create the file for us if does not exist

//if we ran the boilerplatemy.js file/script outside of the node intro folder like below
// suppose at terminal now youre in downloads folder and not in node intro folder then to run the boilerplate script from that folder in terminal the syntax will be as below
// node downloads/programs/webdev/node_intro/boilerplatemy.js project1(argument)
//so boilerplate is running and making new folder but now it will make that new folder in downloads befor it was making that folder node intro,so new folder us direcry mai banega jaahase(jis location s￼e) ham script run kar rahe hai naki vahase jaha par script located hai