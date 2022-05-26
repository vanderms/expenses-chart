import { Component, OnInit } from "@angular/core";
import { ExpensesService } from "src/app/services/expenses.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  balance: number = 0;
   
  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance() {
    this.expensesService.getExpenses()
      .subscribe(expenses => this.balance = expenses.balance);
  }

}