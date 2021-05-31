
export interface IUserService {

  saveUser(infoFormUser: any): Promise<any>;

  updateUser(updateUser: any): Promise<any>;

}
