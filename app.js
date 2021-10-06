import {questions} from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */

const renderPage = (quiz, ui) => {

    
    if(quiz.isEnded()){
        // console.log('log - finish', quiz);
        ui.showScore(quiz.getScore());
    }else{
        ui.showQuestion(quiz.getQuestion().question);
        ui.showChoices(
            quiz.getQuestion().choices, 
            (currentChoice) => {
                quiz.userAnswer(currentChoice);

                renderPage(quiz, ui)
            });
            ui.showProgress(quiz.getIndex() + 1 , quiz.getTotal());
        
    }
    
    
    
    
}

function main() {
   
    const quiz = new Quiz(questions);
    const ui = new UI();


    // quiz.userAnswer('khe pitos');

    renderPage( quiz, ui);

    
}

main();
