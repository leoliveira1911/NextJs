import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"


export default function Mega() {
    const [quantidade, setQuantidade] = useState(6)
    const [valores, setValores] = useState([])

    function gerarValores(num) {
        

        num = quantidade
        /* valores = [] */
        setValores([])
        let prov = []
        do {
            const min = 1;
            const max = 60;
            let novoElemento = Math.floor(Math.random() * (max - min)) + min
            if (!prov.includes(novoElemento)) {
                prov.push(novoElemento)
            }
        } while (num > prov.length)

        prov.sort((n1,n2) => n1 - n2) //ordena os valores em ordem crescente.
        setValores(prov)
        console.log(valores)
        renderizarNumeros()
        return valores
    }

    function renderizarNumeros() {
        /* console.log(valores) */
        return (
            <div style={{ display: 'flex', flexWrap:'wrap' }}>
                {valores.length >= 6 ? valores.map(function (valor, i) {
                    return <NumeroDisplay key={i} numero={valor}></NumeroDisplay>
                }) : 'A aposta precisa de, pelo menos, 6 números.'}
            </div>
        )
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor:'#222',
            color:'white',

        }}>
            <div>
                <button onClick={() => setQuantidade(quantidade + 1)}>Quantidade de valores +</button>
                <button onClick={() => setQuantidade(quantidade - 1)}>Quantidade de valores -</button>
            </div>
            <label> Quantidade de valores = {quantidade}</label>

            <div>
                <button onClick={gerarValores}>Gerar Valores</button>
            </div>
            <h1>Valores da Mega</h1>

            {renderizarNumeros()}


        </div>



    )

}