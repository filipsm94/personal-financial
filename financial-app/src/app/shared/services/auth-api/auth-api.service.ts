import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UrlConstans } from '../../constants/url-constant.model';
import { DataMock } from '../../mocks/data-mock';
import { StorageService } from '../storage/storage.service';
import { IAuthApiService } from './auth-api.service.type';

@Injectable()
export class AuthApiService implements IAuthApiService {

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
    ) { }

  loginUser(username: string): Promise<any> {
    if(!environment.production){
      return Promise.resolve(DataMock.GET_MOCK_LOGIN);
    }
    return this.httpClient.get(
        `${UrlConstans.apiUrl}${UrlConstans.user}${username}`,
        {observe: 'response'}
      ).pipe(
      map((response) => {
        const uuid = response.headers.get('X-UUID-TOKEN'); // para el jwt
        if (uuid){
          this.storageService.setToken(uuid);
        }
        return response.body;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }
}
