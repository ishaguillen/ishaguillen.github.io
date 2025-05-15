const quizData = [
    {
        question: "If MOMENTUM is a vector quantity, What is the term that is equal to the change of momentum?",
        a: "Elastic Collision",
        b: "Collision",
        c: "Momentum",
        d: "Impulse",
        correct: "d",
    },
    {
        question: "Impulse is a product of_____",
        a: "Mass and velocity",
        b: "Force and time",
        c: "Force and velocity",
        d: "Force and mass",
        correct: "b",
    },
    {
        question: "A baseball is struck by a bat with a force of 4000N for a duration of 0.50 s. what is the change in momentum (impulse) of the baseball? (You may use calculator provided.)",
        a: "2000 Ns",
        b: "20000 Ns",
        c: "4000 Ns",
        d: "40000 Ns",
        correct: "a",
    },
    {
        question: "Momentum is a product of____",
        a: "Moving body's mass and velocity",
        b: "Resting body's mass and velocity",
        c: "Time and moving body's mass",
        d: "Force and moving body's mass",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button id="yuhs" onclick="location.reload()">Reload</button>
           `
       }
    }
})
function del(){  
    var value=document.getElementById('screen').value;  
    document.getElementById('screen').value=value.substr(0,value.length-1);  
}  
var two=document.getElementById('two');  
two.addEventListener('click',function(){  
    var body=document.querySelector('body');  
    var toggle=document.getElementById('circle');  
    body.classList.add('active1');  
    body.classList.remove('active2');  
    toggle.style.left='36%';  
})  
var one=document.getElementById('one');  
one.addEventListener('click',function(){  
    var body=document.querySelector('body');  
    var toggle=document.getElementById('circle');  
    body.classList.remove('active1');  
    body.classList.remove('active2');  
    toggle.style.left='0';  
})  
var three=document.getElementById('three');  
three.addEventListener('click',function(){  
    var body=document.querySelector('body');  
    var toggle=document.getElementById('circle');  
    body.classList.add('active2');  
    body.classList.remove('active1');  
    toggle.style.left='65%';  
})  