//promises are objects that represents eventual completion ,event failure or success

// arr.map(function (element) {
//     //map is gonna pass the values of arr at the place of element that's as an parameter
// })
//----------callback version------------------

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('connection timeout');
        }
        else {
            success(`here is your data${url}`);
        }
    }, delay);
};

//----------promise versio-----------

// new Promise: This is not a function name but a constructor for creating a new Promise 
// object.Promises are used to handle asynchronous operations in JavaScript.

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('connection timeout');
            }
            else {
                resolve(`here is your fake data from url ${url}`);
            }
        }, delay);
    
    })
    
}

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('it worked ');
//         console.log(response);
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log('it worked again ');
//                 console.log(response);
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log('it worked 3rd time ');
//                         console.log(response);
                        
//                     }, function (err) {
//                         console.log('error 3rd req!!!!!!', err);
//                     }
//                 )
                
//             }, function (err) {
//                 console.log('error 2nd req!!', err);
//             }
//         )
        
//     }, function (err) {
//         console.log('error!!!!!!', err);
//     }
// )

// let response = fakeRequestPromise('hikingTrails/api/nearMe/page1');
// response.then(() => {
//     console.log('it is resolved page1')
//     console.log('it worked');
//     response.then(() => {
//         console.log('it is resolved page1')
//         console.log('it worked');
        
//     })
//     response.catch(() => {
//         console.log('it is rejected page1');
//         console.log('error!!!!!!!!!');
    
        
//     })
    
// })
// response.catch(() => {
//     console.log('it is rejected page1');
//     console.log('error!!!!!!!!!');

    
// })
// fakeRequestPromise('hikingTrails/api/page1')
//     .then(() => {
//         console.log('page1 worked');

// fakeRequestPromise('hikingTrails/api/page1')
// .then(() => {
//     console.log('page1 worked');
// })
// .catch(() => {
// console.log('error page1 ')
// })
//     })
//     .catch(() => {
//     console.log('error page1 ')
// })



// fakeRequestPromise('hiking/trails/api/page1')
//     .then((data) => {
//         console.log('it worked  page1 ');
//         console.log(data);
//         return fakeRequestPromise('hikinsg/trails/api/page2')
//     })
//     .then((data) => {
//         console.log('it worked page2');
//         console.log(data);
//         return fakeRequestPromise('it worked page3');

//     })
//     .catch((err) => {
//         console.log('oh no it failed');
//         console.log(err);
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();//this promise is resolved without any data/values we are not passing any information or value
            //if function fake request we are resolving a promise with fake data
        },delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(()=>delayedColorChange('indigo',1000))
