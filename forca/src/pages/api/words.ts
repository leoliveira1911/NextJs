import LetterModel from "../../model/letter"


function stringToLetterModel() {
    const words = [
        'banana',
        'santinha',
        'brasil',
        'argentina',
        'javascript'
    ]

    let rand = Math.floor(Math.random() * (words.length - 0)) 

    let word = words[rand]
    let wordArray = [...word] 

    let letterModelArray = []

    wordArray.map((letter)=>{
        let newLetter = new LetterModel(letter, true)
        letterModelArray = [...letterModelArray, newLetter]
    })

    console.log(word)
    return letterModelArray


}

export default stringToLetterModel()