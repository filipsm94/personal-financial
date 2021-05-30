export interface IAddRevenue {
    list_revenues: IListRevenue[]
}

export interface IListRevenue {
    amount: number
    typeRevenueExpense: string
    name: string
    date: string
    clientId: string
}