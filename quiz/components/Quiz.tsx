import QuestionModel from '../model/question'
import styles from '../styles/Quiz.module.css'
import Button from './Button'
import Question from './Question'

interface QuizProps {
    question: QuestionModel
    lastQuestion: boolean
    answeredQuestion:(question: QuestionModel) => void
    nextStep:() => void
}

export default function Quiz(props: QuizProps) {

    function onResponse (index: number) {
        if(!props.question.answered) {
            props.answeredQuestion(props.question.answerWith(index))
        }
    }


    return (
        <div className={styles.quiz}>
            {
                props.question ? 
                <Question 
                value={props.question}
                timeToAnswer={6}
                onResponse={onResponse}
                timeOut={props.nextStep}/> 
                : false
            }
            
            <Button 
                onClick={props.nextStep}
                text={props.lastQuestion ? 'Finalizar' : 'Próxima'} />
        </div>
    )
}