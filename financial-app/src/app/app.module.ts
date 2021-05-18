import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './security/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthApiService } from './shared/services/auth-api/auth-api.service';
import { AuthService } from './shared/services/auth/auth.service';
import { DashboardService } from './shared/services/dashboard/dashboard.service';
import { RevenueExpenseService } from './shared/services/revenue-expense/revenue-expense.service';
import { StorageService } from './shared/services/storage/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthApiService,
    DashboardService,
    RevenueExpenseService,
    StorageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
