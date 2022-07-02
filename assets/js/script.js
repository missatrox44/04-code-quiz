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
var welcomeEl = document.querySelector('#welcome-screen');
var startBtn = document.querySelector('#start-btn');   
var gameEl = document.querySelector('#question-display');
var actualQuestion = document.querySelector('#actual-question');
var bt1 = document.querySelector('#answer1');
var bt2 = document.querySelector('#answer2');
var bt3 = document.querySelector('#answer3');
var bt4 = document.querySelector('#answer4');

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
    startTimer();
welcomeEl.setAttribute('class', 'hidden');
gameEl.setAttribute('class', 'show');
document.getElementById('actual-question').innerHTML = 'question here'
}

function startTimer(){
    timer = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0){
        clearInterval(timer);
        gameOver();
         }
    } , 1000);
}


//if answer all questions, call gameOverFunction


function getQuestions (){
//modify actualQuestions from questions Array

}

function gameOver(){
//takes info from localstorage to display score
//link to high school page?
}

