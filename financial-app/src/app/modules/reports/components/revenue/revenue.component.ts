import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OPTIONS_TYPE_REGISTER_REVENUE, TYPE_REGISTER_REVENUE } from 'src/app/shared/enums/enums';
import { IListRevenue } from 'src/app/shared/models/add_revenue.model';
import { RevenueService } from 'src/app/shared/services/revenue/revenue.service';
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
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss'],
})
export class RevenueComponent implements OnInit {

  private idClient = this.storageService.getUser().clientId;

  private infoRevenue: IListRevenue;
  public movements: any;
  public updateRecord: boolean = false;
  public optionMovement = OPTIONS_TYPE_REGISTER_REVENUE;
  public revenueForm: FormGroup;
  public hasError = false;
  public options = Object.values(TYPE_REGISTER_REVENUE);

  constructor(
    private revenueService: RevenueService,
    private router: Router,
    private storageService: StorageService
  ) {
    this.infoRevenue = {
      amount: 0,
      typeRevenueExpense: '',
      name: '',
      date: ''
    }
    this.revenueForm = new FormGroup({
      typeRevenueExpense: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      name: new FormControl(null, [
        Validators.maxLength(100)
      ]),
      amount: new FormControl(null, [
        Validators.required,
      ]),
      date: new FormControl(null)
    });
  }

  async ngOnInit() {
    this.movements = await this.revenueService.getListRevenue(this.idClient);
  }

  async save() {
    this.infoRevenue = {
      ...this.revenueForm.value,
      date: this.getFullDate(this.revenueForm.value.date),
      clientId: this.idClient
    };
    try {
      await this.revenueService.saveRevenue(this.infoRevenue);
      this.goToDashboard();
    } catch (error) {
      this.hasError = true;
    }
  }

  async update() {
    this.infoRevenue = { ...this.revenueForm.value };
    this.infoRevenue = {
      ...this.revenueForm.value,
      date: this.getFullDate(),
      clientId: this.idClient
    };
    try {
      await this.revenueService.updateRevenue(this.infoRevenue);
      this.updateRecord = false;
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

  getOptionMovement(label: TYPE_REGISTER_REVENUE) {
    return this.optionMovement[label];
  }

  editMovement(item: any) {
    this.revenueForm.controls['typeRevenue'].setValue(item.typeRevenueExpense);
    this.revenueForm.controls['observations'].setValue(item.name);
    this.revenueForm.controls['amount'].setValue(item.amount);
    this.updateRecord = true;
  }

  private getFullDate(data?: string): string {
    const date = data ? new Date(data) : new Date();
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  async deleteMovement(item: any) {
    try {
      await this.revenueService.deleteRevenue(item.id);
      this.updateRecord = false;
    } catch (error) {
      this.hasError = true;
    }
  }

}

