export interface IAddExpense {
    list_expenses: IListExpenses[]
}

interface IListExpenses {
    amount: number
    type_expense: string
    type: string
    name: string
    date: string
}