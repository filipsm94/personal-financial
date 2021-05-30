import { Injectable } from '@angular/core';
import { ILogin } from '../../models/login.model';
import { IStorageService } from './storage.service.type';

@Injectable()
export class StorageService implements IStorageService {

  setToken(tkn: string): void {
    sessionStorage.setItem('tkn', tkn);
  }

  getToken(): string {
    return sessionStorage.getItem('tkn') ?? '';
  }

  setUser(user: ILogin): void {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
  getUser(): ILogin {
    const user = sessionStorage.getItem('user') ?? '';
    return JSON.parse(user);
  }

  clearSessionInfo(): void {
    sessionStorage.clear();
  }

}
