const QuizDB = [
    {
        question: " HTML stands for:",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "none of the",
        ans: "ans3"
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: " HTML, Head, Title, Body",
        ans: "ans4"
    },
    {
        question: " Which tag do we use to define the options present in the drop-down selection lists?-",
        a: "list",
        b: "option",
        c: "dropdown",
        d: " selector",
        ans: "ans2"
    },
    {
        question: " Which of the following tag is used for inserting the largest heading in HTML?",
        a: "h1",
        b: "h6",
        c: "h4",
        d: "h2",
        ans: "ans1"
    },
    {
        question: " What is the smallest header in HTML by default?",
        a: "h1",
        b: "h6",
        c: "h4",
        d: "h1",
        ans: "ans2"
    },
    {
        question: "HTML files are saved by default with the extension? ",
        a: ".html",
        b: ".h",
        c: "index",
        d: "None",
        ans: "ans1"
    },
    {
        question: " We enclose HTML tags within",
        a: "{}",
        b: "<>",
        c: "()",
        d: "none of these",
        ans: "ans2"
    },
    {
        question: "Which attribute is used to provide a unique name to an HTML element?",
        a: "class",
        b: "name",
        c: "id",
        d: "none of these",
        ans: "ans3"
    },
    {
        question: " Which HTML element is used to define description data",
        a: "dd",
        b: "data.d",
        c: "discription",
        d: "none of these",
        ans: "ans1"
    },
    {
        question: "What tag is used to render an image on a webpage?",
        a: "img",
        b: "images",
        c: "image",
        d: "none of these",
        ans: "ans1"
    }
]

// questions js 
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answeres = document.querySelectorAll(".answere")
const showscore = document.querySelector(".scoreare")
const recomendation = document.querySelector(".recomend")
const previous = document.querySelector("#previous")
const solutions = document.querySelector(".solutions");
const buttons = document.querySelector(".box1-buttons");
const results = document.querySelector(".results")
const currentPossition=document.querySelector(".currentPossition")
let questionNumber = 0;
let score = 0
const loadquestion = () => {
    question.innerHTML = QuizDB[questionNumber].question;
    option1.innerHTML = QuizDB[questionNumber].a;
    option2.innerHTML = QuizDB[questionNumber].b;
    option3.innerHTML = QuizDB[questionNumber].c;
    option4.innerHTML = QuizDB[questionNumber].d;
    currentPossition.innerHTML= " Your Current Position : "+ Number(questionNumber + 1)  ;
}

const getAnswer = () => {
    let answere;
    answeres.forEach((currentans) => {
        if (currentans.checked) {
            answere = currentans.id
        }
    })
    return answere
    console.log(answere)
}

const unselectOption = () => {
    answeres.forEach((currentans) => currentans.checked = false)
}
loadquestion();
submit.addEventListener('click', () => {
    console.log(QuizDB[questionNumber].question)
    const checkAnswere = getAnswer()
    console.log(checkAnswere)

    if (checkAnswere == QuizDB[questionNumber].ans) {
        score++
    }
    questionNumber++
    console.log("im question number from submit" + questionNumber)
// this is for  to not select option by default
    unselectOption();
    if (questionNumber < QuizDB.length) {
        loadquestion();
    }
    else {
        showscore.innerHTML = `
    <h3>your scored will ${score}/${QuizDB.length} </h3>
<button class="try-again"  onclick="location.reload ()"> Try Again </button>
    `;
        showscore.classList.remove('scoreare')
        solutions.classList.add('remove-solutions')
        buttons.classList.add('remove-buttuns')
        results.classList.add('result')
        console.log("im score", score)
        if (score < 7) {
            console.log("im dull in html knowledge")
            recomendation.innerHTML = " 'you need to improve your html knowledge (Try Batter luck)' "
        }
        else {
            recomendation.innerHTML = " 'you Have a Good html knowledge ( Congratualtions)' "
        }
    }
})
// previous.addEventListener('click', () => {
//     if (questionNumber >=1 ){
//         questionNumber--
//     }
//     if (questionNumber < QuizDB.length) {
//         loadquestion();
//         console.log(" im in ifmst", questionNumber)
//     }
//     console.log("im minus count ", questionNumber)
// })

// countdowntimmer2

var timeLeft = 60;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft +  's'  + " Remaining Time";
        timeLeft--;
    }
    if (timeLeft == -1) {
        showscore.innerHTML = `
        <p>Time finished </p>
        <h3>Your Scored will ${score} /10  </h3>
    <button class="try-again"  onclick="location.reload ()"> Try Again </button>
        `;
        showscore.classList.remove('scoreare')
        solutions.classList.add('remove-solutions')
        buttons.classList.add('remove-buttuns')
        results.classList.add('result')
        console.log("im score", score)
        if (score < 7) {
            console.log("im dull in html knowledge")
            recomendation.innerHTML = " 'you need to improve your html knowledge (Try Batter luck)' "
        }
        else {
            recomendation.innerHTML = " 'you Have a Good html knowledge ( Congratualtions)' "
        }
        clearInterval(x);
    }
}
