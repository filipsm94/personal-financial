
export interface IRevenueService {

  saveRevenue(infoFormRevenue: any): Promise<any>;

  updateRevenue(updateRevenue: any): Promise<any>;

  getListRevenue(idExpense: string): Promise<any>;

  deleteRevenue(id: string): Promise<any>;

}
