import Layout from "../components/Layout";
import ProdutosEmDestaque from "../components/ProdutosEmDestaque";
import LinkDeProdutos from "../components/LinkDeProdutos";
import styles from '../styles/Index.module.css'
import Video from '../components/Video'
export default function Home() {
    return (
        <Layout >
            <div className={styles.slide}>

            <ProdutosEmDestaque />
            </div>
            <div className={styles.corpo}>
                <LinkDeProdutos />
                < Video />
            </div>

        </Layout>
    )
}