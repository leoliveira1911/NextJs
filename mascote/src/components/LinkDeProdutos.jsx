import styles from '../styles/LinkDeProdutos.module.css'
import Navegador from './Navegador'
export default function LinkDeProdutos () {
    return(
        <div className={styles.texto} >
            <h1 >O que você procura?</h1>
            <br />
            <div className={styles.prod}>
            <Navegador destino='/produtos' texto='Argamassas Colantes'></Navegador> 
            <br />
            <Navegador destino='/produtos' texto='Rejuntes'></Navegador> 
            <br />
            <Navegador destino='/produtos' texto='Outros Produtos'></Navegador> 
            </div>
             <br />
             <br />
             <div className={styles.outros}>
             <Navegador destino='/produtos' texto='Conheça nossa linha de produtos'  /> 
             </div>
            </div>
    )
}