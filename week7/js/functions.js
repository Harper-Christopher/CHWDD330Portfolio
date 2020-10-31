//the sayHello() function refers to an unspecific object called this that has a property called name
function sayHello(){
    return `Hello, my name is ${ this.name }`;
}

//We can create some objects that have a name property, then use the call() method to invoke the sayHello() function, providing each object as an argument. This will then take the value of this in the function
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
sayHello.call(clark);
 //<< 'Hello, my name is Clarke'
sayHello.call(bruce);
 //<< 'Hello, my name is Bruce'

 //If a function doesn’t refer to an object as this in its body, it can still be called using the call() method, but you need provide null as its first argument. For example, we could call the square() function using the call() method
 square.call(null, 4)
// << 16

//The apply() method works in the same way, except the arguments of the function are provided as an array, even if there is only one argument
square.apply(null, [4])
// << 16

//There is nothing to stop you adding your own properties to functions in the same way that you can add properties to any object in JavaScript. For example, you could add a description property to a function that describes what it does
square.description = 'Squares a number that is provided as an argument'
// << 'Squares a number that is provided as an argument'v

//If a function takes some time to compute a return value, we can save the result in a cache property. Then if the same argument is used again later, we can return the value from the cache, rather than having to compute the result again. For example, say squaring a number was an expensive computational operation that took a long time. We could rewrite the square() function so it saved each result in a cache object that is a property of the function
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

//If we try calling the function a few times, we can see that the cache object stores the results:
square(3);
//  << 9
square(-11);
//  << 121
square.cache;
//  << {"3": 9, "-11": 121}

//AnImmediately Invoked Function Expression– or IIFE – (pronounced 'iffy') is an anonymous function that, as the name suggests, is invoked as soon as it’s defined. This is easily achieved by placing parentheses at the end of the function definition (remember we use parentheses to invoke a function). The function also has to be made into an expression, which is done by placing the whole declaration inside parentheses
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();
    //  << 'Hello World'


//There is no way to remove a variable from a scope once it’s been declared. If a variable is only required temporarily, it may cause confusion if it’s still available later in the code. Even worse, the name of the variable may clash with another piece of code (an external JavaScript library, for example) resulting in errors. Placing any code that uses the temporary variable inside an IIFE will ensure it’s only available while the IIFE is invoked, then it will disappear. The example that follows uses an IIFE to swap the value of two global variables, a and b . This process requires the use of a temporary variable, called temp , which only exists while the IIFE is invoked:
let a = 1;
let b = 2;
(()=>{
    const temp = a;
    a = b;
    b = temp;
})();
a;
//  << 2
b;
//  << 1
console.log(temp);
//  << Error: "temp is not defined"


//Note that this technique is not needed to swap the values of two variables in ES6, as destructuring can be used, as shown below:
let [a,b] = [1,2];
[a,b] = [b,a];
a;
//  << 2
b;
//  << 1


//An IIFE can be used to set up any initialization code that there’ll be no need for again. Because the code is only run once, there’s no need to create any reusable, named functions, and all the variables will also be temporary. An IIFE will be invoked once, and can set up any variables, objects and event handlers when the page loads. The following example logs a welcome message to the console, then eliminates all the temporary variables used in putting the message together:
(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();
//  << 'Welcome back Peter Parker. Today is Tuesday'


//Note that much of this can be achieved in ES6 by simply placing the code inside a block. This is because variables have block scope when const or let are used, whereas in previous versions of JavaScript, only functions maintained the scope of variables. The example above would work just as well using the following code:
{
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}
//  << 'Welcome back Peter Parker. Today is Tuesday'


//One of the problems with simply placing 'use strict' at the beginning of a file is that it will enforce strict mode on all the JavaScript in the file, and if you’re using other people’s code, there’s no guarantee that they’ve coded in strict mode. To avoid this, the recommended way to use strict mode is to place all your code inside an IIFE
(function() {
    'use strict';
// All your code would go inside this function
})();


//An IIFE can be used to enclose a block of code inside its own private scope so it doesn’t interfere with any other part of the program. Using IIFEs in this way means code can be added or removed separately. The example shows two blocks, A and B, that are able to run code independently of each other:
//Notice that both code blocks include a variable called name , but the modules don’t interfere with each other. This is a useful approach for separating parts of a program into discrete sections, especially for testing purposes.
(function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());
    (function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());
//  <<  Hello from Block A
   //   Hello from Block B



//The dynamic nature of JavaScript means that a function is able to not only call itself, but define itself, and even redefine itself. This is done by assigning an anonymous function to a variable that hasthe same name as the function.
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}


