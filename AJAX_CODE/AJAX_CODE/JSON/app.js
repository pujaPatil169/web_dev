//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// THIS IS A JS OBJECT
const parsedData = JSON.parse(data);

// JSON.parse()
// Function: The JSON.parse() method parses a JSON-formatted string and constructs the JavaScript value or object described by the string

// Usage: Used when you already have a JSON string and you need to convert it into a JavaScript object.




//----------.json()-----------------

// the response.json() method reads the response stream to completion and parses it as JSON.
//  It returns a Promise that resolves to a JavaScript object


// Reads the response stream to completion: When a response is received from a fetch
// request, it comes in as a stream of data.The json() method waits for the entire
//  response to be received(or "read") completely before proceeding.This ensures that all
//   data sent by the server is gathered before any further actions are taken.

// Parses it as JSON: Once the full response has been received, the json() method then
// converts(or "parses") this response from a string format into a JavaScript object.
// This process is similar to using JSON.parse(), which takes a JSON - formatted string
//  and converts it into a JavaScript object that can be manipulated programmatically.

