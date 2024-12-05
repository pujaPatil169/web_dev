// fetch("https://swapi.dev/api/people/1/")//this function returns a promise,  
//     .then(res => {
//         console.log("resolved!", res);
//         return res.json().then(data =>{console.log(data)})//you can also write .then() on seperate line both will have same result but bellow one is recommende way to write .then() on seperate line
//     })



// fetch("https://swapi.dev/api/people/1/")//this function returns a promise, and it will make a get request by default 
//     .then(res => {
//         console.log("resolved!", res);
//         return res.json()
//     })
//     .then(data => {
//         console.log("1st",data);
//         return fetch("https://swapi.dev/api/people/2/")//-----in this the first requst needs to be resolved or thee second one won't even start this second request is dependent on first and similarly 3rd is dependent on 2nd one but we can also make independent requests
//     })
//     .then(res => {
//         console.log('2nd request resolved')
//         return res.json()
//     })
//     .then(data => {
//         console.log('2nd',data)
//     })
//     .catch(e => {
//         console.log("error!", e);
//     })//look below coments to know more about json and stuff


// we can use async and await to write above stuff in more better nicer Way ,we don't need to use .then() and chain them we can just use await
//using asynsc and await over .then() chaining is an syntax improvement

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log("1st", data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log("2nd", data2);
    
    } catch (e) {
        console.log("error!!", e);
    }
}
loadStarWarsPeople();








    //.json()---it returns a promise

//res---response object this what we get back if this promise is resolved
// resolved!
//below is response object ,the response body doesn't include all the stuff we might expect it to,the reaason for that is that this promise is resolved as soon as fetch receives any headers
//so that means it may not have the full body ,all the different data all the text in our case all the json back from the http request that was made before this is resolved ,body: ReadableStream it's this readable strem we actually need to reaad it and parse \it
//there is  a method on response called as .json() ,so this is not same as json.parse()  ,.json()--this is a method that is added on to fetch response object,.json() also returns a promise

//  Response { type: 'cors', url: 'https://swapi.dev/api/people/1/', redirected: false, status: 200, ok: true, … }
// body: ReadableStream----------prematuarly resolve as soon as it can
// bodyUsed: false
// headers: Headers{ }
// ok
// : 
// true
// redirected
// : 
// false
// status
// : 
// 200
// statusText
// : 
// ""
// type
// : 
// "cors"
// url
// : 
// "https://swapi.dev/api/people/1/"
// [[Prototype]]
// : 
// Response


// .then(response => response.json()): The response.json() method reads the response 
// stream to completion and parses it as JSON.It returns a Promise that resolves to a 
// JavaScript object[1].

// .then(data => console.log(data)): This logs the parsed JSON data to the console.


// .json()
// Function: The.json() method is used with the Fetch API to read the response stream to 
// completion and parse it as JSON.

// Reads the response stream to completion: When a response is received from a fetch
// request, it comes in as a stream of data.The json() method waits for the entire
//  response to be received(or "read") completely before proceeding.This ensures that all
//   data sent by the server is gathered before any further actions are taken.

// Parses it as JSON: Once the full response has been received, the json() method then
// converts(or "parses") this response from a string format into a JavaScript object.
// This process is similar to using JSON.parse(), which takes a JSON - formatted string
//  and converts it into a JavaScript object that can be manipulated programmatically.
