import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthApiService } from './auth-api.service';
import { StorageService } from '../storage/storage.service';
import { StorageServiceStub } from '../storage/storage.service.stub';
import { AuthRequestModel } from '../../models/user.model';
import { UrlConstans } from '../../constans/url-constant.model';

describe('AuthApiService', () => {
  let service: AuthApiService;
  let httpMock: HttpTestingController;
  let storageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthApiService,
        { provide: StorageService, useClass: StorageServiceStub },
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AuthApiService);
    httpMock = TestBed.inject(HttpTestingController);
    storageService = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be loginUser', () => {
    const mockRequest: AuthRequestModel = {
      username: 'felipe',
      password: '123'
    };
    const responseMock = {
      data: {

      },
      notification: {}
    };
    spyOn(storageService, 'setUuid');
    service.loginUser(mockRequest).then((response) => {
      expect(storageService.setUuid).toHaveBeenCalled();
    });
    const request = httpMock.expectOne(`${UrlConstans.apiUrl}6b254644-d547-4b14-948a-a18333d2ac23`);
    expect(request.request.method).toBe('POST');
    request.flush(responseMock, {
      headers: {
        'X-UUID-USER': 'xx1'
      }
    });
  });

  it('should be loginUser', () => {
    const mockRequest: AuthRequestModel = {
      username: 'felipe',
      password: '123'
    };
    const responseMock = {
      data: {

      },
      notification: {}
    };
    spyOn(storageService, 'setUuid');
    service.loginUser(mockRequest).then((response) => {
    }).catch((error) => {
      expect(error).toBeDefined();
    });
    const request = httpMock.expectOne(`${UrlConstans.apiUrl}6b254644-d547-4b14-948a-a18333d2ac23`);
    expect(request.request.method).toBe('POST');
    request.flush(responseMock, {
      status: 401, statusText: 'error',
      headers: {
        'X-UUID-USER': 'xx1'
      }
    });
  });

});
