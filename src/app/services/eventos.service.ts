import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = 'http://localhost:3000/api/eventos';

  constructor(private http: HttpClient) {}

  salvarEvento(evento: any): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, evento);
  }

  obterEventos(): Observable<any[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<any[]>(url);
  }
}
