//global variables
var timerEl = document.getElementById('timer');
var timeLeft = 61;
var welcomeEl = document.querySelector('#welcome-screen');
var gameOverEL = document.querySelector('#end-screen');
var startBtn = document.querySelector('#start-btn');   
var gameEl = document.querySelector('#question-display');
var actualQuestion = document.querySelector('#actual-question');
var bt1 = document.querySelector('#answer1');
var bt2 = document.querySelector('#answer2');
var bt3 = document.querySelector('#answer3');
var bt4 = document.querySelector('#answer4');


var questions = [
    {
        title: "What will print to the console? console.log('JavaScript'.length);",
        choices: ["JavaScript", "10", "1", "5"],
        answer: "10"
    },
    {
        title: "JavaScript was written in how many days?",
        choices: ["One day", "Five Days", "20 days", "Ten days"],
        answer: "Ten days"
    },
    {
        title: "What does 'DOM' stand for?",
        choices: ["Document Object Model", "Document Order Manipulation", "Domain Object Model", "Domain Object Methods "],
        answer: "Document Object Model"
    },
    {
        title: "True or False: Booleans represent one of three values.",
        choices: ["True", "Maybe", "False", "Yes"],
        answer: "False"
    },
    {
        title: "Why did the ",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
]
var currentQuestion;

//when strt btn clicked, 1st question revealed, remove welcome message
startBtn.addEventListener('click', startGame);
// console.log('Game started!');

function startGame(){
    startTimer();
welcomeEl.setAttribute('class', 'hidden');
gameEl.setAttribute('class', 'show');
//access question array and rotate through with for loop
currentQuestion = 0;
getQuestions ();


//user answers question-readchosen element, data value, compare to answer key
//choose correct answer, display next question
//incorrect answer -10 seconds from timeLeft -=10
}

//if time runs out, call gameOver function
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

//Lines 75-115 were modified from https://github.com/chelsea314/Challenge-4---Code-Quiz 
//display question and answer choices on buttons
function getQuestions (){
if (currentQuestion === questions.length) {
    gameOver();
} else {
    actualQuestion.textContent = questions[currentQuestion].title;
    bt1.textContent = questions[currentQuestion].choices[0];
    bt1.value = questions[currentQuestion].choices[0];
    bt2.textContent = questions[currentQuestion].choices[1];
    bt2.value = questions[currentQuestion].choices[1];
    bt3.textContent = questions[currentQuestion].choices[2];
    bt3.value = questions[currentQuestion].choices[2];
    bt4.textContent = questions[currentQuestion].choices[3];
    bt4.value = questions[currentQuestion].choices[3];
    // console.log(bt1.value);
    // console.log(bt2.value);
    // console.log(bt3.value);
    // console.log(bt4.value);
    }
};

//when answer click, compare user choice to correct answer
bt1.addEventListener('click', checkAnswer);
bt2.addEventListener('click', checkAnswer);
bt3.addEventListener('click', checkAnswer);
bt4.addEventListener('click', checkAnswer);


function checkAnswer(event){
    if (event.target.value === questions[currentQuestion].answer){
        document.getElementById('motivation').setAttribute('class', 'show');
        document.getElementById('motivation').textContent = 'Great job!';
    } else {
        timeLeft -= 10;
        document.getElementById('motivation').setAttribute('class', 'show');
        document.getElementById('motivation').textContent = 'Total n00b move!'
        timerEl.textContent = timeLeft;
    }
    currentQuestion++;
    getQuestions();
}


//display end screen with final score and ability to type initials
function gameOver(){
// clearInterval(timer);
gameEl.setAttribute('class', 'hidden');
gameOverEL.setAttribute('class', 'show');
document.getElementById('final-score').textContent = timeLeft;
//takes info from localstorage to display score

}

    //second hTML and dispaly username and score -read object from local storage

