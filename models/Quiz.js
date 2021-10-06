import { Question } from "./Question.js";

export class Quiz{

    index = 0;
    score = 0;
    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions) {
        this.questions = questions;
    }

    /**
     * 
     * @returns {Question}
     */
    getQuestion(){
        return this.questions[this.index];
    }

    isEnded(){
        return this.questions.length >= this.index;
    }


    userAnswer(choice){
        if(this.getQuestion().isCorrect(choice)){
            this.score++;
        }
        this.index++;
    }
}
