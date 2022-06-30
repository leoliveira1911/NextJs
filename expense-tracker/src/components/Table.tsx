import Expense from '../core/Expense'

interface TableProps {
    expenses: Expense[]
}

export default function Table(props: TableProps) {
    return (
        <table className='bg-black rounded-md overflow-hidden'>
            <thead>
                <tr>
                    <td className='p-4'>Despesa</td>
                    <td className='p-4'>Tipo</td>
                    <td className='p-4'>Valor</td>
                </tr>
            </thead>
            <tbody>
                {props.expenses?.map((expense, i) => {
                    return (
                        <tr
                            key={expense.id}
                            className={`
                      ${i % 2 === 0 ? 'bg-gray-700' : 'bg-gray-900'}
                          `}>
                            <td className='p-4'>{expense.name}</td>
                            <td className='p-4'>{expense.type}</td>
                            <td className='p-4'>{expense.value}</td>

                        </tr>
                    )
                })

                }
            </tbody>
        </table>)
}