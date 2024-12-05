// const tweetForm = document.querySelector('tweetForm');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log('submitted the form')
    //----it tells the browser don't do the normal/default thing you do
//     Attach Event Listener: It attaches a submit event listener to the tweetForm.
// Prevent Default Behavior: When the form is submitted, the e.preventDefault(); 
//   method is called, which prevents the browser from performing the default action
//  of the event, which, in this case, is submitting the form.
// What does preventDefault() do?
// The preventDefault() method is used to prevent the default action associated with 
// an event.In the context of a form submission, it prevents the form from being 
// submitted to the server, allowing for custom handling of the form data(e.g., via 
// JavaScript for validation or AJAX submission).
// })

//------from lecture
// const input = document.querySelector('#catName');
// const shelterForm = document.querySelector('#shelterForm');
// const list = document.querySelector('#cats');
// shelterForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const catName = input.value;
//     const newLi = document.createElement('li');
//     newLi.innerText = catName;
//     list.append(newLi);
//     input.value = "";

// });

//----from exercise---

const form = document.querySelector('form');
const ul =document.querySelector('#list');
form.addEventListener('submit',function(e){
     e.preventDefault();
     const in1 =document.querySelector('#product');
     const in2 =document.querySelector('#qty');
     const product = in1.value;
     const qty= in2.value;
     const list = document.createElement('li');
     list.innerText=`${qty} ${product}`;
     ul.appendChild(list);
     
     
});


//------logic--------
//default behaviour of the form submission is it submits the data to the url specified 
//in action attribute ,submitting an http request with the form data
    //input.value---it's going to tell us what's currently in that form input
// (value is an attribute of input)
    

// The default behavior of a form in HTML depends on several factors, such as the form method and action attributes:

// Form Submission: When a form is submitted, the default action is for the browser to send the form data to the URL s
// specified in the action attribute, using the HTTP method specified in the method attribute. If no action is provided,
//  the form will submit the data to the same URL as the current page. By default, the method is set to GET, meaning the form data is appended to the URL in the form of a query string. 
//If the method is POST, the form data is sent in the body of the HTTP request [5].

// Page Refresh: Upon form submission, the page usually refreshes, and the data is sent to the server for processing [1]].

// Button Behavior: By default, the <button> inside the form will act as a submit button. However, if the type is not specified, the button will default to type="submit" [3]].

// To prevent this default behavior (e.g., to prevent page refresh or form submission), JavaScript's event.preventDefault() method can be used [5].

//------------------prevvent default mehtod ---------------------------------------------
//The e.preventDefault() method in JavaScript is used to stop the default behavior of an event from occurring. 
// In the case of form submission, calling e.preventDefault() prevents the form from being submitted in 
// the usual manner (i.e., the page will not reload or navigate to the URL specified in the action attribute of the form).
// This allows developers to handle form submissions via JavaScript (such as validating the form or sending the data 
// via AJAX) instead of letting the browser perform the default submission. It is commonly used when you need to process 
// the form asynchronously without causing a page refresh [1] [2] [5].


{/* <body>
<form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <button type="submit">Submit</button>
    </form>

    <script>
        // Attach an event listener to the form's submit event
        document.getElementById('myForm').addEventListener('submit', function(e) {
            // Prevent the default form submission (page reload)
            e.preventDefault();

            // Custom form submission logic (could include validation or AJAX)
            const name = document.getElementById('name').value;

            if (name) {
                console.log(`Form submitted with name: ${name}`);
                // Here you could send the data via AJAX or process it as needed
            } else {
                console.log('Name is required!');
            }
        });
    </script> */}