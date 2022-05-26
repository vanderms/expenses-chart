import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ExpenseModel, DailyExpenseModel } from 'src/app/models/expense.model';

@Component({
  selector: 'card-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public totalMonth: number = 0;
  public lastMonthPercentage: number = 0;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expensesService.getExpenses()
      .subscribe(expenses => {
        this.totalMonth = expenses.month;
        this.lastMonthPercentage = expenses.fromLastMonthPercentage;
      })
  }

}
