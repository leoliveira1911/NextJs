
import styles from '../styles/Cabecalho.module.css'
import Logo from './Logo'
import Navegador from './Navegador'

export default function Cabecalho () {
    
    return (
        <header className={styles.cabecalho}>
            <Logo/>
            <Navegador texto='Home' destino='/'/>
            <Navegador texto='Sobre' destino='/sobre'/>
            <Navegador texto='Produtos' destino='/produtos'/>
            <Navegador texto='Orçamentos' destino='/orcamentos'/>
            <Navegador texto='Contato' destino='/contato'/>
        </header>
    )
} 