import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ruta } from './ruta';
import { DetalleRuta } from './detalle-ruta';
import { Frecuencia } from './frecuencia';
import { PuntoLinea } from './punto-linea';
@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private apiURL = "http://localhost:8000/api/ruta";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private httpClient: HttpClient) { }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  obtenerDetallesPorZona(zona: string): Observable<DetalleRuta[]> {
    const url = `${this.apiURL}/detalles/${zona}`;
    return this.httpClient.get<DetalleRuta[]>(`${url}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getRuta(id: number): Observable<Ruta> {
    return this.httpClient.get<Ruta>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
  }

  getPuntosRuta(id: number): Observable<PuntoLinea[]> {
    return this.httpClient.get<PuntoLinea[]>(`${this.apiURL}/${id}/puntos`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getFrecuencia(idDetalleRuta: number): Observable<Frecuencia[]> {
    return this.httpClient.get<Frecuencia[]>(`${this.apiURL}/detalles/${idDetalleRuta}/frecuencias`)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getDetalle(id: number): Observable<DetalleRuta> {
    const url = `${this.apiURL}/${id}/detalles`;
    return this.httpClient.get<DetalleRuta>(`${url}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
