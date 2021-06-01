import { ILogin } from '../../models/login.model';

export interface IAuthService {

    setLogged(value: boolean): void;
    loginUser(infoLogin: string): Promise<ILogin>;
    isLoggedIn(): boolean;
    logoutUser(): void;
    saveUser(user: any): void;

}
