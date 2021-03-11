import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../classes/Car/Car';

@Injectable()
export class CarService {
  private apiUrl = 'http://localhost:3333/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
}
