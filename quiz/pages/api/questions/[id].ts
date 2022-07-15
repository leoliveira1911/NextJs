import questions from "../questionsBase"

export default function handler(req, res) {
    const selectedId = +req.query.id
    const selectedQuestion = questions.filter( question => question.id === selectedId)
    if(selectedQuestion.length === 1) {
      const question = selectedQuestion[0].shuffleAnswers()
      res.status(200).json(question.toObject())
    } else {
      res.status(204).send()
    }
  }
  