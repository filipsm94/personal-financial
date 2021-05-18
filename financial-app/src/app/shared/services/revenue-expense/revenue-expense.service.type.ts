
export interface IRevenueExpenseService {
  saveRevenue(infoFormRevenue: any): Promise<any>;
  saveExpense(infoFormExpense: any): Promise<any>;
  getListRevenue(infoFormExpense: any): Promise<any>;
  getListExpense(infoFormExpense: any): Promise<any>;
}
