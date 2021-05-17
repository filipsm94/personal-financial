import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RevenueExpenseService } from './revenue-expense.service';
import { StorageService } from '../storage/storage.service';

describe('RevenueExpenseService', () => {
  let service: RevenueExpenseService;
  let httpMock: HttpTestingController;
  let storageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RevenueExpenseService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(RevenueExpenseService);
    httpMock = TestBed.inject(HttpTestingController);
    storageService = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
