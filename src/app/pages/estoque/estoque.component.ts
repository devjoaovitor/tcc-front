import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {
  bebidas: any[];

  constructor(private toastService: ToastService, private router: Router) {
    this.bebidas = [
      { id: 1, nome: 'Cerveja', quantidade: 20, descricao: 'Uma bebida fermentada feita a partir de grãos de cevada.' },
      { id: 2, nome: 'Vinho Tinto', quantidade: 15, descricao: 'Vinho feito de uvas tintas, muitas vezes servido em temperatura ambiente.' },
      { id: 3, nome: 'Vinho Branco', quantidade: 10, descricao: 'Vinho feito de uvas brancas, normalmente servido gelado.' }
    ];
  }

  ngOnInit() {}

  editarBebida(id: number) {
    console.log('Editar bebida com o ID:', id);
    this.router.navigate(['/bebidas/edit', id]);
  }

  excluirBebida(id: number) {
    console.log('Excluir bebida com o ID:', id);
    this.toastService.showToast('Você tem certeza que deseja excluir esta bebida?<br>Esta ação é irreversível.', 'Fechar', 'Deletar');
  }

  gerarRelatorio() {

  }

}
