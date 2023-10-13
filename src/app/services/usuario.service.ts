import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: any[] = [
    { id: 1, nome: 'Joao', email: 'teste@gmail.com', permissao: 'Administrador' },
    { id: 2, nome: 'Pedro', email: 'teste@gmail.com', permissao: 'Vendedor' },
    { id: 3, nome: 'Teste', email: 'teste@gmail.com', permissao: 'Visualizacao' }
  ];

  constructor() { }

  // Método para obter todos os usuários
  getUsuarios(): any[] {
    return this.usuarios;
  }

  // Método para obter um usuário por ID
  getUsuarioById(id: number): any {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  // Método para editar um usuário
  editarUsuario(id: number, novoUsuario: any): void {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
      this.usuarios[index] = { ...novoUsuario, id };
    }
  }
}
