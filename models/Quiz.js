import { Question } from "./Question.js";

export class Quiz{

    index = 0;
    score = 0;
    total = 0;
    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions) {
        this.questions = questions;
        this.total = questions.length;
    }

    /**
     * 
     * @returns {Question}
     */
    getQuestion(){
        return this.questions[this.index];
    }

    isEnded(){
        return this.index >= this.questions.length;
    }

    getScore(){
        return this.score;
    }
    
    getIndex(){
        return this.index;
    }

    getTotal(){
        return this.total;
    }

    userAnswer(choice){

        console.log('log - choice', choice);
        if(this.getQuestion().isCorrect(choice)){
            console.log('log - CORRECT');
            this.score++;
        }
        this.index++;
    }
}
