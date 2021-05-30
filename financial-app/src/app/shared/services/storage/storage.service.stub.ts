import { Injectable } from '@angular/core';
import { ILogin } from '../../models/login.model';
import { IStorageService } from './storage.service.type';

@Injectable()
export class StorageServiceStub implements IStorageService {
  
  setToken(tkn: string): void {
  }

  getToken(): string {
    return '';
  }

  setUser(user: ILogin): void {
  }
  
  getUser(): ILogin {
    return JSON.parse('');
  }

  clearSessionInfo(): void {
    sessionStorage.clear()
  }
  
}
