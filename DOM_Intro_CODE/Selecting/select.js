// const allimages = document.getElementsByTagName('img')
// console.dir(allimages)
// for (let img of allimages)
// {
//     console.log(img.src);
// }
// // document.querySelector('img')
// // document.querySelector('#banner')
// // document.querySelector('.square')
// document.querySelector('img:nth-of-type(2)')//chaining selectors
// document.querySelector('a[title="java"]')//attribute selector

// document.querySelectorAll('p')
// const links = document.querySelectorAll('p a')//descendent selector,it will select a tags inside of paragraph
// for (let link of links) {
//     console.log(link.href);
// }
// document.querySelector('p').innerText;
// // document.querySelector('p').innerText = 'lololol';
// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.innerText = "i am a link";//they have different hrefs they will go to different
//     //urls ,only inner text will be overwritten 
// }






// document.querySelectorAll('p').innerHTML='<i>"asdfhfo"</i>';//it gives inner contents with htmml tags too if present
// document.querySelectorAll('p').innerText='<i>"asdfhfo"</i>';//it will treate i tags as text and will print them as a string ,while innerHtml will treate like an actual i tag and wiill update the content


// document.querySelector('p').innerHTML ='<i>asdfhfo</i>'; //equaltoo sign overwrites entire content
document.querySelector('p').innerHTML +='<i>asdfhfo</i>'; //plusequaltoo sign does not overwrites  content






{/* <p id="para"></p>

<script>
    document.getElementById("para").textContent = "I love Javascript";
</script> */}

// <p id="output"></p>

// <script>
//     document.getElementById("output").innerHTML = "<em>I</em> <strong>love</strong> <span style='color: red;'>JavaScript</span>";
// </script>
// innerHTML is richer, as you can get more fanciful with it.
// But if you only aim to return text content, go ahead with textContent.
// While innerHTML provides a simple and convenient way to create HTML templates as strings and inject them into the DOM [Document Object Model], textContent only lets you create plain texts as strings.


//-------attributes-----------

// document.querySelector('#banner').id = 'whoops';

// document.querySelector('a').href;
// document.querySelector('a').title;
// document.querySelector('img').src;
// const firstLink = document.querySelector('a');
// firstLink.href;
// firstLink.getAttribute('href')
// firstLink.getAttribute('id')
// firstLink.getAttribute('class')
// firstLink.getAttribute('title')

// // 1. firstLink.href; ,  2.firstLink.getAttribute('href') /*both things gives same output 
// only difference is that firstLink.href fetches from javascript while getattribute
//  method fetches value of href from html markup*/


// firstLink.setAttribute('href', 'www.google.com')//updates href attribute
// document.querySelectorAll('input')[1]
// document.querySelectorAll('input[type="text"]')//this and above line gives same output,input[type="text"]--this is attribute selector
// const input = document.querySelectorAll('input[type="text"]');
// input.type;
// input.type = 'password';
// input.type = 'color';
// input.setAttribute('type','text')//including this and above two does the same thing but in differet way


const h2 = document.querySelector('h2')
h2.getAttribute('class')
h2.setAttribute('class' , 'purple')
h2.setAttribute('class', 'border')
let currentClass = h2.getAttribute('class')
// h2.setAttribute('class' , `{purple}  {border}` )
h2.setAttribute('class', `${currentClass}  {border}`)//this and line above it does same thing


// above way of defining and manupulating / retriving classes is annoying and hence we can
// use classList property/object


// h2.clssList
// undefined
// h2.classList
// DOMTokenList ['border', value: 'border']
// h2.classList.add('purple')
// undefined
// h2.classList.remove('border')
// undefined
// h2.classList.add('border')
// undefined
// h2.classList.contains('purple')
// true
// h2.classList.contains('tocNumber')
// false
// h2.classList.toggle('purple')//it toggles if element is existing then it will remove
// false                            it and return false ,if element is not existing then
// h2.classList.toggle('purple')    it will add it and return true and so on it repeatedly
// true                              does it.
// h2.classList.toggle('purple')
// false
// h2.classList.toggle('purple')
// true