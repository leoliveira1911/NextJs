import styles from '../styles/Home.module.css'
import Question from '../components/Question'
import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'



export default function Home() {

  const questionTest = new QuestionModel(1, 'Cores?', [
    AnswerModel.right('Black'),
    AnswerModel.wrong('Blue'),
    AnswerModel.wrong('Green'),
    AnswerModel.wrong('White'),
  ])

  return (
    <div className={styles.container}>
      <Question value={questionTest}/>
    </div>
  )
}
