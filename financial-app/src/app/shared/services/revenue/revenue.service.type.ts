
export interface IRevenueService {

  saveRevenue(infoFormRevenue: any): Promise<any>;

  updateRevenue(updateRevenue: any): Promise<any>;

  getListRevenue(): Promise<any>;

  deleteRevenue(id: string): Promise<any>;

}
