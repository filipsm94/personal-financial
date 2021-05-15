import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { RevenueAndExpenseComponent } from './components/revenue-and-expense/revenue-and-expense.component';
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
    path: 'revenue-expense',
    component: RevenueAndExpenseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
