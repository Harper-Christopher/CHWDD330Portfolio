//In JavaScript, a model is often represented by a class that can create new instances of an object. This will keep track of any properties the list item has, as well as any methods. In this example, we’ll create an Item class, and use the constructor function to instantiate an Item object with a name property provided as an argument to the constructor function. We also assign a reference to the form to a variable called form .

'use strict'
const form = document.forms[0];
class Item {
    constructor(name) {
        this.name = name;
    }
}

//controller. This will be responsible for adding an event listener to the form to see when the user adds information. When this happens, it will create a new instance of the model and then render the updated view.
const controller = {
    watch(form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form.name.value);
        }, false);
    },
    add(name) {
        const item = new Item(name);
        view.render(item);
    }
};

//This is used to produce an HTML fragment that shows the instance’s name (from the name property stored in the model). It is dynamically inserted into the list using DOM API methods. 
const view = {
    render(item) {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        li.innerHTML = item.name;
        list.appendChild(li);
        // reset the input field
        form.name.value = '';
    }
};


//This keeps an eye on the form and checks when it is submitted. 
controller.watch(form);

//This is just a small and simple example of the MVC pattern to give an idea of how it works. In reality, the model would contain many more properties and methods. The controller would also contain more methods for editing and deleting instances of the model. There’s also likely to be more views to display the different states of the model, and there would need to be more robust code used in order for the controller to monitor the changes that may happen in the views. Most MVC implementations also tend to be more generalized in their implementation and avoid hard-coding details about which elements are being updated on the page (such as the reference to the 'list' id in the example). Despite this, I hope the example demonstrates how to separate code into the three distinct components of MVC.