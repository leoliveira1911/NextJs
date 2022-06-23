import styles from '../styles/Rodape.module.css'
import Navegador from './Navegador'

export default function Rodape() {
    return (
        <footer className='rodape'>
            <div className={styles.orcamento}>
            <Navegador texto='FAZER ORÇAMENTO' destino='/orcamentos'/>
            <h1>É muito fácil e prático fazer um orçamento através do site. Experimente!</h1>
            </div>
            <div className={styles.contatos}>
                <h1>whatsapp</h1>
                <h1>telefone</h1>
                <h1>insta</h1>
                <h1>email</h1>
                <h1>facebook</h1>
            </div>
        </footer>
    )
}