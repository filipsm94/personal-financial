import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { OPTIONS_TYPE_MOVEMENTS, TYPE_MOVEMENTS, ALL_TYPE_REGISTER, TYPE_REGISTER_EXPENSE, TYPE_REGISTER_REVENUE } from 'src/app/shared/enums/enums';
import { IMontly, ISummary, listRevenueExpense } from 'src/app/shared/models/sales.model';
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
  public allOptions = ALL_TYPE_REGISTER;
  public movements: any;
  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Movimiento', 'Monto'],
      ['Ingreso', '0']
    ],
    // firstRowIsData: true,
    options: { title: 'Tus manejos' },
  };
  public columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Mes', 'Ingresos', 'Gastos'],
      ['Enero', '0', '0'],
    ],
    // firstRowIsData: true,
    options: { title: 'Balance anual' },
  };
  public lineChart: GoogleChartInterface = {
    chartType: 'LineChart',
    dataTable: [
      ["Tipo", "Monto"],
      ["Comida", 400000],
      ["Diversión", 1500000],
      ["Educación", 6000000],
      ["Salario", 3500000],
      ["Trabajo extra", 1500000]
    ],
    // firstRowIsData: true,
    options: {
      title: 'Balance Mensual',
      pointSize: 5
    },
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
    this.pieChart = { ...this.pieChart };

    this.pieChart.dataTable = [
      ['Movimiento', 'Monto']
    ];
    this.lineChart.dataTable = [
      ["Tipo", "Monto"],
    ];
    const movimientos: any = [];
    saleData.listRevenueExpense.forEach((element: listRevenueExpense) => {
      let find = false;
      let indice = 0;
      for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i][0] == element.typeRevenueExpense) {
          find = true;
          indice = i;
        }
      }

      if (find) {
        movimientos[indice][1] += element.amount;
      } else {
        movimientos.push([element.typeRevenueExpense, element.amount]);
      }

      if (movimientos.length == 0) {
        movimientos.push([element.typeRevenueExpense, element.amount]);
      }
    });

    movimientos.forEach((item: any) => {
      console.log(ALL_TYPE_REGISTER)
      console.log(ALL_TYPE_REGISTER["EDUCATION"])
      console.log(this.getRegister(item[0]))

      //console.log(ALL_TYPE_REGISTER[item[0]])
      this.pieChart.dataTable.push([this.getRegister(item[0]), item[1]]);
      this.lineChart.dataTable.push([this.getRegister(item[0]), item[1]]);
    });

  }

  getRegister(data: TYPE_REGISTER_EXPENSE | TYPE_REGISTER_REVENUE) {
    return this.allOptions[data];
  }

  chargeColumnData(saleData: ISummary) {
    this.columnChart = { ...this.columnChart };
    this.columnChart.dataTable = [
      ['Mes', 'Ingresos', 'Gastos']
    ];

    const movimientos: any = [];
    saleData.monthlySummary.forEach((element: IMontly) => {
      let find = false;
      let indice = 0;
      for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i][0] == element.month) {
          find = true;
          indice = i;
        }
      }

      if (find) {
        movimientos[indice][1] += element.revenue;
        movimientos[indice][1] += element.expense;
      } else {
        movimientos.push([element.month, element.revenue, element.expense]);
      }

      if (movimientos.length == 0) {
        movimientos.push([element.month, element.revenue, element.expense]);
      }
    });

    movimientos.forEach((item: any) => {
      this.columnChart.dataTable.push(item);
    });
  }

  chargeEnum(data: string) {
    return data;
  }

  getOptionMovement(label: TYPE_MOVEMENTS) {
    return this.optionMovement[label];
  }

}
