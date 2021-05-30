import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StorageService } from '../storage/storage.service';
import { ExpenseService } from './expense.service';

describe('ExpenseService', () => {
  let service: ExpenseService;
  let httpMock: HttpTestingController;
  let storageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExpenseService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ExpenseService);
    httpMock = TestBed.inject(HttpTestingController);
    storageService = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
