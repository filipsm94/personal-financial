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

  constructor(
    private httpClient: HttpClient,
  ) { }

  saveRevenue(infoFormRevenue: any): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.POST_SAVE_REVENUE);
    }
    return this.httpClient.post(
      `${UrlConstans.apiUrl}6b254644-d547-4b14-948a-a18333d2ac23`,
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

  getListRevenue(): Promise<any>{
    if (!environment.production) {
      return Promise.resolve(DataMock.GET_LIST_REVENUE);
    }
    return this.httpClient.post(
      `${UrlConstans.apiUrl}6b254644-d547-4b14-948a-a18333d2ac23`,
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
