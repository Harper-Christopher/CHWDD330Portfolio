const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);


function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

hero.realName = form.realName.value;

form.powers;

/*hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}*/

//Same as above
hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);


//Note that a checkbox can be set to true using JavaScript by setting its 'checked' property to true . For example, we could make the first checkbox in the list of powers appear checked with this line of code:
document.forms.hero.powers[0].checked = true;


//access an HTML collection of all the radio buttons in that group using the property of the same name 
form.category;


//The value of the radio button that was selected is stored in form.category.value
hero.category = form.category.value;


// So the following line of code would check the 'antihero' radio button, but the 'hero' and 'villain' radio buttons would then be unchecked:
//form.type[2].checked = true;


// JavaScript to process the age information
hero.age = form.age.value;


//The 'name' attribute of the <select> element is used to access it in JavaScript as a property of the form object:
form.city;


//Each selection object has a value property that’s equal to the 'value' attribute of the <option> tag that was selected.
hero.city = form.city.value;


//It is also possible to find out the index of the option that has been selected, using the selectedIndex property.
form.city.options[form.city.selectedIndex].text


//the following code returns the text from the first option:
form.city.options[0].text
<< "Choose a City"


//The text entered into this text area can now be added as a property of the hero object
hero.origin = form.origin.value;


//It is also possible to change the value in the form directly:
form.origin.value = 'Born as Kal-El on the planet Krypton...';


//It is also possible to implement custom form validation using JavaScript. For example, say we wanted to exclude any superhero names that begin with an 'X'. This is not a standard form of validation, so we’d have to write our own
form.addEventListener('submit',validate,false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}