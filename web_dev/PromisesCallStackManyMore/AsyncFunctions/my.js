//-----------------async------------------------



// const sing = async () => {
//     console.log('lalllalllaaa');
//     return 'aaaadffdsa';
// }

// sing()
//     .then((data) => {
//         console.log('promised resolved with', data);
//     })
//     .then((data) => {
//         console.log('it worked again');
//         console.log(data);
//     })


async function hello() {
    //if there is a return value inside it then the promise will be resolved 
    //the way that we reject   a promise inside async function is by throwing an error

}

//async keyword is keyword use to declare a function as asynchronous(async) function ,that function automatically returns a promise even though we never said return a promise
//after declaring functin as async it magically behind the scenes returns a promise for us that promise is either resolve or rejected 
//depending on wats going inside of it if return a value that promise will be resolved 
//with that value if we throw an error promise will be rejected with that error

// const sing = async () => {
//     throw "oh no problem"
//     // throw new Error('oh oh problem');
//     //if we throw an error within async function the magical promise that has been created get's
//     // rejected
// }

// sing()
//     .then(data=> {
//         console.log('promise resolved with ', data);
//     })
//     .catch(err => {
//         console.log('oh no promise rejected');
//         console.log(err)
//     })

// const login = async (username, password)=>{
//     if (!username || !password) throw 'missing credantials';
//     if (password === 'corgifeet') return 'welcome  ';
//     throw 'invalid password';
// }

// login('adfdfee', 'corgi')//no of inputs 1.'adfdfee' 2.adfdfee,corgi 3.adfdfee,corgifeet you will get different results output
//     .then(msg => {
//         console.log('loged in');
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log('error');
//         console.log(err);
//     })

//---------------------await-----------------------------

//we can only use await keyword inside of the function declared with async
//await will pause the execution of our async function,waiting for the promise to be resolved before continuing on 
//it only works within async function


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(()=> delayedColorChange('indigo', 1000))

async function rainbow() {
       await delayedColorChange('red',1000)
       await delayedColorChange('orange',1000)
       await delayedColorChange('yellow',1000)
       await delayedColorChange('indigo',1000)
       await delayedColorChange('violet', 1000)
       return console.log('all done')//

    //because of using await we don't need to use .then()and the further chaining
    //await works inside of an async function and it will pause the execution until a promise is resolved
}

// rainbow().then(() => {
//     console.log('end of rainbow')
// }) //---the below code does the same task as this .then() is doing

// async function printRainbow() {
//     await rainbow(); //--here async function rainbow is awaited
//     console.log('end of rainbow')
//     }
// printRainbow();


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                resolve(`here is your fake data ${url}`);
            }
            reject('Request Error!');//-----the value that this promise is rejected with is 'request error' in this case
                   //--request error! ------this is the value that our promise is rejected with
        }, 1000)
    })
}

async function makeTwoRequests() {
    let data1 = await fakeRequest('page1');  //data1--this information that promise was resolved with was awaited and then stored in data1
    console.log('data1')
}

//-----error handling if promise is rejected------------


async function makeTwoRequests() {
    let data1 = await fakeRequest('page1');
    //if this promise is rejected an error is thrown due to this error the further execuition of this maketworequest function will stop
    console.log('hello')//--this line will not work if error is occured or let's say this promise is rejected
}

//----using try and catch to handle an error

async function make2Request() {
    try {
        let data1 = await fakeRequest('page1 ');
        console.log(data1);
        let data2 = await fakeRequest('page2');
        console.log(data2)
    } catch (e)
    {
        console.log('caught an error');
        console.log('error is ', e);
    }
}