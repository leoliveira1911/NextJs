import Layout from "../../../components/Layout";
import {useRouter} from 'next/router'

export default function ClientePorCodigo() {
    const router = useRouter()
    return (
        <Layout titulo='Navegação Dinâmica'>
            <h1>Esse código é obtido pelo endereço que colocamos na navegacao</h1>
            <h1>Instaciamos o useRouter e usamos: router.query.nomeDoArquivoEm[   ] para ter acesso ao código</h1>
            <div>Código Filial = {router.query.filial}</div>
            <div>Código Cliente = {router.query.codigo}</div>
        </Layout>
    )
}