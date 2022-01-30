import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { catchError, Observable, tap, throwError } from 'rxjs';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/products"

  getProducts(categoryId: number): Observable<Product[]> {

    let newPath = this.path;

    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => {
        console.log(JSON.stringify(data)); // Data geliyor mu diye kontrol
      }),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {

    const httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.post<Product>(this.path, product).pipe(
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
