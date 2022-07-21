import Word from '../components/Word'
import AllLetters from '../components/AllLetters'
import LetterModel from '../model/letter'
import { useEffect, useState } from 'react'
import stringToLetterModel from './api/words'

export default function Home() {
  
  const [word, setWord] = useState<LetterModel[]>()
  const [mistakes, setMistakes] = useState<LetterModel[]>([])
  const [win, setWin] = useState(false)
   

  useEffect(() => {
    setWord(stringToLetterModel) 
    setMistakes([])
  } , [])

  
  function reveal(e) {
    const newWord=[]
    word.map((letter)=> {
      if(letter.value === e) {
        newWord.push(new LetterModel(e , false, 'green'))
      } else {
        newWord.push(letter)
      }
    })
     setWord(newWord)
     revealWrong(e)
     counter(word)
  }

  function counter([]) {
    const right = []
    word.map((letter) => {
      if(!letter.hidden){
        right.push(letter)
      }
    })
    
    console.log(right.length)
    if(right.length === word.length){
      return setWin(true)
    } 

  }

  function revealWrong(e) {
    const noRep = []
    const wrongLetters = []
    word.map((letter)=> {
      wrongLetters.push(letter.value)
    })
    mistakes.map((letter)=> {
      noRep.push(letter.value)
    })
    if(!wrongLetters.includes(e) && !noRep.includes(e)){
      setMistakes([...mistakes, new LetterModel(e, false, 'red')])
    }
}


  
  return (
    win === true ? (
      <div>
        <h1>VOCÊ VENCEU!</h1>
      </div>
    ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
    <div className={`
    flex flex-col
    `}>
      <Word word={word}/>
      <Word word={mistakes}/>
    </div>
    <hr />
    <div>
      <AllLetters onClick={(e) => reveal(e)}/>
    </div>
    </div>
    )
  )
}

