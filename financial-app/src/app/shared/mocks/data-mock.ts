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
                    type_expense: "SALARY",
                    type: "REVENUE",
                    name: "Salario",
                    date: "2021-05-25"
                },
                {
                    amount: 1400000,
                    type_expense: "FOOT",
                    type: "EXPENSE",
                    name: "Mercado",
                    date: "2021-05-25"
                },
                {
                    amount: 800000,
                    type_expense: "FUN",
                    type: "EXPENSE",
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
                },{
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
}