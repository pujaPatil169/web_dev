// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })




//chaining .then() and .catch()


// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })



//----------------.then and .catch--------------------

// .then() and .catch() are methods used in JavaScript for handling Promises, which are objects representing the eventual completion or failure of an asynchronous operation.

// .then()
// Usage: The .then() method is used to specify what should happen when a Promise is successfully resolved.
// Syntax: .then(onFulfilled, onRejected)
// onFulfilled: A function that gets called when the Promise is resolved.
// onRejected: (Optional) A function that gets called when the Promise is rejected.
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((response) => {
//         console.log("IT WORKED!!!!!! (page1)", response);
//         return fakeRequestPromise('yelp.com/api/coffee/page2');
//     })
//     .catch((error) => {
//         console.log("OH NO, ERROR!!!", error);
//     });

// .catch()
// Usage: The .catch() method is used to handle errors that occur during the execution of a Promise chain.
// Syntax: .catch(onRejected)
// onRejected: A function that gets called when the Promise is rejected.


// response in .then():

// When a promise is resolved successfully, the .then() method is executed.
// The response parameter in the .then() method represents the result returned by the successful promise.
// In your code, if the request to 'yelp.com/api/coffee/page1' is successful, response will contain the data returned from this API endpoint.
// This allows you to log the success message and proceed with the next request ('yelp.com/api/coffee/page2').


// error in .catch():

// If the promise is rejected (an error occurs), the .catch() method is executed.
// The error parameter in the .catch() method represents the error that caused the promise to be rejected.
// In your code, if either of the requests fails, the error will be caught and logged with an error message.
