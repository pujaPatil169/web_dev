
const input = document.querySelector('input');
input.addEventListener('keydown', function () {
    //it's not changing or doing anything to input

    // console.log('keydown')       //----When the keydown event occurs, the callback function logs the string 'keydown' to the console.
    //In summary, the keydown event is used to detect when a key is pressed down on the keyboard, 
    //and in this code, it logs a message to the console each time this event occurs for the input field.
    // console.log(e.code)
});
input.addEventListener('keyup', function () {
    //it's not changing or doing anything to input  --they
    //don't corrospond to typing in thiss input or to effecting
    //a change in this input
    // console.log("KEYUP")          //-----The keyup event in JavaScript is fired when the 
    //user releases a key on the keyboard.This event can
    // be used to detect and respond to the user finishing
    // pressing a key.It's commonly used for input validation,
    // updating UI elements in real - time, and other interactive 
    //features that respond to keyboard input.
});

input.addEventListener('keydown', function (e) {
    // console.log(e.key);   //prints what key is pressed
    // console.log(e.code);  //prints the keyboard location of the key pressed
});//this event will only respond when youre pressing any key   after clicking on input unlike windows it won't respond to any key pressed onn anywhere in windows
//after performing above lines of code the output obtained is belowed
// a
// my.js:25 KeyA
// my.js:24 Enter
// my.js:25 Enter
// my.js:24 Shift
// my.js:25 ShiftRight

window.addEventListener('keydown', function (e) {
    // console.log(e);
    console.log(e.code);
})
// my.js:37 ArrowUp
// 2my.js:37 ArrowDown
// my.js:37 ArrowLeft
// my.js:37 ArrowRight
// my.js:37 ArrowLeft
//KeyF
// my.js:37 KeyE
// my.js:37 
//it is globaly window par kahi bhi konsi bhi key agar press ki then thhis event will respond
//below output obtain after executing this above 2 lines

// KeyboardEvent {isTrusted: true, key: 's', code: 'KeyS', location: 0, ctrlKey: false, …}
// my.js:36 KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
// my.js:36 KeyboardEvent {isTrusted: true, key: 'd', code: 'KeyD', location: 0, ctrlKey: false, …}


// a lot of time we want to know what key was pressed so to do that use event object


//--------logic--------

/*there is this thing called as event object that is automatically passed in to our 
callback  here this function we are not using it we are not capturing it ,there is no parameter here
to capture it ,but it's being passed in every single time,but we can capture it as you have usen parameter evt*/

//event object--contains the information about respective event given below is it's example

document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
});
//---the thing below obtains on exucuting above lines of codes

//PointerEvent {isTrusted: true, pointerId: 5, width: 1, height: 1, pressure: 0, …}
// isTrusted
// : 
// true
// altKey
// : 
// false
// altitudeAngle
// : 
// 1.5707963267948966
// azimuthAngle
// : 
// 0
// bubbles
// : 
// true
// button
// : 
// 0

//we can listen for those events both on particular inputs as an exampleor on the window as whole