import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { OPTIONS_TYPE_MOVEMENTS, TYPE_MOVEMENTS } from 'src/app/shared/enums/enums';
import { IListExpenses } from 'src/app/shared/models/add_expense.model';
import { IMontly } from 'src/app/shared/models/sales.model';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  public totals = {
    allRevenue: 0,
    allExpense: 0,
    allAvailable: 0
  };
  public optionMovement = OPTIONS_TYPE_MOVEMENTS;
  public movements: any;
  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Movimiento', 'Monto'],
      ['Estudio', 2],
    ],
    // firstRowIsData: true,
    options: { title: 'Tus manejos' },
  };
  public columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Movimiento', 'Monto'],
      ['Estudio', 2],
      ['Estudio1', 2],
      ['Estudio2', 2],
      ['Estudio3', 2],
    ],
    // firstRowIsData: true,
    options: { title: 'Balance anual' },
  };

  constructor(
    private authService: DashboardService,
    private storageService: StorageService
  ) {
  }

  async ngOnInit() {
    const idClient = this.storageService.getUser().clientId ?? '';
    const saleData = await this.authService.initData(idClient);
    this.movements = saleData.list_expense;
    this.totals = {
      allRevenue: saleData.total_revenue,
      allExpense: saleData.total_expense,
      allAvailable: (saleData.total_revenue - saleData.total_expense)
    };
    this.chargePieData(saleData);
    this.chargeColumnData(saleData);

  }

  chargePieData(saleData: any) {
    this.pieChart.dataTable = [
      ['Movimiento', 'Monto']
    ];
    const movimientos: any = [];
    saleData.list_expense.forEach((element: IListExpenses) => {
      for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i][0] == element.typeRevenueExpense) {
          movimientos[i][1] += element.amount;
        } else {
          movimientos.push([element.typeRevenueExpense, element.amount]);
          break;
        }
      }
      if (movimientos.length == 0) {
        movimientos.push([element.typeRevenueExpense, element.amount]);
      }
    });

    movimientos.forEach((item: any) => {
      this.pieChart.dataTable.push(item);
    });
  }

  chargeColumnData(saleData: any){
    this.columnChart.dataTable = [
      ['Mes', 'Ingresos', 'Gastos']
    ];

    const movimientos: any = [];
    saleData.monthly_summary.forEach((element: IMontly) => {
      for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i][0] == element.month) {
          movimientos[i][1] += element.revenue;
          movimientos[i][1] += element.expense;
        } else {
          movimientos.push([element.month, element.revenue, element.expense]);
          break;
        }
      }
      if (movimientos.length == 0) {
        movimientos.push([element.month, element.revenue, element.expense]);
      }
    });

    movimientos.forEach((item: any) => {
      this.columnChart.dataTable.push(item);
    });
  }

  chargeEnum(data: string){
    return data;
  }

  getOptionMovement(label: TYPE_MOVEMENTS){
    return this.optionMovement[label];
  }

}
