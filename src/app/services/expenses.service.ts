import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ExpenseModel } from 'src/app/models/expense.model';

@Injectable({
    providedIn: 'root',
})
export class ExpensesService {

  private url: string = '/.netlify/functions/expenses';
    
  constructor(private http: HttpClient) {}
    
  getExpenses(): Observable<ExpenseModel> {
    return this.http.get<ExpenseModel>(this.url);      
  }
}