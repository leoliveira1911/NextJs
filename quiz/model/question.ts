import AnswerModel from './answer'
import {shuffle} from '../functions/arrays'

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #gotItRight: boolean
    
    constructor(id: number, statement: string, answers: any[], gotItRight = false) {
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#gotItRight = gotItRight
    }

    get id() {
        return this.#id
    }

    get statement() {
        return this.#statement
    }

    get answers() {
        return this.#answers
    }

    get gotItRight() {
        return this.#gotItRight
    }
    get answered() {
        
        for (let answer of this.#answers) {
            if(answer.revealed) return true
        }

        return false
    }

    answerWith(index: number): QuestionModel {
        const gotItRight = this.#answers[index]?.correct
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i
            const shouldReveal = selectedAnswer || answer.correct
            return shouldReveal ? answer.reveal() : answer
        })
        return new QuestionModel(this.#id, this.#statement , answers , gotItRight)
    }
    
    shuffleAnswers(): QuestionModel {
        let shuffledAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#statement, shuffledAnswers, this.#gotItRight)
    }

    toObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answers: this.#answers.map(answer => answer.toObject()),
            answered: this.answered,
            gotItRight: this.#gotItRight,
        }
    }

}