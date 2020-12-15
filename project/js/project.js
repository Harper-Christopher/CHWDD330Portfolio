const fox_result = document.getElementById('fox_result');
const fox_btn = document.getElementById('fox_btn');

fox_btn.addEventListener('click', getRandomFox)

function getRandomFox() {
    fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data => {
            fox_result.innerHTML = `<img src="${data.image}"/>`
        })    
}

fetch("./json/foxFacts.json")
.then(response => {
    return response.json();
})
.then(data => console.log(data));

//Storing the resource URL into a const variable. 
const localJson = 'json/foxFacts.json';

//Fetch method to feed the required argument (requestURL).
fetch(localJson)
//.then method that returns a Promise which response will work with as an argument ot an anonymous function.
  .then(response => {
    return response.json();
  })
  //.then method setup to work with the converted response data in JS object format.
  .then(function (jsonObject) {
    console.table(jsonObject);

    //Store results of the converted response. 
    const foxFacts = jsonObject['foxFacts'];

//Variables to build HTML (build element)
let someFoxFacts = document.createElement('section');
let h2 = document.createElement('h2');
let orderedList = document.createElement('ol');
let factOne = document.createElement('li');
let factTwo = document.createElement('li');
let factThree = document.createElement('li');
let factFour = document.createElement('li');
let factFive = document.createElement('li');
let factSix = document.createElement('li');
let factSeven = document.createElement('li');
let factEight = document.createElement('li');
let factNine = document.createElement('li');
let factTen = document.createElement('li');
let factEleven = document.createElement('li');
let factTwelve = document.createElement('li');
let factThirteen = document.createElement('li');
let factFourteen = document.createElement('li');
let factFifteen = document.createElement('li');


//Outputting the content to the user. 
h2.textContent = foxFacts[0].foxHeading;
factOne.textContent = foxFacts[0].factOne;
factTwo.textContent = foxFacts[0].factTwo;
factThree.textContent = foxFacts[0].factThree;
factFour.textContent = foxFacts[0].factFour;
factFive.textContent = foxFacts[0].factFive;
factSix.textContent = foxFacts[0].factSix;
factSeven.textContent = foxFacts[0].factSeven;
factEight.textContent = foxFacts[0].factEight;
factNine.textContent = foxFacts[0].factNine;
factTen.textContent = foxFacts[0].factTen;
factEleven.textContent = foxFacts[0].factEleven;
factTwelve.textContent = foxFacts[0].factTwelve;
factThirteen.textContent = foxFacts[0].factThirteen;
factFourteen.textContent = foxFacts[0].factFourteen;
factFifteen.textContent = foxFacts[0].factFifteen;



// Adds node to the end of the list of children of specified parent node (card).
someFoxFacts.appendChild(h2);
someFoxFacts.appendChild(orderedList);
someFoxFacts.appendChild(factOne);
someFoxFacts.appendChild(factTwo);
someFoxFacts.appendChild(factThree);
someFoxFacts.appendChild(factFour);
someFoxFacts.appendChild(factFive);
someFoxFacts.appendChild(factSix);
someFoxFacts.appendChild(factSeven);
someFoxFacts.appendChild(factEight);
someFoxFacts.appendChild(factNine);
someFoxFacts.appendChild(factTen);
someFoxFacts.appendChild(factEleven);
someFoxFacts.appendChild(factTwelve);
someFoxFacts.appendChild(factThirteen);
someFoxFacts.appendChild(factFourteen);
someFoxFacts.appendChild(factFifteen);


// Places div.card (each card) at the end of the list (one after the other) during the for loop.
document.querySelector('div.someFoxFacts').appendChild(someFoxFacts);
});





const addFact = document.querySelector("#foxFact");
const submitButton = document.querySelector("#submitButton");
const newFoxFact = document.querySelector("#newFoxFact");

submitButton.addEventListener('click', addFacts);
function addFacts() {
  const factP = document.createElement("p");
  factP.classList.add('newFacts');
  const newFact = document.createElement("p");
    newFact.innerText = addFact.value;
    saveLocalFacts(addFact.value);
    addFact.value ="";
    newFact.classList.add("fact");
    factP.appendChild(newFact);

    //Creates button within our html with an event listener of click to activate our deleteCheck function upon clicking. Then we add the X and append it to the html.
    const trashButton = document.createElement("button");
    trashButton.addEventListener("click", deleteCheck);
    trashButton.innerHTML = "&#10060;";
    factP.appendChild(trashButton);

    //Sends lists back to the html factP. 
    newFoxFact.appendChild(factP);
}


//Function to remove local storage.
newFoxFact.addEventListener('deleteCheck', deleteCheck);
function deleteCheck() {
    const newFacts = this.parentElement;
    removeLocalFacts(newFacts);
    
        newFacts.remove();
}

// // Function that will check if local tasks are stored, if not it'll create an empty array. 
function saveLocalFacts(newFacts) {
  
    let savedFoxFacts;
    if(localStorage.getItem('savedFoxFacts') === null){
      savedFoxFacts = [];
    } else {
      savedFoxFacts = JSON.parse(localStorage.getItem("savedFoxFacts"));
    }

    //Adds a new task to the existing local storage array. 
    savedFoxFacts.push(newFacts);
    localStorage.setItem("savedFoxFacts", JSON.stringify(savedFoxFacts));
}

// Event listener to activate the getFoxFacts function. 
document.addEventListener("DOMContentLoaded", getFoxFacts);
// Function that will pull from the local storage / array of all the tasks already in the local storage to display within our html. 
function getFoxFacts () {
    let savedFoxFacts;    
    if(localStorage.getItem('savedFoxFacts') === null){
      savedFoxFacts = [];
    } else {
      savedFoxFacts = JSON.parse(localStorage.getItem("savedFoxFacts"));
    }
    savedFoxFacts.forEach(newFacts => {
        const factP = document.createElement("p");
        factP.classList.add('newFacts');
        const newFact = document.createElement("p");
        newFact.innerText = newFacts;
        newFact.classList.add("fact");
        factP.appendChild(newFact);
        
        
        //Creates button within our html with an event listener of click to activate our deleteCheck function upon clicking. Then we add the X and append it to the html.
        const trashButton = document.createElement("button");
        trashButton.addEventListener("click", deleteCheck);
        trashButton.innerHTML = "&#10060;";
        trashButton.classList.add('trashButton');
        factP.appendChild(trashButton);
    
        //Sends lists back to the html factP. 
        newFoxFact.appendChild(factP); 
    });
}

// Function to remove our local storage data from our array when we are deleting individual lines. 
function removeLocalFacts(newFacts) {
    let savedFoxFacts;
    if(localStorage.getItem('savedFoxFacts') === null){
      savedFoxFacts = [];
    } else {
      savedFoxFacts = JSON.parse(localStorage.getItem("savedFoxFacts"));
    }
    const newFactsIndex = newFacts.children[0].innerText;
    savedFoxFacts.splice(savedFoxFacts.indexOf(newFactsIndex), 1);
    localStorage.setItem("savedFoxFacts", JSON.stringify(savedFoxFacts));
}


