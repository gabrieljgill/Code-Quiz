const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
function startGame() {
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classlist.add('hide')
    while (answerButtonsElement.firstChile) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer() {

}

const questions = [
    {
        q: 'Is Javascript useful?', 
          a: [
            { text: 'true', correct: true},
            {text: 'false', correct: false}    
            ],      
        q: 'CSS is used to style the webpage?',
          a: [
             {text: 'true', correct: true},
             {text: 'false', correct: false}
            ],  
        q: 'CSS is used to style the webpage?', 
          a: [
            {text: 'true', correct: true},
            {text: 'false', correct: false}
            ],   
        q: 'HTML is used for the behind the scenes of the webpage?', 
        a: [
            {text: 'false', correct: true},
            {text: 'true', correct: false}
            ]
        },
    ]
    function countdown() {
        var timeLeft = 60;
    }

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
          timerEl.textContent = timeLeft + ' time remaining';
          timeLeft--;
        } else {
          timerEl.textContent = '';
          clearInterval(timeInterval);}
        }, 60000)