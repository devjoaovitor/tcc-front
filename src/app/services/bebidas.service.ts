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
    console.log('Obtendo bebida com o ID:', id);
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getAllBebidas(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  salvarBebida(bebidaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, bebidaData);
  }

  updateBebida(bebida: any): Observable<any> {
    console.log('Atualizando bebida com o ID:', bebida)
    return this.http.put(`${this.apiUrl}/${bebida.id}`, bebida);
  }

  deleteBebida(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  gerarRelatorioBebidas(): Observable<any> {
    const url = `http://localhost:3000/api/bebida/relatorio`;
    return this.http.get(url, { responseType: 'arraybuffer' as 'json' });
  }

}
