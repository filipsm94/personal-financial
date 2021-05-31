import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleChartComponent, GoogleChartInterface } from 'ng2-google-charts';
import { OPTIONS_TYPE_MOVEMENTS, TYPE_MOVEMENTS } from 'src/app/shared/enums/enums';
import { IMontly, ISummary, listRevenueExpense } from 'src/app/shared/models/sales.model';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  // @ViewChild('myPieChart', {static: false}) myPieChart: any;
  // @ViewChild('myColumnChart', {static: false}) myColumnChart: any;

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
      ['Movimiento', 'Monto']
    ],
    // firstRowIsData: true,
    options: { title: 'Tus manejos' },
  };
  public columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Movimiento', 'Monto']
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
    const saleData: ISummary = await this.authService.initData(idClient);
    this.movements = saleData.listRevenueExpense;
    this.totals = {
      allRevenue: saleData.totalRevenue,
      allExpense: saleData.totalExpense,
      allAvailable: (saleData.totalRevenue - saleData.totalExpense)
    };
    this.chargePieData(saleData);
    this.chargeColumnData(saleData);

  }

  chargePieData(saleData: ISummary) {
    
    const movimientos: any = [];
    saleData.listRevenueExpense.forEach((element: listRevenueExpense) => {
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

    const aux = [
      ['Movimiento', 'Monto']
    ]

    movimientos.forEach((item: any) => {
      aux.push(item);
    });

    this.pieChart = {
      ...this.pieChart,
      dataTable: aux
    };

    
  }

  chargeColumnData(saleData: ISummary){
    const movimientos: any = [];
    saleData.monthlySummary.forEach((element: IMontly) => {
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

    const aux = [
      ['Mes', 'Ingresos', 'Gastos']
    ];

    movimientos.forEach((item: any) => {
      aux.push(item);
    });

    this.columnChart = {
      ...this.columnChart,
      dataTable: aux
    };
    // this.columnChart.dataTable= aux;
    // this.columnChart.component?.draw(this.columnChart);
  }

  chargeEnum(data: string){
    return data;
  }

  getOptionMovement(label: TYPE_MOVEMENTS){
    return this.optionMovement[label];
  }

}
