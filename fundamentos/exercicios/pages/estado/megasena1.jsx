import { useState } from "react"


export default function Mega() {
    const [quantidade , setQuantidade] = useState(6)
    const [valores, setValores] = useState([])
    
    function gerarValores(num ) {
        num = quantidade
        /* valores = [] */
        setValores([])
        let prov = []
        do{
            let min = Math.ceil(1);
            let max = Math.floor(60);
            let novoElemento = Math.floor(Math.random() * (max - min)) + min
            if(!valores.includes(novoElemento)){
                prov.push(novoElemento)
            }
           
        }while(num > prov.length)
        setValores(prov)
        console.log(valores)
      
        renderizarNumeros()
        return valores
    }

    function renderizarNumeros() {
        /* console.log(valores) */
        return valores.length>=6 ? valores.map(function(valor, i) {
            return <span key={i} style={{
                border:'solid, 1px',
                padding:'5px',
                
            
                borderRadius:'15px'
            }}>{valor}   </span>
        }) : 'A aposta precisa de, pelo menos, 6 números.'
    }

    return(
        <div style={{
            display: 'flex',
            flexDirection:"column"
            
        }}>
            <div>
            <button onClick={() => setQuantidade (quantidade + 1)}>Quantidade de valores +</button>
            <button onClick={() => setQuantidade (quantidade - 1)}>Quantidade de valores -</button>

            </div>
            <label> Quantidade de valores = {quantidade}</label>

            <div>
            <button onClick={gerarValores}>Gerar Valores</button>

            </div>
            <div >
                   <h1>Valores da Mega</h1>               
                    {renderizarNumeros()}
                    
            </div>
            
        
        </div>
    )

}