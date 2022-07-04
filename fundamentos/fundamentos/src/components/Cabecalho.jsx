export default function Cabecalho (props) {
    //props é somente LEITURA
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}