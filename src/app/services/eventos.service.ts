import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = 'caminho-para-sua-api/eventos';

  private eventos: any[] = [
    { id: 1, nome: 'Evento 1', data: '2023-10-15', local: 'Local 1' },
    { id: 2, nome: 'Evento 2', data: '2023-10-20', local: 'Local 2' },
    { id: 3, nome: 'Evento 3', data: '2023-10-25', local: 'Local 3' },
    // Adicione mais eventos conforme necessário
  ];

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any[]> {
    return of(this.eventos);
  }

  getEventoById(id: number): any {
    return this.eventos.find(evento => evento.id === id);
  }
}
