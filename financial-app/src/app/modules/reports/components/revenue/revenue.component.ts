import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OPTIONS_TYPE_REGISTER_REVENUE, TYPE_REGISTER_REVENUE } from 'src/app/shared/enums/enums';
import { RevenueExpenseService } from 'src/app/shared/services/revenue-expense/revenue-expense.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  private infoRevenue: any;
  public movements: any;
  public optionMovement;
  public revenueForm: FormGroup;
  public hasError: boolean = false;
  public options = Object.values(TYPE_REGISTER_REVENUE);

  constructor(
    private revenueService: RevenueExpenseService,
    private router: Router,
    ) {
    this.optionMovement = OPTIONS_TYPE_REGISTER_REVENUE
    this.revenueForm = new FormGroup({
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
    this.movements = await this.revenueService.getListRevenue();
  }

  async save() {
    this.infoRevenue = { ...this.revenueForm.value };
    try {
      await this.revenueService.saveRevenue(this.infoRevenue);
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
}