//This logs a message in the console, then redefines itself to log a different message in the console. When the function has been called once, it will be as if it was defined like this:
function party() {
    console.log('Been there, got the T-Shirt');
}

//Every time the function is called after the first time, it will log the message 'Been there, got the T-Shirt':
party();
//  << 'Wow this is amazing!'
party();
//  << 'Been there, got the T-Shirt'
party();
//  << 'Been there, got the T-Shirt'


//If the function is also assigned to another variable, this variable will maintain the original function definition and not be rewritten. This is because the original function is assigned to a variable, then within the function, a variable with the same name as the function is assigned to a different function. You can see an example of this if we create a variable called beachParty that is assigned to the party() functionbeforeit is called for the first time and redefined:
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}
const beachParty = party; // note that the party function has not been invoked
beachParty(); // the party() function has now been redefined, even though it hasn't been called explicitly
//  << 'Wow this is amazing!'
party(); 
//  << 'Been there, got the T-Shirt'
beachParty(); // but this function hasn't been redefined
//  << 'Wow this is amazing!'
beachParty(); // no matter how many times this is called it will remain the same
//  << 'Wow this is amazing!'


//If any properties have previously been set on the function, these will be lost when the function redefines itself. In the previous example, we can set a music property, and see that it no longer exists after the function has been invoked and redefined:
function party() {
    console.log('Wow this is amazing!');
    party = function(){
    console.log('Been there, got the T-Shirt');
    }
}
party.music = 'Classical Jazz'; // set a property of the function
party();
//  << "Wow this is amazing!"
party.music; // function has now been redefined, so the property doesn't exist
//  << undefined


//This technique can be used with the feature detection that we discussed in the last chapter to create functions that rewrite themselves, known as init-time branching. This enables the functions to work more effectively in the browser, and avoid checking for features every time they’re invoked.
function ride(){
    if (window.unicorn) { 
        ride = function(){
        // some code that uses the brand new and sparkly unicorn methods
        return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
        // some code that uses the older pony methods
        return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}


//After we’ve checked whether the window.unicorn object exists (by checking to see if it’s truthy), we’ve rewritten the ride() function according to the outcome. Right at the end of the function, we call it again so that the rewritten function is now invoked, and the relevant value returned. One thing to be aware of is that the function is invoked twice the first time, although it becomes more efficient each subsequent time it’s invoked. Let’s take a look at how it works:
ride(); // the function rewrites itself, then calls itself
//  << 'Riding on a pony is still pretty good'.


//Once the function has been invoked, it’s rewritten based on the browser’s capabilities. We can check this by inspecting the function without invoking it:
ride
<< function ride() {
    return 'Riding on a pony is still pretty good';
    }


//A recursive function is one that invokes itself until a certain condition is met. It’s a useful tool to use when iterative processes are involved. A common example is a function that calculates thefactorialof a number:
//This function will return 1 if 0 is provided as an argument (0 factorial is 1), otherwise it will multiply the argument by the result of invoking itself with an argument of one less. The function will continue to invoke itself until finally the argument is 0 and 1 is returned. This will result in a multiplication of 1, 2, 3 and all the numbers up to the original argument.
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


//As you can see, the sequence becomes stuck in a loop at the end, cycling through “4,2,1”. The Collatz Conjecture states that every positive integer will create a sequence that finishes in this loop. This has been verified for all numbers up to 5 × 2⁶⁰, but there is no proof it will continue to be true for all the integers higher than this. To test the conjecture, we can write a function that uses recursion to keep invoking the function until it reaches a value of 1 (because we want our function to avoid being stuck in a recursive loop at the end!):
//This function takes a number as a parameter, as well as another parameter called sequence , which has a default value of an array containing the first parameter. The second parameter is only used when the function calls itself recursively.
//The first thing the function does is tests to see if n has a value of 1. If it does, the function returns a message to say how many steps it took. If it hasn't reached 1, it checks if the value of n is even (in which case it divides it by 2), or odd, in which case it multiplies by 3 and then adds 1. The function then calls itself, providing the new value of n and the new sequence as arguments. The new sequence is constructed by placing the old sequence and the value of n inside a new array and applying the spread operator to the old sequence.
function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }
    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }
    return collatz(n,[...sequence,n]);
}


