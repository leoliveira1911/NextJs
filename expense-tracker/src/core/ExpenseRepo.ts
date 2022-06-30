import Expense from './Expense'
export default interface ExpenseRepo {
    save(expense: Expense): Promise<Expense>
    getAll(): Promise<Expense[]>
}