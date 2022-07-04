
import Navegador from '../components/Navegador'
export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height:'100vh',
      flexWrap:'wrap'

    }}>
      <Navegador destino='/estiloso' texto='Estiloso'/>
      <Navegador destino='/exemplo' texto='Exemplo' cor='#9400d3'/>
      <Navegador destino='/jsx' texto='JSX' cor='crimson'/>
      <Navegador destino='/navegacao/' texto='Navegação #01' cor='green'/>
      <Navegador destino='/cliente/rec-1/123' texto='Navegação #02' cor='darkblue'/>
      <Navegador destino='/estado' texto='Componente com Estado' cor='darkgray'/>
      <Navegador destino='/integracao' texto='Integracao com API #01' cor='mediumvioletred'/>
      <Navegador destino='/estatico' texto='Conteúdo Estático' cor='	#A52A2A'/>

    </div>
    
  
  )
}