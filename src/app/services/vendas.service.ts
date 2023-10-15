import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {
  private apiUrl = 'http://localhost:3000/api/vendas';

  private vendas: any[] = [
    { id: 1, bebida: 'Cerveja', quantidade: 10, formaPagamento: 'PIX', data: '2023-10-15'},
    { id: 2, bebida: 'Cerveja', quantidade: 10, formaPagamento: 'PIX', data: '2023-10-20'},
    { id: 3, bebida: 'Cerveja', quantidade: 10, formaPagamento: 'PIX', data: '2023-10-25'},
  ];

  constructor(private http: HttpClient) { }

  getVendas(): Observable<any[]> {
    return of(this.vendas);
  }

  registrarVenda(vendaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, vendaData);
  }
}
