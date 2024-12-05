// <------techers copied------------

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}


// <---------mine------------------


tweetsContainer.addEventListener('click', function (e) {
    console.log('clicked on ul!')
    console.log(e);  //it will tell you on which specific li you clicked inside of ul,it
    //it will give an object that has lots of properties ,one of the property 
    //is target it tells sspecificaly on which li/ or what thing you clicked
});

//----------output of above code---------------
// my.js:28 clicked on ul!
// my.js:29 
// PointerEvent {isTrusted: true, pointerId: 19, width: 1, height: 1, pressure: 0, …}
// my.js:28 clicked on ul!
// my.js:29 
// PointerEvent {isTrusted: true, pointerId: 21, width: 1, height: 1, pressure: 0, …}



const lis = document.querySelectorAll('li');
for (let li of lis) {
    li.addEventListener('click', function () {
        li.remove();           //this will only worked on existing lis and won't worked
        //on the lis whick will be added later in future to resolve this
        //issue we will use event delegation concept as below
    })
}

// < ------------event delegation-----------
// Event delegation is a techniqueEvent delegation is a technique in JavaScript that 
// leverages event propagation(bubbling) to manage events more efficiently.Instead of 
// attaching an event listener to every individual element, you attach a single event 
// listener to a common ancestor.This common ancestor can then handle events for all of
//     its descendant elements.

tweetsContainer.addEventListener('click', function (e) {
    // console.log(e.target);  //---output of this------<li><b>sd</b>- fsd</li>
   
    // console.dir(e.targt); //------it willl give dom object of li element(element which is target not only just for lis)
    e.target.nodeName=='li' && e.target.remove();  //- --to run this adhi pahili condition true pahije tarach he run hoil


})