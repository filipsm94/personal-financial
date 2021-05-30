import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { UserComponent } from './components/user/user.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';


@NgModule({
  declarations: [
    ReportsComponent,
    DasboardComponent,
    UserComponent,
    RevenueComponent,
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    Ng2GoogleChartsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'es-Es'},
  ]
})
export class ReportsModule { }
