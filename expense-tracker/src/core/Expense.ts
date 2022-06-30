
export default class Expense {
    #id: string
    #name: string
    #type: string
    #value: number

    constructor (name: string , type: string , value: number, id: string = null) {
        this.#id = id
        this.#name = name
        this.#type = type
        this.#value = value
    }

    static empty() {
        return new Expense('', '', 0)
    }

    get id () {
        return this.#id
    }

    
    get name () {
        return this.#name
    }
    
    get type () {
        return this.#type
    }
    
    get value () {
        return this.#value
    }


}

  