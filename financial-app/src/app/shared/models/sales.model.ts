export interface ISales {
    total_revenue: number
    total_expense: number
    list_expense: IListExpense[]
    monthly_summary: IMonthlySummary[]
}

export interface IListExpense {
    amount: number
    typeRevenueExpense: string
    type: string
    name: string
    date: string
}

export interface IMonthlySummary {
    month: string
    revenue: number
    expense: number
}