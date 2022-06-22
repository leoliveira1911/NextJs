import {useEffect, useState} from 'react'

export const getStaticProps = async () => {
    
    const resp = await fetch('http://localhost:3000/api/hello')
    const data = await resp.json()
    
    
    return {
        revalidate: 10, //a cada 10 segundos a pagina será gerada novamente
            props: {
            valor: data.value
        }
    }
}
const Estatico = props => {
    return (
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último Valor = {props.valor}</h2>
        </div>
    )
}

export default Estatico