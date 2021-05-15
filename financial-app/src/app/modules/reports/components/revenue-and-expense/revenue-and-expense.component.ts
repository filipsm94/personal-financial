import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { IListExpense, IMonthlySummary } from 'src/app/shared/models/sales.model';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';

@Component({
  selector: 'app-revenue-and-expense',
  templateUrl: './revenue-and-expense.component.html',
  styleUrls: ['./revenue-and-expense.component.scss']
})
export class RevenueAndExpenseComponent implements OnInit {
  public totals: any
  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Movimiento', 'Monto'],
      ['Estudio', 2],
    ],
    //firstRowIsData: true,
    options: { 'title': 'Tus manejos' },
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
    //firstRowIsData: true,
    options: { 'title': 'Balance anual' },
  };

  constructor(
    private authService: DashboardService,
  ) {
  }

  async ngOnInit() {
    let saleData = await this.authService.initData();
    this.totals = {
      allRevenue: saleData.total_revenue,
      allExpense: saleData.total_expense,
      allAvailable: (saleData.total_revenue - saleData.total_expense)
    }
    this.chargePieData(saleData);
    this.chargeColumnData(saleData);
    
  }

  chargePieData(saleData: any) {
    this.pieChart.dataTable = [
      ['Movimiento', 'Monto']
    ]
    let movimientos: any = []
    saleData.list_expense.forEach((element: IListExpense) => {
      for (let i = 0; i < movimientos.length; i++) {
        console.log(movimientos[i][0], element.type_expense)
        if (movimientos[i][0] == element.type_expense) {
          movimientos[i][1] += element.amount
        } else {
          movimientos.push([element.type_expense, element.amount])
          break;
        }
      }
      if (movimientos.length == 0) {
        movimientos.push([element.type_expense, element.amount])
      }
    });

    movimientos.forEach((item: any) => {
      this.pieChart.dataTable.push(item)
    })
  }

  chargeColumnData(saleData:any){
    this.columnChart.dataTable = [
      ['Mes', 'Ingresos', 'Gastos']
    ]

    let movimientos: any = []
    saleData.monthly_summary.forEach((element: IMonthlySummary) => {
      for (let i = 0; i < movimientos.length; i++) {
        console.log(movimientos[i][0], element.month)
        if (movimientos[i][0] == element.month) {
          movimientos[i][1] += element.revenue
          movimientos[i][1] += element.expense
        } else {
          movimientos.push([element.month, element.revenue, element.expense])
          break;
        }
      }
      if (movimientos.length == 0) {
        movimientos.push([element.month, element.revenue, element.expense])
      }
    });

    movimientos.forEach((item: any) => {
      this.columnChart.dataTable.push(item)
    })
  }

}
