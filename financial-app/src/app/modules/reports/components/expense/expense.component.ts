import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OPTIONS_TYPE_REGISTER_EXPENSE, TYPE_REGISTER_EXPENSE } from 'src/app/shared/enums/enums';
import { ExpenseService } from 'src/app/shared/services/expense/expense.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-revenue-and-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  idClient = this.storageService.getUser().clientId;

  private infoExpense: any;
  private filterExpense: any;
  public movements: any = [];
  public updateRecord: boolean = false;
  public applyFilter: boolean = false;
  public optionMovement = OPTIONS_TYPE_REGISTER_EXPENSE;
  public expenseForm: FormGroup;
  public filterForm: FormGroup;
  public hasError = false;
  public options = Object.values(TYPE_REGISTER_EXPENSE);

  constructor(
    private revenueService: ExpenseService,
    private router: Router,
    private storageService: StorageService
  ) {
    this.expenseForm = new FormGroup({
      typeRevenueExpense: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      name: new FormControl(null, [
        Validators.maxLength(100)
      ]),
      amount: new FormControl(null, [
        Validators.required,
      ])
    });

    this.filterForm = new FormGroup({
      typeRevenueExpense: new FormControl(null),
      dateInit: new FormControl(null, [
        Validators.required,
      ]),
      dateEnd: new FormControl(null, [
        Validators.required,
      ])
    });
  }

  async ngOnInit() {
    this.movements = await this.revenueService.getListExpense(this.idClient);
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

  async update() {
    this.infoExpense = { ...this.expenseForm.value };
    try {
      await this.revenueService.updateExpense(this.infoExpense);
      this.updateRecord = false;
    } catch (error) {
      this.hasError = true;
    }
  }

  cancel() {
    if (this.updateRecord) {
      this.updateRecord = false;
    } else {
      this.goToDashboard();
    }
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  getOptionMovement(label: TYPE_REGISTER_EXPENSE) {
    return this.optionMovement[label];
  }

  editMovement(item: any) {
    this.expenseForm.controls['typeRevenueExpense'].setValue(item.typeRevenueExpense);
    this.expenseForm.controls['name'].setValue(item.name);
    this.expenseForm.controls['amount'].setValue(item.amount);
    this.updateRecord = true;
  }

  async deleteMovement(item: any) {
    this.infoExpense = { 'id': item.id };
    try {
      await this.revenueService.deleteExpense(this.infoExpense);
      this.updateRecord = false;
    } catch (error) {
      this.hasError = true;
    }
  }

  filter(){
    this.applyFilter = true;
  }

  cancelFilter(){
    this.applyFilter = false;
  }

  async searchFilter(){
    console.log(this.filterForm)
    let dateInit = this.getFullDate(this.filterForm.value.dateInit);
    let dateEnd = this.getFullDate(this.filterForm.value.dateEnd);
    let url = `${this.idClient}/${dateInit}/${dateEnd}/`;
    if(this.filterForm.value.typeRevenueExpense){
      url += `?typeRevenueExpense=${this.filterForm.value.typeRevenueExpense}`;
    }
    
    try {
      this.movements = await this.revenueService.filterExpense(url);
      this.applyFilter = false;
    } catch (error) {
      this.hasError = true;
    }
  }

  private getFullDate(data: string): string {
    const date = new Date(data);
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

}
