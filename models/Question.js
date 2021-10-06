class Question{

    /**
     *
     * @param {string} question
     * @param {string[]} choices
     * @param {string} answer correct choice
     */
    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     *
     * @param choice
     * @returns {boolean} return true if the choice is correct
     */
    isCorrect(choice){
        return this.answer === choice;
    }
}

export {Question};
