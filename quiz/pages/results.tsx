
import { useRouter } from "next/router"
import Button from "../components/Button"
import Statistic from "../components/Statistic"
import styles from '../styles/Results.module.css'

export default function result () {
    const router = useRouter()

    const total = +router.query.total
    const right = +router.query.right
    const percent = Math.round( (right / total) * 100)

    return (
        <div className={styles.results}>
            <h1>Resultado Final</h1>
            <div style={{display:'flex'}}>
            <Statistic text='Perguntas' value={total} />
            <Statistic text='Certas' value={right} backgroundColor='#9cd2a4' />
            <Statistic text='Percentual' value={`${percent}%`} backgroundColor='red'/>
            </div>
            <Button href='/' text="Tentar Novamente"/>
        </div>
    )
}