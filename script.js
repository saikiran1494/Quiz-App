const questions = [
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Africa",correct:false},
            {text:"Antarica",correct:false}
        ]
    },
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Blue Whale",correct:true},
            {text:"Shark",correct:false},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Shri Lanka",correct:false},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Vatican City",correct:true}
        ]
    }
];


const Question = document.querySelector("#question");
const ansBtn = document.querySelector("#answers");
const nextBtn = document.querySelector("#next");

let curQuesId = 0;
let score = 0;

function startQuiz(){
    curQuesId = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQues();
}

function resetState(){
    while(ansBtn.firstChild)
        ansBtn.removeChild(ansBtn.firstChild);
}
function showQues(){
    resetState();
    let Ques = questions[curQuesId];
    let quesNo = curQuesId + 1;
    Question.innerHTML = quesNo + ". " + questions[curQuesId].question;
    Ques.answers.forEach(ans=>{
        let button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answers.appendChild(button);
        if (ans.correct)
            button.dataset.correct = "true";
        button.addEventListener("click",selectedAns);
    });

}
function selectedAns(e){
    let selectBtn = e.target;
    let iscorrect = selectBtn.dataset.correct == "true";
    if (iscorrect){
        selectBtn.style.background = "#9aeabc";
        score++;
    }
    else
        selectBtn.style.background = "#ff9393";
    Array.from(ansBtn.children).forEach(ans=>{
        if (ans.dataset.correct == "true")
            ans.style.background = "#9aeabc";
        ans.disabled = true;
    });
    nextBtn.style.display = "block";
}

function handleQues(){
    curQuesId++;
    if (curQuesId < questions.length)
        showQues();
    else 
        showScore();
}


function showScore(){
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}`
    nextBtn.innerHTML = "Play Again";
}

nextBtn.addEventListener("click",()=>{
    if(curQuesId < questions.length)
        handleQues();
    else
        startQuiz();
});
startQuiz();
