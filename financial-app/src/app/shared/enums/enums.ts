export enum TYPE_REGISTER_EXPENSE {
    FOOD = 'FOOD',
    FUN = 'FUN',
    EDUCATION = 'EDUCATION'
}

export enum TYPE_REGISTER_REVENUE {
    SALARY = 'SALARY',
    FREELANCE = 'FREELANCE',
}

export enum TYPE_MOVEMENTS {
    REVENUE = 'REVENUE',
    EXPENSE = 'EXPENSE'
}

export enum ALL_TYPE_REGISTER {
    FOOD = 'Comida',
    FUN = 'Diversión',
    EDUCATION = 'Educación',
    SALARY = 'Salario',
    FREELANCE = 'Trabajo extra',
}

export const OPTIONS_TYPE_REGISTER_EXPENSE = {
    [TYPE_REGISTER_EXPENSE.FOOD]: 'Comida',
    [TYPE_REGISTER_EXPENSE.FUN]: 'Diversión',
    [TYPE_REGISTER_EXPENSE.EDUCATION]: 'Educación',
};

export const OPTIONS_TYPE_REGISTER_REVENUE = {
    [TYPE_REGISTER_REVENUE.SALARY]: 'Salario',
    [TYPE_REGISTER_REVENUE.FREELANCE]: 'Trabajo extra',
};

export const OPTIONS_TYPE_MOVEMENTS = {
    [TYPE_MOVEMENTS.REVENUE]: 'Ingreso',
    [TYPE_MOVEMENTS.EXPENSE]: 'Gasto'
};
