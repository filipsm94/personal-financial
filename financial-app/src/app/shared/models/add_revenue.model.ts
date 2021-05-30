export interface IAddRevenue {
    list_revenues: IListRevenue[]
}

export interface IListRevenue {
    id?: number
    amount: number
    typeRevenueExpense: string
    type?: string
    name: string
    date: string
    clientId?: string
}