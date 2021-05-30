import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILogin } from '../../models/login.model';
import { AuthApiService } from '../auth-api/auth-api.service';
import { StorageService } from '../storage/storage.service';
import { IAuthService } from './auth.service.type';

@Injectable()
export class AuthService implements IAuthService{

  private readonly _isLoggedIn = new BehaviorSubject(false);

  constructor(
    private authApiService: AuthApiService,
    private storageService: StorageService,
    private router: Router
  ) { }

  get isLogged(): Observable<boolean>{
    return this._isLoggedIn;
  }

  public setLogged(value: boolean): void{
    this._isLoggedIn.next(value);
  }

  public loginUser(infoLogin: string): Promise<ILogin> {
    return this.authApiService.loginUser(infoLogin).then((response) => {
      if (response){
        this.storageService.setUser(response);
      }else{
        this.storageService.setUser({clientId: infoLogin});
        this.router.navigate(['/dashboard/user']);
      }
      return response;
    }).catch((error) => {
      throw Error(error);
    });
  }

  public isLoggedIn(): boolean {
    if (this.storageService.getUser()){
      this.setLogged(true);
      return true;
    }
    return false;
  }

  public logoutUser(): void{
    this.storageService.clearSessionInfo();
    this.setLogged(false);
    this.router.navigate(['/login']);
  }

  public saveUser(user: any): void {
    this.storageService.setUser(user);
  }
}
