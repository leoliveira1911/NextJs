export default class AnswerModel {
    #value: string
    #correct: boolean
    #revealed: boolean

    constructor(value: string , correct: boolean, revealed = false) {
        this.#value = value
        this.#correct = correct
        this.#revealed = revealed
    }

    static right (value: string) {
        return new AnswerModel(value, true)
    }

    static wrong (value: string) {
        return new AnswerModel(value, false)
    }
     
    get value() {
        return this.#value
    }

    get correct() {
        return this.#correct
    }

    get revealed() {
        return this.#revealed
    }

    reveal() {
        return new AnswerModel(this.#value , this.#correct , true)
    }

    toObject() {
        return {
        value: this.#value,
        correct: this.#correct,
        revealed: this.#revealed
        }
    }
    
    static fromObject(obj: AnswerModel): AnswerModel {
        return new AnswerModel(obj.value, obj.correct, obj.revealed)
    }

}