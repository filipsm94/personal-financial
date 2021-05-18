import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: DasboardComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'revenue',
    component: RevenueComponent
  },
  {
    path: 'expense',
    component: ExpenseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
