import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, share } from 'rxjs';
import { ExpenseModel } from 'src/app/models/expense.model';

@Injectable({
    providedIn: 'root',
})
export class ExpensesService {

  private expenses: Observable<ExpenseModel> | null = null;

  private url: string = '/.netlify/functions/expenses';
    
  constructor(private http: HttpClient) {}
    
  getExpenses(): Observable<ExpenseModel> {
    if (this.expenses) {
      return this.expenses;      
    }    
    else {
      this.expenses = this.http.get<ExpenseModel>(this.url).pipe(share());
      return this.expenses;
    }
  }
}