import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import styles from '../styles/Layout.module.css'
export default function Layout (props) {
    return (
        <div className={styles.app}>
            <div className={styles.header}><Cabecalho /></div>
            <div className={styles.content}>{props.children}</div>
            <div className={styles.footer}><Rodape /></div>
        </div>
    )
}