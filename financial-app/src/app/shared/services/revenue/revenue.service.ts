import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UrlConstans } from '../../constants/url-constant.model';
import { DataMock } from '../../mocks/data-mock';
import { IRevenueService } from './revenue.service.type';


@Injectable()
export class RevenueService implements IRevenueService {

  private revenueUrl = `${UrlConstans.apiUrl}${UrlConstans.revenue}`;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public saveRevenue(infoFormRevenue: any): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.POST_SAVE_REVENUE);
    }
    return this.httpClient.post(
      `${this.revenueUrl}`,
      infoFormRevenue,
      { observe: 'response' }
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
      { observe: 'response' }
    ).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }

  public getListRevenue(idExpense: string): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.GET_LIST_REVENUE);
    }
    return this.httpClient.get(
      `${this.revenueUrl}${idExpense}`,
      { observe: 'response' }
    ).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }

  public deleteRevenue(id: string): Promise<any> {
    return this.httpClient.delete(
      `${this.revenueUrl}${id}`,
      { observe: 'response' }
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
