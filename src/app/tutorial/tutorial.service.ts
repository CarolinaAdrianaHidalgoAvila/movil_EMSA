import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tutorial } from './tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private apiURL = "http://localhost:8000/api/tutorial";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Tutorial[]> {
    return this.httpClient.get<Tutorial[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id_tutorial:number): Observable<Tutorial> {
    return this.httpClient.get<Tutorial>(this.apiURL + id_tutorial)
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
