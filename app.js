const questions = [
    {
        question:"What is the biggest number?",
        answers: [
            {text:"8", correct:"false"},
            {text:"9", correct:"true"},
            {text:"3", correct:"false"},
            {text:"2", correct:"false"}
        ],
        
    },
    {
    question:"What is the biggest number?",
    answers: [
        {text:"8", correct:"false"},
        {text:"9", correct:"true"},
        {text:"3", correct:"false"},
        {text:"2", correct:"false"}
    ],
    
},
{
    question:"What is the biggest number?",
    answers: [
        {text:"8", correct:"false"},
        {text:"9", correct:"true"},
        {text:"3", correct:"false"},
        {text:"2", correct:"false"}
    ],
    
},
{
    question:"What is the biggest number?",
    answers: [
        {text:"8", correct:"false"},
        {text:"9", correct:"true"},
        {text:"3", correct:"false"},
        {text:"2", correct:"false"}
    ],
    
}
];
const questionEle = document.getElementById("question");
const nextButton = document.getElementById("btn-next");
const answerButton = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestions();
}

function showQuestions(){
    resetPrev();
    let currentQuestion = questions[currentQuestionIndex];
    let Qno = currentQuestionIndex + 1;
    questionEle.innerHTML = Qno + ". " + currentQuestion.question;
    console.log(Qno)

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", e => {
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
                selectedBtn.classList.add("correct");
                score++;
            }
            else {
                selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButton.children).forEach(button => {
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;
            }
            );
            nextButton.style.display = "block";
        });
    });
}
function resetPrev(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showScore(){
    resetPrev();
    questionEle.innerHTML = `you scored ${score} out of  ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block"
}

function handleNext(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNext();
    }
    else {
        startQuiz();
    }
})

startQuiz();