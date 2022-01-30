import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { catchError, Observable, tap, throwError } from 'rxjs';


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/categories"

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data)); // Data geliyor mu diye kontrol
      }),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = 'Bir hata oluştu.' + err.error.message;
    } else {
      errMessage = 'Sistemsel bir hata oluştu. ' + err.error.message;
    }
    return throwError(errMessage);
  }
}

