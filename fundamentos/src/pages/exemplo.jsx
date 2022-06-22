import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'
export default function App() {
    return (

        <Layout titulo='Usando Componentes'>
            <Cabecalho titulo='Next.js & React' />
            <Cabecalho titulo='Aprenda na prática'/>
        </Layout>
        
    )
}