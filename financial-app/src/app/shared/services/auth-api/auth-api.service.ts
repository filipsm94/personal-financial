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

  loginUser(infoLogin: any): Promise<any> {
    if(!environment.production){
      return Promise.resolve(DataMock.GET_MOCK_LOGIN);
    }
    return this.httpClient.post(
        `${UrlConstans.apiUrl}6b254644-d547-4b14-948a-a18333d2ac23`,
        infoLogin,
        {observe: 'response'}
      ).pipe(
      map((response) => {
        const uuid = response.headers.get('X-UUID-USER');
        if (uuid){
          this.storageService.setUser(uuid);
        }
        return response.body;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }
}
