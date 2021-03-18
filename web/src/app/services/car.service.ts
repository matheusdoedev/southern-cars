import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Car } from '../classes/Car/Car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carsApiUrl = 'http://localhost:3333/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsApiUrl).pipe(
      tap((data) => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurrerd. Handle it accordingly
      errorMessage = `An error occurrer: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is : ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
