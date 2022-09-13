const quizData = [
    {
        question : "How old is Somesh",
        a: "10",
        b: "17",
        c: "24",
        d: "100",
        correct:"c"
    },
    {
        question: "What is the most used Programming Language in 2022",
        a: "Java",
        b:"Python",
        c:"JavaScript",
        d:"C",
        answer: "a"
    },
    {
        question: "Who is the Fastest Man in Dc Universe",
        a:"Superman",
        b:"Batman",
        c:"Flash",
        d:"Green Arrow",
        answer: "c"

    },

    {
        question: "What is the National Sports of India",
        a:"Hockey",
        b:"Football",
        c:"Cricket",
        d: "BasketBall",
        answer: "a"
    },

    {
        question:" What does HTML Stands For? ",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Json Object Notation",
        d: "Application Programming Language",
        answer: "a"
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
// let answer= undefined;

let score = 0 ;



loadQuiz();



 function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];


    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
 }

 function getSelected(){
    const answerELs = document.querySelectorAll(".answer");

   answersEls.forEach(answerEl => {
        // (answer.value);
        if(answerEl.Checked){
                return answerEl.id;
        }
   });

        return undefined;
   
        

 }

 submitBtn.addEventListener("click" , ()=> {
    currentQuiz++;

   const answer =  getSelected();

   if (answer){
    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
        //TODO: show result
        alert("Test Completed");
    }


   }

   
    

 })