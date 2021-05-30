import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StorageService } from '../storage/storage.service';
import { RevenueService } from './revenue.service';



describe('RevenueService', () => {
  let service: RevenueService;
  let httpMock: HttpTestingController;
  let storageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RevenueService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(RevenueService);
    httpMock = TestBed.inject(HttpTestingController);
    storageService = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
