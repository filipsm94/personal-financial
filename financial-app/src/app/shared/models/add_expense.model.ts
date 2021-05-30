export interface IAddExpense {
    list_expenses: IListExpenses[]
}

export interface IListExpenses {
    amount: number
    typeRevenueExpense: string
    name: string
    date: string
    clientId: string
}