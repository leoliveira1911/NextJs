import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Expenses from '../components/Expenses'
import Table from '../components/Table'
import Expense from '../core/Expense'
import ExpenseRepo from '../core/ExpenseRepo'
import ExpenseColection from '../firebase/db/ExpenseColection'
import { useEffect, useState } from 'react'
import Button from '../components/Button'

const Home: NextPage = () => {
  
  const repo: ExpenseRepo = new ExpenseColection

  const [expenses , setExpenses] = useState<Expense[]>([])

  useEffect(getAll, [])

  async function saveExpense(expense: Expense) {
   await repo.save(expense)
   getAll()
  }

  function getAll() {
    repo.getAll().then(expenses => {
      setExpenses(expenses)
    })
  }
  return (
    <div className='h-screen'>
      <Layout >
        <div>
        <Expenses expense={Expense.empty()} expenseChange={saveExpense}></Expenses>
        </div>
        <Table expenses={expenses}></Table>
      </Layout>
    </div>
  )
}

export default Home