//Let's see what happens to the number 18:
collatz(18);
//  << 'Sequence took 21 steps. It was 18,9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1'


//Callbacks can be used to facilitate event-driven asynchronous programming. JavaScript is a single-threaded environment, which means only one piece of code will ever be processed at a time. This may seem like a limitation, but non-blocking techniques can be used to ensure that the program continues to run. Instead of waiting for an event to occur, a callback can be created that’s invoked when the event happens. This means that the code is able to run out of order, orasynchronously. Events can be DOM events, such as the click and keyPress that we looked at in Chapter 7, but they can also be events such as the completion of a file download, data returned from a database, or the result of a complex operation. By using callbacks, we ensure that waiting for these tasks to complete doesn't hold up the execution of other parts of the program. Once the task has been completed, the callback will be invoked before returning to the rest of the program.
//a function called wait() that accepts a callback. To simulate an operation that takes some time to happen, we can use the setTimeout() function to call the callback after a given number of seconds:
function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}


//Now let’s create a callback function to use:
function selfDestruct(){
    console.log('BOOOOM!');
}

//If we invoke the wait() function then log a message to the console, we can see how JavaScript works asynchronously:
wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');
//  << 'This tape will self-destruct in five seconds ... '
//  << 'Hmmm, should I accept this mission or not ... ? '
//  << 'BOOOOM!'

//When the wait() function is invoked, any code inside it is run, so the message 'This tape will self destruct in five seconds ... ' is displayed. The setTimeout() function is asynchronous, which means that the callback provided as an argument is placed on top of a stack that gets cleared once the rest of the program has run. This means that control is handed back to the program and the next line in the program is run, which displays the message ‘Hmmm, should I accept this mission or not ... ?’ Then, after five seconds, the callback is retrieved from the stack and invoked. This demonstrates that the setTimeout() function did not block the rest of the program from running. 
//Remember, though, that JavaScript is still single-threaded, so only one task can happen at once. If an event only takes a small amount of time to happen, it will still have to wait until other parts of the program have executed before the callback is invoked. For example, let’s see what happens if we set the waiting time to be zero seconds:
wait('This tape will self-destruct immediately ... ', selfDestruct, 0);
console.log('Hmmm, should I accept this mission or not ... ?');
//  << 'This tape will self-destruct immediately ... '
//  << 'Hmmm, should I accept this mission or not ... ?'
//  << 'BOOOOM!'


//A promise is created using a constructor function. This takes a function called anexecutoras an argument. The executor initializes the promise and starts the asynchronous operation. It also accepts two functions as arguments: the resolve() function is called if the operation is successful, and the reject() function is called if the operation fails. 
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});


//promise that uses the dice object
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}


//a promise that uses the dice.roll() method as the asynchronous operation and considers rolling a 1 as a failure, and any other number as a success:
//This creates a variable called promise that holds a reference to the promise. The promise calls the roll() method and stores the return value in a variable called n . Next, we use an if-else block to specify the conditions for success (rolling any number higher than 1) and failure (rolling a 1).
const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
});


