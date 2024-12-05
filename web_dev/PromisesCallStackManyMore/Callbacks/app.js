console.log("Sending request to server!")
setTimeout(() => {
    console.log("Here is your data from the server...")
}, 3000)
console.log("I AM AT THE END OF THE FILE!")

//set timeout is a way of running some code after a delay,settimeout expects an function
//as a argument


//--------callback----------
// In programming, particularly in JavaScript, a callback is a function that is
// passed as an argument to another function and is executed after the completion of that
// function. This mechanism allows functions to be called at a later time, often after an 
// event or an operation is completed

// A callback is essentially a "call after" function that runs after another piece of code has finished
// executing.It is often used to handle asynchronous operations like data fetching,
//     event handling, or timers.

// Use Cases: Callbacks are widely used in event handling(e.g., clicking a button),
//     animations, and handling asynchronous operations in JavaScript.\


// function fetchData(callback) {
//     // Simulate a server request
//     setTimeout(() => {
//         let data = "Server Data";
//         callback(data); // Execute the callback with the data
//     }, 1000);
// }

// function processData(data) {
//     console.log("Processing:", data);
// }

// fetchData(processData); // Pass processData as a callback to fetchData
