const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


const pp = document.querySelector('p').innerText;//doesn't show hidden elements
const pupdated = document.querySelector('p').textContent;//shows all the content inside element including hidden elements


// ------console-code-----


// window.getComputedStyle(h1)

// CSSStyleDeclaration { 0: 'accent-color', 1: 'align-content', 2: 'align-items', 3: 'align-self', 4: 'alignment-baseline', 5: 'animation-composition', 6: 'animation-delay', 7: 'animation-direction', 8: 'animation-duration', 9: 'animation-fill-mode', 10: 'animation-iteration

// window.getComputedStyle(h1).fontSize
// '48px'
// window.getComputedStyle(h1).fontFamily
// '"Times New Roman"'
// window.getComputedStyle(h1).margin
// '32.16px 0px'
// window.getComputedStyle(h1).color
// 'rgb(221, 160, 221)'