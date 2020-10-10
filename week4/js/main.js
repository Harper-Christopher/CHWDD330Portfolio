// index notation to return the first (and only) form object
const form = document.forms[0];

//Equivalent to the above.
//const form = document.getElementsByTagname('form')[0];

//Instead of using a numerical index, we can use the name attribute to identify a form:
//const form = document.forms.search;

// required if the form’s name attribute contains any invalid characters, such as spaces or dashes
//const form = document.forms['search'];

//A form object also has a method called elements that returns an HTML collection of all the elements contained in the form. In this case the form contains two controls: an input element and a button element:
//const [input,button] = form.elements;

//We can also access the form controls using their 'name' attributes as if it was a property of the form object. So, for example, the input field has a name attribute of searchInput and can be accessed using this code:
//const input = form.searchInput

//The square bracket notation can also be used instead (again, this is useful if there are any naming clashes with existing property and method names, or if the name is an invalid variable name):
//const input = form['searchInput']

const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);

input.addEventListener('blur', () => alert('blurred'), false);

input.addEventListener('change', () => alert('changed'), false);

// Submitting a Form
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
}


// Stopping the form from being submitted to a URL.
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}


// Report back what the user has searched for.
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}


// Modify the inputs value.
input.value = 'Search Here';


// Fix for text remaining in input field.
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);