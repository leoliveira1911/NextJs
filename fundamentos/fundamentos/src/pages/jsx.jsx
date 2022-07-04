import Layout from "../components/Layout"
export default function Jsx() {
    const obj = { nome:'Joao', idade: 30}
    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{'muito legal'.toUpperCase()}</h2>
    }
    return (
        <Layout titulo='Entendendo o JSX'>
        
        <div>
            {titulo}
            {subtitulo()}
            <h2>{'teste'.toUpperCase()}</h2>
            <p>
                {JSON.stringify(obj)}
            </p>
        </div>
        </Layout>
    )
}