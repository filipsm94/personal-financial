import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UrlConstans } from '../../constants/url-constant.model';
import { DataMock } from '../../mocks/data-mock';
import { StorageService } from '../storage/storage.service';
import { IRevenueService } from './revenue.service.type';


@Injectable()
export class RevenueService implements IRevenueService {

  private revenueUrl = `${UrlConstans.apiUrl}${UrlConstans.revenue}`;

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) { }

  public saveRevenue(infoFormRevenue: any): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.POST_SAVE_REVENUE);
    }
    return this.httpClient.post(
      `${this.revenueUrl}`,
      infoFormRevenue,
      {
        headers: new HttpHeaders({
          'Authorization': this.storageService.getToken()
        }),
        observe: 'response'
      }
    ).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }

  public updateRevenue(updateRevenue: any): Promise<any> {
    return this.httpClient.put(
      `${this.revenueUrl}`,
      updateRevenue,
      {
        headers: new HttpHeaders({
          'Authorization': this.storageService.getToken()
        }),
        observe: 'response'
      }
    ).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }

  public getListRevenue(idRevenue: string): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.GET_LIST_REVENUE);
    }
    return this.httpClient.get(
      `${this.revenueUrl}${idRevenue}`,
      {
        headers: new HttpHeaders({
          'Authorization': this.storageService.getToken()
        }),
        observe: 'response'
      }
    ).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }

  public deleteRevenue(idRevenue: string): Promise<any> {
    return this.httpClient.delete(
      `${this.revenueUrl}${idRevenue}`,
      {
        headers: new HttpHeaders({
          'Authorization': this.storageService.getToken()
        }),
        observe: 'response'
      }
    ).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }

}
