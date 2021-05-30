export interface IAddExpense {
    list_expenses: IListExpenses[]
}

export interface IListExpenses {
    id?: number
    amount: number
    typeRevenueExpense: string
    type?: string
    name: string
    date: string
    clientId?: string
}