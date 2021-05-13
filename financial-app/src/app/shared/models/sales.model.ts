export interface ISales {
    total_revenue: number
    total_expense: number
    list_expense: IListExpense[]
    monthly_summary: IMonthlySummary[]
}

interface IListExpense {
    amount: number
    type_expense: string
    type: string
    name: string
    date: string
}

interface IMonthlySummary {
    month: string
    revenue: number
    expense: number
}