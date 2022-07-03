//global variables
var timerEl = document.getElementById('timer');
var timeLeft = 61;
var welcomeEl = document.querySelector('#welcome-screen');
var gameOverEL = document.querySelector('#end-screen');
var startBtn = document.querySelector('#start-btn');   
var gameEl = document.querySelector('#question-display');
var actualQuestion = document.querySelector('#actual-question');
var answersEl = document.querySelector('.answer-choices');
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
]

//when strt btn clicked, 1st question revealed, remove welcome message
startBtn.addEventListener('click', startGame);
// console.log('Game started!');

function startGame(){
    startTimer();
welcomeEl.setAttribute('class', 'hidden');
gameEl.setAttribute('class', 'show');
//access question array and rotate through with for loop
getQuestions ();

//user answers question-readchosen element, data value, compare to answer key
//choose correct answer, display next question
//incorrect answer -10 seconds from timeLeft -=10
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
document.getElementById('actual-question').innerHTML = questions[0].title;
document.getElementById('answer1').innerHTML = questions[0].choices[0];
document.getElementById('answer2').innerHTML = questions[0].choices[1];
document.getElementById('answer3').innerHTML = questions[0].choices[2];
document.getElementById('answer4').innerHTML = questions[0].choices[3];

// maybe useful for getting questions from Array 
// var divTags = document.querySelectorAll("div");
// for (var i = 0; i < divTags.length; i++) {
//  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
// }

// may be useful for selecting answer
// for (let crewMember in spaceship.crew) {
//     console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
//   }

}

function gameOver(){
gameEl.setAttribute('class', 'hidden');
gameOverEL.setAttribute('class', 'show');
//takes info from localstorage to display score

}

//end of quiz
    //add up uswer score
    //display input fo rmy user to type name
    //second hTML and dispaly username and score -read object from local storage

