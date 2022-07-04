import { useState } from 'react'
import Layout from '../components/Layout'
export default function Estado() {
    
    const state = useState(0) //o 0 indica o valor inicial. - React Hooks
    let numero = state[0]
    let setNumero = state[1]

    /* poderia ter escrito:
    const [numero , setNumero] = useState(0)
    */

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo='Componente com Estado'>
            <h1>{numero}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}