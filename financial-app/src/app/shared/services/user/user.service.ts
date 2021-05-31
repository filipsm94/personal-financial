import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UrlConstans } from '../../constants/url-constant.model';
import { ILogin } from '../../models/login.model';
import { StorageService } from '../storage/storage.service';
import { IUserService } from './user.service.type';


@Injectable()
export class UserService implements IUserService {

  private UserUrl = `${UrlConstans.apiUrl}${UrlConstans.user}`;

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) { }

  public saveUser(infoFormUser: ILogin): Promise<any> {
    return this.httpClient.post(
      `${this.UserUrl}`,
      infoFormUser,
      {
        headers: new HttpHeaders({
          'Authorization': this.storageService.getToken()
        }),
        observe: 'response'
      }
    ).pipe(
      map((response) => {
        return response.body;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }

  public updateUser(updateUser: ILogin): Promise<any> {
    return this.httpClient.put(
      `${this.UserUrl}`,
      updateUser,
      {
        headers: new HttpHeaders({
          'Authorization': this.storageService.getToken()
        }),
        observe: 'response'
      }
    ).pipe(
      map((response) => {
        return response.body;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }

}
