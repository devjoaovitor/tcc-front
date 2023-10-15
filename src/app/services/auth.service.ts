import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  // login(email: string, senha: string): Observable<any> {
  //   const credentials = { email, senha };
  //   return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  // }

  login(email: string, senha: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, senha }).pipe(
      tap(response => {
        // Armazena a permissão no localStorage
        localStorage.setItem('permissao', response.usuario.permissao);
      })
    );
  }
}
