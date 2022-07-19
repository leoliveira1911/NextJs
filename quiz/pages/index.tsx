
import QuestionModel from '../model/question'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'

import Quiz from '../components/Quiz'


const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()

  const [questionsIds , setQuestionsIds] = useState([])
  const [score , setScore] = useState(0)
  const [question , setQuestion] = useState<QuestionModel>()

  async function loadQuestionsId() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const questionsIds = await resp.json()
    setQuestionsIds(questionsIds)
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.fromObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadQuestionsId()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])


  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion)
    const gotItRight = answeredQuestion.gotItRight
    setScore(score + (gotItRight ? + 1 : +0))
  }

  function nextQuestionId() {
    if(question){
    const nextIndex = questionsIds.indexOf(question.id) +1
    return questionsIds[nextIndex]}
  }

  function nextStep() {
    const nextId = nextQuestionId()
    nextId ? nextQuestion(nextId) : endQuiz()
  }
  
  function nextQuestion (nextId: number) {
    loadQuestion(nextId)
  }

  function endQuiz() {
    router.push({
      pathname: '/results',
      query: {
        total: questionsIds.length,
        right: score
      }
    })
  }
 
  return (
         <Quiz 
          question={question}
          lastQuestion={nextQuestionId() === undefined}
          answeredQuestion={answeredQuestion}
          nextStep={nextStep}
      />  
  )
}
