import Entry from './Entry'
import Expense from '../core/Expense'
import { useState } from 'react'
import Button from './Button'

interface ExpensesProps {
    expense: Expense
    
    expenseChange?: (expense: Expense) => void
}

export default function Expenses (props: ExpensesProps) {
  
    const [name, setName] = useState(props.expense.name ?? '')
    const [type, setType] = useState(props.expense.type ?? '')
    const [value, setValue] = useState(props.expense.value ?? 0)

    return(
        <div>
            <Entry value={name} text='Despesa' update={setName}></Entry>
            <Entry value={type} text='Tipo' update={setType} ></Entry>
            <Entry value={value} text='Valor' update={setValue} ></Entry>
            <Button onClick={()=> props.expenseChange?.(new Expense(name, type, value))}>Salvar</Button>
        </div>
    )
}