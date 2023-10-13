import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {
  vendasForm: FormGroup;
  bebidasDisponiveis = [
    { nome: 'Bebida 1', quantidade: 20 },
    { nome: 'Bebida 2', quantidade: 15 },
    // ... adicione outras bebidas disponíveis com suas quantidades
  ];

  constructor(private fb: FormBuilder) {
    this.vendasForm = this.fb.group({
      bebida: ['', Validators.required],
      quantidade: ['', Validators.required],
      valor: [''],
      formaPagamento: ['', Validators.required],
    });
  }

  get nomeCliente() { return this.vendasForm.get('nomeCliente'); }
  get bebida() { return this.vendasForm.get('bebida'); }
  get quantidade() { return this.vendasForm.get('quantidade'); }
  get valor() { return this.vendasForm.get('valor'); }


  registrarVenda() {
    const bebidaSelecionada = this.bebidasDisponiveis.find(bebida => bebida.nome === this.bebida?.value);
    if (bebidaSelecionada) {
      const quantidadeVendida = parseInt(this.quantidade?.value, 10);
      if (quantidadeVendida > 0 && quantidadeVendida <= bebidaSelecionada.quantidade) {
        bebidaSelecionada.quantidade -= quantidadeVendida;
        console.log('Venda registrada. Novo estoque:', this.bebidasDisponiveis);
      } else {
        console.log('Quantidade inválida ou excede o estoque disponível.');
      }
    } else {
      console.log('Bebida não encontrada.');
    }
  }

  limparCampos(): void {
    this.vendasForm.get('quantidade')?.reset();
    this.vendasForm.get('formaPagamento')?.reset();
  }

  getMaxQuantidade(): number {
    const bebidaSelecionada = this.bebidasDisponiveis.find(bebida => bebida.nome === this.bebida?.value);

    if (bebidaSelecionada) {
      return bebidaSelecionada.quantidade;
    }

    return 0;
  }

  obterEstoqueBebida(): number {
    const bebidaSelecionada = this.bebidasDisponiveis.find(bebida => bebida.nome === this.bebida?.value);
    return bebidaSelecionada ? bebidaSelecionada.quantidade : 0;
  }

  validarQuantidade(): void {
    const bebidaSelecionada = this.bebidasDisponiveis.find(bebida => bebida.nome === this.bebida?.value);
    const quantidadeInput = this.vendasForm.get('quantidade');

    if (bebidaSelecionada && quantidadeInput) {
      const quantidadeVendida = parseInt(quantidadeInput.value, 10);

      // Limita a quantidade ao estoque disponível
      if (quantidadeVendida > bebidaSelecionada.quantidade) {
        quantidadeInput.setValue(bebidaSelecionada.quantidade); // Define a quantidade como o máximo disponível
      }
    }
  }

  // onKeyPress(event: any) {
  //   const allowedChars = /[0-9\.\ ]/;
  //   const inputChar = String.fromCharCode(event.charCode);

  //   if (!allowedChars.test(inputChar)) {
  //     event.preventDefault();
  //   }
  // }
}
