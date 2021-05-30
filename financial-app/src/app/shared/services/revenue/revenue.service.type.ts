
export interface IRevenueService {

  saveRevenue(infoFormRevenue: any): Promise<any>;

  updateRevenue(updateRevenue: any): Promise<any>;

  getListRevenue(idRevenue: string): Promise<any>;

  deleteRevenue(idRevenue: string): Promise<any>;

}
