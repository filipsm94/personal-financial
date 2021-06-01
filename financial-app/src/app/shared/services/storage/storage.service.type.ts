import { ILogin } from '../../models/login.model';

export interface IStorageService {

  setUser(obj: ILogin): void;

  setToken(obj: string): void;

  getUser(): ILogin;

  getToken(): string;

  clearSessionInfo(): void;

}
