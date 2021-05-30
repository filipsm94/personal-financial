import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OPTIONS_TYPE_REGISTER_REVENUE, TYPE_REGISTER_REVENUE } from 'src/app/shared/enums/enums';
import { RevenueService } from 'src/app/shared/services/revenue-expense/revenue.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  private infoRevenue: any;
  public movements: any;
  public optionMovement = OPTIONS_TYPE_REGISTER_REVENUE;
  public revenueForm: FormGroup;
  public hasError = false;
  public options = Object.values(TYPE_REGISTER_REVENUE);

  constructor(
    private revenueService: RevenueService,
    private router: Router,
    ) {
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

  getOptionMovement(label: TYPE_REGISTER_REVENUE){
    return this.optionMovement[label];
  }

  editMovement(item:any){
    console.log(item)
  }

  deleteMovement(item:any){
    console.log(item)
  }

}
