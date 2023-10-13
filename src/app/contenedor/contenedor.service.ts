import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contenedor } from './contenedor';

@Injectable({
  providedIn: 'root'
})
export class ContenedorService {
  private apiURL = "http://localhost:8000/api/contenedor";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Contenedor[]> {
    return this.httpClient.get<Contenedor[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id_contenedor:number): Observable<Contenedor> {
    return this.httpClient.get<Contenedor>(this.apiURL + id_contenedor)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
