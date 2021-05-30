export interface listRevenueExpense {
    id: number
    name: string
    type: string
    typeRevenueExpense: string
    amount: number
    date: string
    clientId: number
}

export interface IMontly {
    month: string
    revenue: number
    expense: number
}

export interface ISummary {
    totalRevenue: number
    totalExpense: number
    listRevenueExpense : listRevenueExpense[]
    monthlySummary : IMontly[]
}