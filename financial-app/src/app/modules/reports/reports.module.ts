import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { UserComponent } from './components/user/user.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
  ]
})
export class ReportsModule { }
