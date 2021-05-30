import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UrlConstans } from '../../constants/url-constant.model';
import { DataMock } from '../../mocks/data-mock';
import { StorageService } from '../storage/storage.service';
import { IExpenseService } from './expense.service.type';


@Injectable()
export class ExpenseService implements IExpenseService {

  private expenseUrl = `${UrlConstans.apiUrl}${UrlConstans.expenses}`;

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) { }

  updateExpense(infoFormExpense: any): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.POST_SAVE_EXPENSE);
    }
    return this.httpClient.put(
      `${this.expenseUrl}`,
      infoFormExpense,
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

  deleteExpense(idExpense: string): Promise<any> {
    return this.httpClient.delete(
      `${this.expenseUrl}${idExpense}`,
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

  saveExpense(infoFormExpense: any): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.POST_SAVE_EXPENSE);
    }
    return this.httpClient.post(
      `${this.expenseUrl}`,
      infoFormExpense,
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

  getListExpense(idExpense: string): Promise<any> {
    if (!environment.production) {
      return Promise.resolve(DataMock.GET_LIST_EXPENSE);
    }
    return this.httpClient.get(
      `${this.expenseUrl}${idExpense}`,
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
