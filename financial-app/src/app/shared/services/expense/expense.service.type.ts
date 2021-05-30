
export interface IExpenseService {

  saveExpense(infoFormExpense: any): Promise<any>;

  getListExpense(infoFormExpense: any): Promise<any>;
  
}
