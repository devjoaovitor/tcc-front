import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent {
  usuarios: any[] = [];
  mensagemDeSucesso: string | null = null;

  constructor(private toastService: ToastService, private router: Router, private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.verificacaoPermissao();
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.error('Erro ao obter a lista de usuarios:', error);
      }
    );
  }

  verificacaoPermissao(): boolean {
    const permissao = localStorage.getItem('permissao');
    return permissao === 'Administrador';
  }

  editarUsuario(id: number) {
    this.router.navigate(['/usuario/edit', id]);
  }

  excluirUsuario(id: number) {
    this.usuarioService.excluirUsuario(id)
      .subscribe(
        () => {
          this.mensagemDeSucesso = 'Usuário excluído com sucesso!';
          setTimeout(() => {
            this.mensagemDeSucesso = null;
          }, 2000);
          this.getUsuarios()
        },
        (error) => {
          console.error('Erro ao excluir usuário:', error);
        }
      );
  }
}
