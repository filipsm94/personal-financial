
export interface IExpenseService {

  saveExpense(infoFormExpense: any): Promise<any>;

  updateExpense(infoFormExpense: any): Promise<any>;

  getListExpense(idExpense: string): Promise<any>;

  deleteExpense(idExpense: string): Promise<any>;

}
