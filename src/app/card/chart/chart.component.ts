import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { DailyExpenseModel } from 'src/app/models/expense.model';

@Component({
  selector: 'card-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public dailyExpenses: DailyExpenseModel[] = [];
  public higherColumn: DailyExpenseModel = { day: 'mon', amount: 0 };

  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  calcHeight(amount: number): number {
    const height = Math.round((amount / this.higherColumn.amount) * 150);
    return height;
  }

  getExpenses(): void {
    this.expensesService.getExpenses()
      .subscribe( (expenses) => {
        this.dailyExpenses = expenses.lastSevenDays;
        this.dailyExpenses.forEach(day => {
          if (day.amount > this.higherColumn.amount) {
            this.higherColumn = {...day };
          }
        });
      });
  }
}
