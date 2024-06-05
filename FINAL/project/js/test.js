const DATA=[
    {
        question: '1. Excuse me, how ___ your last name?',
        answers: [
            {
                id: '1',
                value: 'A. You spell',
                correct: true,
            },
            {
                id: '2',
                value: 'B. Does you spell',
                correct: false,
            },
            {
                id: '3',
                value: 'C. Do you spell',
                correct: false,
            },
            {
                id: '4',
                value: 'D. Are you spell',
                correct: false,
            },
        ]
    },
    {
        question: '2. Mrs Walsh is away ___ holiday this week',
        answers: [
            {
                id: '5',
                value: 'A. On',
                correct: false,
            },
            {
                id: '6',
                value: 'B. At',
                correct: false,
            },
            {
                id: '7',
                value: 'C. Of',
                correct: false,
            },
            {
                id: '8',
                value: 'D. In',
                correct: true,
            },
        ]
    },
    {
        question: '3. Выберите правильный вариант перевода: <br> Мужчина пьет чашку кофе.',
        answers: [
            {
                id: '9',
                value: 'A. The man is having a cup of coffee.',
                correct: false,
            },
            {
                id: '10',
                value: 'B. The man is having one cup of coffee.',
                correct: true,
            },
        ]
    },
    {
        question: '4. Какое слово НЕЛЬЗЯ использовать на месте пропуска? <br>I loved the cake. It was __ delicious.',
        answers: [
            {
                id: '11',
                value: 'A. So',
                correct: false,
            },
            {
                id: '12',
                value: 'B. Very',
                correct: true,
            },
            {
                id: '13',
                value: 'C. Really',
                correct: false,
            },
            {
                id: '14',
                value: 'D. Absolutely',
                correct: false,
            },
        ]
    },
    {
        question: '5. She apologized profusely for ___ so early.',
        answers: [
            {
                id: '15',
                value: 'A. Having to leave',
                correct: false,
            },
            {
                id: '16',
                value: 'B. Has to leave',
                correct: false,
            },
            {
                id: '17',
                value: 'C. She has to leave',
                correct: false,
            },
            {
                id: '18',
                value: 'D. Have to leave',
                correct: true,
            },
        ]
    },
    {
        question: '6. В каком из предложений содержится ошибка?',
        answers: [
            {
                id: '19',
                value: 'A. The door is widely open.',
                correct: false,
            },
            {
                id: '20',
                value: 'B. Which activity did you like most?',
                correct: true,
            },
            {
                id: '21',
                value: 'C. I felt deeply hurt.',
                correct: false,
            },
            {
                id: '22',
                value: 'D. These are highly paid experts.',
                correct: false,
            },
        ]
    },
    {
        question: '7. ___ the children, they would have divorced of long ago.',
        answers: [
            {
                id: '23',
                value: 'A. Due to',
                correct: false,
            },
            {
                id: '24',
                value: 'B. For to',
                correct: false,
            },
            {
                id: '25',
                value: 'C. But for',
                correct: false,
            },
            {
                id: '26',
                value: 'D. Out of',
                correct: true,
            },
        ]
    },
    {
        question: '8. The thought of a burglar ___ our house while <br> we are sleeping is terrifying.',
        answers: [
            {
                id: '27',
                value: 'A. Breaking into',
                correct: false,
            },
            {
                id: '28',
                value: 'B. Settling in',
                correct: false,
            },
            {
                id: '29',
                value: 'C. Taking over',
                correct: true,
            },
            {
                id: '30',
                value: 'D. Pulling out of',
                correct: false,
            },
        ]
    },
    {
        question: '9. Выберите подходящее продолжение диалога: <br> - Do you know where my watch is? <br> - Let’s see. Yes, look!',
        answers: [
            {
                id: '31',
                value: 'A. There they are',
                correct: true,
            },
            {
                id: '32',
                value: 'B. There it is',
                correct: false,
            },
            {
                id: '33',
                value: 'C. Here it was',
                correct: false,
            },
            {
                id: '34',
                value: 'D. Now it is',
                correct: false,
            },
        ]
    },
]

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input class = "answer-input" type="radio" name=${index} value = ${answer.id}>
                    ${answer.value}
                </label>
            </li>
        `)
        .join('');

    questions.innerHTML = `
        <div class="quiz-questions-item">
                <div class="quiz-questions-item__question">${DATA[index].question}</div>
                <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
            </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassName = (answer, questionIndex) => {
        let className = '';

        if(!answer.correct && answer.id === localResults[questionIndex]){
            className = 'answer--invalid';
        }
        else if(answer.correct){
            className = 'answer--valid';
        }

        return className;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class = ${getClassName(answer, questionIndex)}>${answer.value}</li>`)
        .join('');


    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item__question">${question.question}</div>
                <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
            </div>
        `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`
};

quiz.addEventListener('change', (event) => {
    if(event.target.classList.contains('answer-input')){
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-next')){
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        
        if(DATA.length === nextQuestionIndex){
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('indicator--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults();
        } 
        else{
            renderQuestions(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }

    if(event.target.classList.contains('btn-restart')){
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('indicator--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0);