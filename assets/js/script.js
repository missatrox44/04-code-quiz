//landing page with start button, high score page link, 0timer
//when start button is clicked, remove welcome message and append question 1
    //addeventlistenr to button
        //activity12
//start timer
//user answers question-readchosen element, data value, compare to answer key
//if correct, next question
//if incorrect, subtract 10 seconds from timer
//end of quiz
    //add up uswer score
    //display input fo rmy user to type name
    //second hTML and dispaly username and score -read object from local storage


var timerEl = document.getElementById('timer');
var timeLeft = 61;
var startTimer;
var welcomeEl = document.querySelector('#welcome-screen');
    var startBtn = document.querySelector('#start-btn');
    var gameEl = document.getElementsByClassName('question-display');


var bt1 = document.getElementById('answer1');
var bt2 = document.getElementById('answer2');
var bt3 = document.getElementById('answer3');
var bt4 = document.getElementById('answer4');

var questions = [
    {
        title: "Question will go in here 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 2",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer4"
    },
    {
        title: "Question will go in here 3",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        title: "Question will go in here 4",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer3"
    },
    {
        title: "Question will go in here 5",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 6",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer3"
    },
    {
        title: "Question will go in here 7",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer4"
    },
    {
        title: "Question will go in here 8",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 9",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        title: "Question will go in here 10",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
]

startBtn.addEventListener('click', startGame);

function startGame(){
welcomeEl.setAttribute('class', 'hidden');
gameEl.setAttribute('class', ' ');
    // start timerFunction
startTimer = setInterval(timer(), 1000)
timerEl.innerHTML = timeLeft;
}

function timer(){
//start when addeventLister clicks start button
    timeLeft--;
    timerEl.innerHTML = timeLeft;
//-10 seconds if answer incorrect
    if (timeLeft === 0){
        gameOver();
    }
//continue to countdown normally if correct
//if timer === 0, call gameOver Function
}



//if answer all questions, call gameOverFunction


function getQuestions (){

}

function gameOver(){
//takes info from localstorage to display score
//link to high school page?
}

//use set attribute to hide and reveal 
//or remove attr

//