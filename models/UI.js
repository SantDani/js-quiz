export class UI {
    constructor() {

    }

    showQuestion(text){
        const questionTitle = document.getElementById('quiz-question');
        questionTitle.innerText = text;
        // console.log('log - questionTitle' , questionTitle);



    }

    showChoices(choices, callback){
        
        const quizOptions = document.getElementById('quiz-options');
        quizOptions.innerHTML = '';
        // console.log('log - choices', choices);
        // console.log('log - quizOptions', quizOptions);

         choices.map( choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.className = 'button'

            button.addEventListener('click', () => callback(choice));
            quizOptions.append(button);
         });
    }

    /**
     * 
     * @param {number} score 
     */
    showScore(score){
        const quizEndHTML = `
            <h2>Result</h2>
            <h3>Score : ${score}</h3>
        `
        const quiz = document.getElementById('quiz-options');
        quiz.innerHTML = quizEndHTML;
    };

    
    /**
     * 
     * @param {number} currentIndex 
     * @param {number} total 
     */
    showProgress(currentIndex, total){

        const quizProgress = document.getElementById('quiz-progress');
        quizProgress.innerHTML = `Question ${currentIndex} de ${total}`
    }
}