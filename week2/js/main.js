function calculator(operation) {
    operation();
}

function display(id, value) {
    document.getElementById(id).innerHTML = value;
}

function run() {
    let textBox = document.getElementById("textstuff").value;
    display("display", textBox);
}

function sum() {
    let textBox2 = document.getElementById("pt2").value;
    let y = 0;
    for (let i = 0; i <= textBox2; i++) {
        y += i;
    }         
    display("display2", y);
}

function subtract() {
    let x = document.getElementById("subtract").value;
    let y = x;
    for (let i = x; i > 0; i--) {
        y -= i;
    }         
    display("display3", y);
}
function add() {
    let textBox = document.getElementById("textstuff").value;
    let textBox2 = document.getElementById("pt2").value;
    let z = Number(textBox) + Number(textBox2);
    display("display4", z);
}

/*
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);
*/