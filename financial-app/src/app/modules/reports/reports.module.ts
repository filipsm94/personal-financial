import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { UserComponent } from './components/user/user.component';
import { RevenueAndExpenseComponent } from './components/revenue-and-expense/revenue-and-expense.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportsComponent,
    DasboardComponent,
    UserComponent,
    RevenueAndExpenseComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReportsModule { }
