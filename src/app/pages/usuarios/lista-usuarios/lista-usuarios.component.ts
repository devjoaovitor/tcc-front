import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent {
  usuarios: any[];

  constructor(private toastService: ToastService, private router: Router) {
    this.usuarios = [
      { id: 1, nome: 'Joao', email: 'teste@gmail.com', permissao: 'Administrador' },
      { id: 2, nome: 'Pedro', email: 'teste@gmail.com', permissao: 'Vendedor' },
      { id: 3, nome: 'Teste', email: 'teste@gmail.com', permissao: 'Visualizacao' }
    ];
  }

  ngOnInit() {
    this.verificacaoPermissao();
  }

  verificacaoPermissao(): boolean {
    const permissao = localStorage.getItem('permissao');
    return permissao === 'Administrador';
  }

  editarUsuario(id: number) {
    console.log('Editar usuario com o ID:', id);
    this.router.navigate(['/usuario/edit', id]);
  }

  excluirUsuario(id: number) {
    console.log('Excluir bebida com o ID:', id);
    this.toastService.showToast('Você tem certeza que deseja excluir esse usuario?<br>Esta ação é irreversível.', 'Fechar', 'Deletar');
  }
}
