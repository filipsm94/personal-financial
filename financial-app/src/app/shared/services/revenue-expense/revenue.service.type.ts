
export interface IRevenueService {
  
  saveRevenue(infoFormRevenue: any): Promise<any>;

  getListRevenue(infoFormExpense: any): Promise<any>;

}
