const array = [
    {
        "question": "What does HTML stand for?",
        "option1": "Hyper Text Markup Language",
        "option2": "High Tech Modern Language",
        "option3": "Hyper Transfer Markup Language",
        "option4": "Home Tool Markup Language",
        "correct": "Hyper Text Markup Language"
    },
    {
        "question": "Which of the following is used to apply styles to HTML elements?",
        "option1": "JavaScript",
        "option2": "CSS",
        "option3": "HTML",
        "option4": "PHP",
        "correct": "CSS"
    },
    {
        "question": "Which JavaScript function is used to select an HTML element by its ID?",
        "option1": "getElementByTag",
        "option2": "getElementByName",
        "option3": "getElementById",
        "option4": "getElementByClass",
        "correct": "getElementById"
    },
    {
        "question": "In CSS, which property is used to change the text color of an element?",
        "option1": "font-color",
        "option2": "text-color",
        "option3": "color",
        "option4": "font-text",
        "correct": "color"
    },
    {
        "question": "What is the purpose of the <script> tag in HTML?",
        "option1": "To define styles for an HTML document",
        "option2": "To create a hyperlink to another web page",
        "option3": "To include JavaScript code in an HTML document",
        "option4": "To add images to an HTML document",
        "correct": "To include JavaScript code in an HTML document"
    }
]

const start_btn = document.querySelector(".start-btn");
const next_btn = document.getElementById("next");
const checked = document.getElementById("checked");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
let count = 0;
let result = 0;
let time = 0;
let oneclick = true;
let answer;
let wrong;
let intervalID;


option1.addEventListener("click", function () {
    if(oneclick){
    answer = option1.innerText;
    option1.style.backgroundColor = "rgb(240, 130, 52)"
    waiting(count);
    oneclick=false;
}
})

option2.addEventListener("click", function () {
    if(oneclick){
    answer = option2.innerText;
    option2.style.backgroundColor = "rgb(240, 130, 52)"
    waiting(count);
    oneclick=false;
    }
})

option3.addEventListener("click", function () {
    if(oneclick){
    answer = option3.innerText;
    option3.style.backgroundColor = "rgb(240, 130, 52)"
    waiting(count);
    oneclick=false;
}
})

option4.addEventListener("click", function () {
    if(oneclick){
    answer = option4.innerText;
    option4.style.backgroundColor = "rgb(240, 130, 52)"
    waiting(count);
    oneclick=false;
}
})


const timeupdate = () => {
    time++;
    document.getElementById("time").innerText = `Time : ${time} sec`;
}


const changer = () => {

    checked.style.visibility = "hidden";

    document.getElementById("question").innerText = array[count].question;
    document.getElementById("option1").innerText = array[count].option1;
    document.getElementById("option2").innerText = array[count].option2;
    document.getElementById("option3").innerText = array[count].option3;
    document.getElementById("option4").innerText = array[count].option4;
    console.log(count)
    

    count++;

}



const waiting = (count) => {
        if (array[count-1].correct === answer) {
            checked.innerText = "Correct !";
        }
        else {
            checked.innerText = "Incorrect !";
            result += 10;
        }
        checked.style.visibility = "visible";
}

start_btn.addEventListener("click", function () {
    document.getElementById("question-box").style.height = "25rem"
    document.getElementsByClassName("start-box")[0].style.display = "none";
    document.getElementById("question-box").style.display = "flex";

    intervalID = setInterval(timeupdate, 1000);
    changer();
})

next_btn.addEventListener("click", function () {
    if (count === 4) {

        changer();
        option1.style.backgroundColor = "rgb(13, 230, 165)"
        option2.style.backgroundColor = "rgb(13, 230, 165)"
        option3.style.backgroundColor = "rgb(13, 230, 165)"
        option4.style.backgroundColor = "rgb(13, 230, 165)"
        next_btn.innerText = "Submit";
        oneclick = true;
    }
    else if (count === 5) {
        document.getElementById("question-box").style.display = "none";
        document.getElementsByClassName("result")[0].style.display = "flex";
        document.getElementById("display").innerText = `Your Time : ${result + time}`;
        document.getElementById("wrong").innerText = `You answered ${result/10} wrong , therefore ${result} seconds added in your time.`
        clearInterval(intervalID);
    }
    else {
        changer();
        option1.style.backgroundColor = "rgb(13, 230, 165)"
        option2.style.backgroundColor = "rgb(13, 230, 165)"
        option3.style.backgroundColor = "rgb(13, 230, 165)"
        option4.style.backgroundColor = "rgb(13, 230, 165)"
        oneclick=true;
    }
});
