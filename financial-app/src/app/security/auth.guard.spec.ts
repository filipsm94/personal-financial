import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../shared/services/auth/auth.service';
import { AuthServiceStub } from '../shared/services/auth/auth.service.stub';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: AuthServiceStub },
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be return true if its logged', async () => {
    const mockActivatedRoutes = {} as ActivatedRouteSnapshot;
    const mockRoutes = {} as RouterStateSnapshot;
    spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(true));
    const result = await  guard.canActivate(mockActivatedRoutes, mockRoutes);
    expect(result).toBeTruthy();
  });

  it('should be return false if its logged', async () => {
    const mockActivatedRoutes = {} as ActivatedRouteSnapshot;
    const mockRoutes = {} as RouterStateSnapshot;
    spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(false));
    spyOn(router, 'navigate');

    const result = await guard.canActivate(mockActivatedRoutes, mockRoutes);
    expect(result).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
