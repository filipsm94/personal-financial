import { Injectable } from '@angular/core';
import { IStorageService } from './storage.service.type';

@Injectable()
export class StorageService implements IStorageService {

  setUser(user: any): void {
    sessionStorage.setItem('user', user);
  }
  getUser(): any {
    const user = sessionStorage.getItem('user');
    return user;
  }
  clearSessionInfo(): void {
    sessionStorage.clear()
  }

  
}
