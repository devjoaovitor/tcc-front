import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {
  private apiUrl = 'http://localhost:3000/api/vendas';

  constructor(private http: HttpClient) { }

  getVendas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  registrarVenda(vendaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, vendaData);
  }

  gerarRelatorioVendas(): Observable<any> {
    const url = `${this.apiUrl}/relatorio`;
    return this.http.get(url, { responseType: 'arraybuffer' as 'json' });
  }

}
