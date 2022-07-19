import styles from '../styles/Timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


interface TimerProps {
    key: any
    duration: number
    timeOut: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer 
            size={120}
            isPlaying
            duration={props.duration}
            onComplete={props.timeOut}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            >{({ remainingTime }) => remainingTime }</CountdownCircleTimer>  
        </div>
    )
}