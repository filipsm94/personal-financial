export interface IAddRevenue {
    list_revenues: IListRevenue[]
}

interface IListRevenue {
    amount: number
    type_expense: string
    type: string
    name: string
    date: string
}