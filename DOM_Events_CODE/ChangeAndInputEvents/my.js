const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('change', function (e) {  //change event only fires when we blur out of the input (click away from the input after changing it)
    console.log('change event');
});
input.addEventListener('input', function (e) {
    // console.log('input event!');        //---when we change anything in the input this event get's fired
    // console.log(e);
    h1.innerText = input.value;

})