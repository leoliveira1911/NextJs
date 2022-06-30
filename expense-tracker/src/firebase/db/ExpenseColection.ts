import Expense from "../../core/Expense";
import ExpenseRepo from "../../core/ExpenseRepo";
import firebase from "../config";


export default class ExpenseColection implements ExpenseRepo {
   #converter = {
    toFirestore(expense: Expense) {
        return {
            name: expense.name,
            type: expense.type,
            value: expense.value
        }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options:firebase.firestore.SnapshotOptions): Expense {
        const data = snapshot?.data(options)
        return new Expense(data.name, data.type , data.value, snapshot.id)
    }
   }
   
    async save(expense: Expense): Promise<Expense> {
        const docRef = await this.collection().add(expense)
        const doc = await docRef.get()
        return doc.data()
       
   }
   async getAll(): Promise<Expense[]> {
    const query = await this.collection().get()
    return query.docs.map(doc => doc.data()) ?? []
   }

   private collection() {
        return firebase.firestore().collection('expenses').withConverter(this.#converter)
   }


}