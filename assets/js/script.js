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

var welcomeEl = document.getElementsByClassName(".welcome");
var gameEl = document.getElementsByClassName(".play-game")
var timeLeft = 60;

var questions = [
    {
        title: "Question will go in here 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 2",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 3",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 4",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 5",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 6",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 7",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 8",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 9",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        title: "Question will go in here 10",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
]

function timer(){
//start when addeventLister clicks start button
//-5 seconds if answer incorrect
//continue to countdown normally if correct
//if timer === 0, call gameOver Function
}


function playGame(){
//start timerFunction
//if answer all questions, call gameOverFunction
}

function gameOver(){
//takes info from localstorage to display score
//link to high school page?
}