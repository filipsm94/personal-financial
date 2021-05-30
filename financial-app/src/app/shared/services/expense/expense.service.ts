import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UrlConstans } from '../../constants/url-constant.model';
import { DataMock } from '../../mocks/data-mock';
import { IExpenseService } from './expense.service.type';


@Injectable()
export class ExpenseService implements IExpenseService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  saveExpense(infoFormExpense: any): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.POST_SAVE_EXPENSE);
    }
    return this.httpClient.post(
      `${UrlConstans.apiUrl}6b254644-d547-4b14-948a-a18333d2ac23`,
      infoFormExpense,
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

  getListExpense(): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.GET_LIST_EXPENSE);
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
