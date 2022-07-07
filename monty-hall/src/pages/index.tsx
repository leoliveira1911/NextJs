import Gift from "../components/Gift";
import Door from '../components/Door';
import DoorModel from "../model/doorModel";
import { useState } from "react";
import { attDoors, createDoors } from '../functions/doors'
export default function Home() {
  const [d1 , setD1] = useState (new DoorModel(1, false, false))
  
  createDoors(3,2)
  const [num, setNum] = useState(0)
  const [selected, setSelected] = useState(0)
  const [doors, setDoors] = useState(createDoors(num,selected ))
  const [selection , setSelection] = useState(true)

  function startGame() {
    setDoors(createDoors(num, selected))
    setSelection(false)
  }

  function resetGame() {
    setNum(0)
    setSelected(0)
    setSelection(true)
  }
 
  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(attDoors(doors, newDoor)) }/>
    })
  }

  return ( selection ? 
    (<div style={{
      display:'flex',
      flexDirection:'column'
    }}>
        <label>Numero de portas {num}</label>
        <button onClick={() => setNum(num + 1)}> + </button>
        <button onClick={() => setNum(num - 1)}> - </button>
        <label>Porta Selecionada {selected}</label>
        <button onClick={() => setSelected(selected + 1)}> + </button>
        <button onClick={() => setSelected(selected - 1)}> - </button>
        <button onClick={() => startGame()}> Iniciar </button>
    </div>) 
    :
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <button onClick={() => resetGame()}>Voltar</button>
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center'
      }}> {renderDoors()} </div>  
    </div>
  )
}
