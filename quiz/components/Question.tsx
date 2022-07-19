import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Statement from "./Statement";
import Timer from "./Timer";

const leters = [
    {value: 'A' , color: '#F2C866'},
    {value: 'B' , color: '#F266BA'},
    {value: 'C' , color: '#85D4F2'},
    {value: 'D' , color: '#BCE596'},
]

interface QuestionProps {
    value: QuestionModel
    timeToAnswer?: number
    onResponse: (index: number) => void
    timeOut: () => void
}

export default function Question(props: QuestionProps) {

    const question = props.value

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return (
            <Answer
                key={`${question.id}-${i}`}
                value={answer}
                index={i}
                leter={leters[i].value}
                leterBackgroundColor={leters[i].color}
                onResponse={props.onResponse}
            />
            )
        })
    }
    
    return (
        <div className={styles.question}>
            <Statement text={question.statement}/>
            <Timer key={question.id} duration={props.timeToAnswer ?? 10} timeOut={props.timeOut}/>
            {renderAnswers()}
        </div>
    )

}