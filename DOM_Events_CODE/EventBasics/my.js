const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log('hii');
    console.log('i hope it worked')
}

function scream() {
    console.log('aaaa');
    console.log('stop');
}
btn.onmouseenter = scream; 
// in above line we are not calling func scream we are just setting it or passing it, it 
// will eventually get called when user performs this action/Event

document.querySelector('h1').onclick = () => {       //arrow function
    alert('you clidked h1');
    
    
}

// you always need to wrap above thing inside a function ,or else it won't work

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => { alert('clicked') })

function twist() {
    console.log('cllicked')
}
function shout() {
    console.log('shout')
}

tasButton.onclick = twist;
tasButton.onclick = shout;//click kelya nantar doghi exucute honar nahi ,shout will
//overwrite twist now final value set on onclick will be shout and not twist


const tasButton = document.querySelector('#tas')


tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);
//this above way of writing twist and shout won't overwrite 