//Once a promise has been settled, the then() method can be used to deal with the outcome. This method accepts two arguments. The first is afulfilment functionthat’s called when the promise is resolved. Any data returned from the resolve() function will be passed along to this function. The second argument is a rejection function that’s called if the promise is rejected. Similar to the fulfilment function, the rejection function receives any data returned from the reject() function.
//In the case of our dice example, both functions will receive the value of the number rolled. Let's have a look at how we could deal with that:
//The first argument is simply a function that logs a celebratory message to the console, stating the number rolled (this is passed to the then() method as the variable result ). The second argument logs an annoyed message and, again, states the number rolled.
promise.then( result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`) );


//Alternatively, the catch() method can be used to specify what to do if the operation fails instead:
promise.catch( result => console.log(`Drat! ... I rolled a ${result}`));


//The then() and catch() methods can be chained together to form a succinct description of how to deal with the outcome of the promise:
promise.then( result => console.log(`I rolled a ${result}`) )
            .catch( result => console.log(`Drat! ... I rolled a ${result}`) );


//
const dice = {
    sides: 6,
        roll() {
            return Math.floor(this.sides * Math.random()) + 1;
        }
    }
    console.log('Before the roll');
    const roll = new Promise( (resolve,reject) => {
        const n = dice.roll();
        if(n > 1){
            setTimeout(()=>{resolve(n)},n*200);
        } else {
            setTimeout(()=>reject(n),n*200);
        }
    });
    roll.then(result => console.log(`I rolled a ${result}`) )
    .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
    console.log('After the roll');



//Async functions were added to the ES2017 specification. These functions are preceded by the async keyword and allow you to write asynchronous code as if it was synchronous. This is achieved by using the await operator before an asynchronous function. This will wrap the return value of the function in a promise that can then be assigned to a variable. The next line of code is not executed until the promise is resolved.
//The example below shows how the loadGame() function can be written an async function:
async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo (user.id);
        // load the game using the returned info
    }
    catch (error){
        throw error;
    }
}



//Callbacks can be used to build more generalized functions. Instead of having lots of specific functions, one function can be written that accepts a callback. For example, let's create a function that returns a random integer between two values that are provided as arguments, a and b, or if only 1 argument is provided, it will return a random integer between 1 and the argument provided:
function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    } 
    return Math.floor((b-a+1) * Math.random()) + a;
}
random(6);
//<< 4
random(10,20);
//<< 13



//This is an example of an abstraction, as it wraps all the logic cleanly away inside the function.

//We could refactor this function to make it more generic by adding a callback parameter, so a calculation is performed on the random number before it’s returned:
function random(a,b,callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
        const result = Math.floor((b-a+1) * Math.random()) + a
    if(callback) {
        result = callback(result);
    }
    return result;
}


//Now we have a function where more flexibility can be added using a callback. For example, we can use the square() function from earlier in the chapter to produce a random square number from one to 100:
function square(n) {
    return n*n;
}
random(1,10,square);
//<< 49

//Or a random even number from two to ten:
random(1,5, (n) => 2 * n );
//<< 8


//We've just seen that functions can accept another function as an argument (a callback), but they can also return a function.
//The example below shows a function called returnHello() that returns a 'Hello World' function:
function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}


//This might seem a bit pointless, but let's now take it a step further and use this technique to create a generic 'greeter' function that takes a particular greeting as a parameter, then returns a more specific greeting function:
function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}
const englishGreeter = greeter();
englishGreeter();
//<< Hello
const frenchGreeter = greeter('Bonjour');
frenchGreeter();
//<< Bonjour
const germanGreeter = greeter('Guten Tag');
germanGreeter();
//<< Guten Tag


//
//Aclosureis formed when the inner function is returned by the outer function, maintaining access to any variables declared inside the enclosing function.
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}


//A closure is formed when a function returns another function that then maintains access to any variables created in the original function’s scope. In the following example, two variables, a and b , are created in the scope of the closure() function. This then returns an anonymous arrow function that maintains access to the variables a and b even after the closure() function has been invoked:
function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}


//Now we can create a new function by invoking the closure() function and assigning the return value to a variable called toFahrenheit :
const toFahrenheit = closure();


//This new function can then be invoked with its own argument, but the values of a and b from the original function are still kept 'alive':
toFahrenheit(30);
//<< 86



//Closures not only haveaccessto variables declared in a parent function's scope, they can also change the value of these variables. This allows us to do things like create a counter() function like the one in the example below:
function counter(start){
    let i = start;
    return function() {
        return i++;
    }
}


//This function starts a count using the variable i . It then returns a function that uses a closure that traps and maintains access to the value of i . This function also has the ability to change the value of i , so it increments i by one every time it's invoked. The reference to the variable i that is defined in the original function is maintained in the new function via a closure.
//We can create a counter by assigning the return value of the counter() function to a variable:
const count = counter(1);


//The variable count now points to a function that has full access to the variable i that was created in the scope of the counter() function. Every time we invoke the count() function, it will return the value of i and then increment it by 1:
count();
//<< 1
count();
//<< 2


//we can create a generator to produce a Fibonacci-style number series (a sequence that starts with two numbers and the next number is obtained by adding the two previous numbers together), using the following code:
function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}

//To create a generator object based on this function, we simply assign a variable to the function, and provide it with two starting numbers as arguments:
const sequence = fibonacci(1,1);

//The generator object is now stored in the sequence variable. It inherits a method called next() , which is then used to obtain the next value produced by the yield command:
sequence.next();
//<< 2
sequence.next();
//<< 3
sequence.next();
//<< 5


//It’s also possible to iterate over the generator to invoke it multiple times:
for (n of sequence) {
    // stop the sequence after it reaches 100
    if (n > 10) break;
    console.log(n);
}
//<< 8
//<< 13
//<< 21
//<< 34
//<< 55
//<< 89