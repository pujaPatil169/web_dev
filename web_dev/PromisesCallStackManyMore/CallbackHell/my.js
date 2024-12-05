// document.body.style.backgroundColor = 'red';
// document.body.style.backgroundColor = 'orange';
//orange line will overwrite red wali line ,finaly the background will be orange in color


// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// },1000);
// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 1000);
// orange wala settimeout will overwrite red settimeout after 1 sec backgroound color will be orange and not red


//------------nesting-----------


// setTimeout(() => {
//     document.body.style.backgroundColor ='red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor =' yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
                
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//-------------callback hell--------------
//---------generic functions --------------

//------mine method----
// delayedColorChange(newColor, delay, CallbackDoNext){
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         CallbackDoNext();
//     }, delay);
// };


//------sir's method----------

const delayedColorChange = (newColor,delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
};

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    
                })
            })
        })
    })
});


//more than one callback we pass in two each function for these asynchronous ooperastion

searchMoviesApi('amadaus', () => {
    saveToDatabase('movies', () => {
    //If it works    
    }, () => {
        //if it doesn't works
    })
}, () => {
    //if api doesn't work
})