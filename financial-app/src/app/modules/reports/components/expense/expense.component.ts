import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OPTIONS_TYPE_REGISTER_EXPENSE, TYPE_REGISTER_EXPENSE } from 'src/app/shared/enums/enums';
import { ExpenseService } from 'src/app/shared/services/expense/expense.service';

@Component({
  selector: 'app-revenue-and-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  private infoExpense: any;
  public movements: any = [];
  public optionMovement = OPTIONS_TYPE_REGISTER_EXPENSE;
  public expenseForm: FormGroup;
  public hasError: boolean = false;
  public options = Object.values(TYPE_REGISTER_EXPENSE);

  constructor(
    private revenueService: ExpenseService,
    private router: Router
  ) {
    this.expenseForm = new FormGroup({
      typeRevenue: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      observations: new FormControl(null, [
        Validators.maxLength(100)
      ]),
      amount: new FormControl(null, [
        Validators.required,
      ])
    });
  }
  
  async ngOnInit() {
    this.movements = await this.revenueService.getListExpense();
  }

  async save() {
    this.infoExpense = { ...this.expenseForm.value };
    try {
      await this.revenueService.saveExpense(this.infoExpense);
      this.goToDashboard();
    } catch (error) {
      this.hasError = true;
    }
  }

  cancel() {
    this.goToDashboard();
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
  
  getOptionMovement(label: TYPE_REGISTER_EXPENSE){
    return this.optionMovement[label];
  }
}
