import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  private apiUrl = 'http://localhost:3000/api/bebidas';

  constructor(private http: HttpClient) {}

  getBebida(id: number): Observable<any> {
    return of({
      id: id,
      nome: 'Bebida Mockada',
      tipoBebida: 1,
      teorAlcoolico: 0,
      valorUnitario: 10,
      quantidadeBebida: 10,
      descricaoBebida: 'Esta é uma bebida mockada.'
    });
  }

  getAllBebidas(): Observable<any> {
    return this.http.get(`/api/bebidas`);
  }

  salvarBebida(bebidaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, bebidaData);
  }

  updateBebida(bebida: any): Observable<any> {
    return this.http.put(`/api/bebidas/${bebida.id}`, bebida);
  }

  deleteBebida(id: number): Observable<any> {
    return this.http.delete(`/api/bebidas/${id}`);
  }

}
