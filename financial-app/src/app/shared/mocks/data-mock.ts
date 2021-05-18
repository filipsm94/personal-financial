import { TYPE_MOVEMENTS, TYPE_REGISTER_EXPENSE, TYPE_REGISTER_REVENUE } from "../enums/enums"

export class DataMock {

    public static get GET_MOCK_LOGIN() {
        return {
            login: {
                authenticated: true,
                clientId: "XXX222XXX",
                name: "Felipe Mesa",
                email: "felipe@mesa.com"
            }
        }
    }

    public static get GET_MOCK_DASHBOARD() {
        return {
            total_revenue: 5000000,
            total_expense: 2300000,
            list_expense: [
                {
                    amount: 4000000,
                    type_expense: TYPE_REGISTER_REVENUE.SALARY,
                    type: TYPE_MOVEMENTS.REVENUE,
                    name: "Salario",
                    date: "2021-05-25"
                },
                {
                    amount: 1400000,
                    type_expense: TYPE_REGISTER_EXPENSE.FOOT,
                    type: TYPE_MOVEMENTS.EXPENSE,
                    name: "Mercado",
                    date: "2021-05-25"
                },
                {
                    amount: 800000,
                    type_expense: TYPE_REGISTER_EXPENSE.FUN,
                    type: TYPE_MOVEMENTS.EXPENSE,
                    name: "Bolos",
                    date: "2021-05-25"
                }
            ],
            monthly_summary: [
                {
                    month: "Enero",
                    revenue: 4000000,
                    expense: 2800000
                },
                {
                    month: "Febrero",
                    revenue: 4000000,
                    expense: 3200000
                },
                {
                    month: "Marzo",
                    revenue: 4000000,
                    expense: 1500000
                }, {
                    month: "Abril",
                    revenue: 4000000,
                    expense: 2800000
                },
                {
                    month: "Mayo",
                    revenue: 4000000,
                    expense: 3200000
                },
                {
                    month: "Junio",
                    revenue: 4000000,
                    expense: 1500000
                }
            ]
        }

    }

    public static get GET_LIST_REVENUE() {
        return [
            {
                amount: 4000000,
                type_expense: TYPE_REGISTER_REVENUE.SALARY,
                type: TYPE_MOVEMENTS.REVENUE,
                name: "Salario",
                date: "2021-05-25"
            }
        ]

    }

    public static get GET_LIST_EXPENSE() {
        return [
            {
                amount: 40000,
                type_expense: TYPE_REGISTER_EXPENSE.FOOT,
                type: TYPE_MOVEMENTS.REVENUE,
                name: "Comida en Burger king",
                date: "2021-05-25"
            },
            {
                amount: 100000,
                type_expense: TYPE_REGISTER_EXPENSE.FUN,
                type: TYPE_MOVEMENTS.REVENUE,
                name: "Salida a bolos",
                date: "2021-05-25"
            },
            {
                amount: 3000000,
                type_expense: TYPE_REGISTER_EXPENSE.EDUCATION,
                type: TYPE_MOVEMENTS.REVENUE,
                name: "Compra de libros",
                date: "2021-05-25"
            }
        ]

    }

    public static get POST_SAVE_REVENUE() {
        return {
            list_revenues: [
                {
                    amount: 4000000,
                    type_expense: TYPE_REGISTER_REVENUE.SALARY,
                    type: TYPE_MOVEMENTS.REVENUE,
                    name: "Salario",
                    date: "2021-05-25"
                },
                {
                    amount: 1500000,
                    type_expense: TYPE_REGISTER_REVENUE.FREELANCE,
                    type: TYPE_MOVEMENTS.REVENUE,
                    name: "Freelance",
                    date: "2021-05-25"
                }
            ]
        }
    }

    public static get POST_SAVE_EXPENSE() {
        return {
            list_expenses: [
                {
                    amount: 40000,
                    type_expense: TYPE_REGISTER_REVENUE.SALARY,
                    type: TYPE_MOVEMENTS.REVENUE,
                    name: "Salario",
                    date: "2021-05-25"
                }
            ]
        }
    }
}