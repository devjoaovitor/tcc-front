import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BebidaService } from 'src/app/services/bebidas.service';
import { VendasService } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit{
  vendasForm: FormGroup;
  bebidasDisponiveis: any[] = [];
  mensagemDeSucesso: string | null = null;

  constructor(private fb: FormBuilder, private vendasService: VendasService, private bebidaService: BebidaService,) {
    this.vendasForm = this.fb.group({
      bebida: ['', Validators.required],
      quantidade: ['', Validators.required],
      valor: [''],
      formaPagamento: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.obterBebidasDisponiveis();
  }

  obterBebidasDisponiveis() {
    this.bebidaService.getAllBebidas().subscribe(
      (bebidas) => {
        this.bebidasDisponiveis = bebidas;
      },
      (error) => {
        console.error('Erro ao obter bebidas:', error);
      }
    );
  }

  get bebida() { return this.vendasForm.get('bebida'); }
  get quantidade() { return this.vendasForm.get('quantidade'); }
  get valor() { return this.vendasForm.get('valor'); }


  registrarVenda() {
    const vendaData = {
      bebida: this.bebida?.value,
      quantidade: this.quantidade?.value,
      formaPagamento: this.vendasForm.get('formaPagamento')?.value,
      valorVenda: 10,
    };
    this.vendasService.registrarVenda(vendaData).subscribe(
      (response) => {
        this.vendasForm.reset();
        this.obterBebidasDisponiveis();
        const mensagem = response?.message || 'Venda registrada com sucesso!';
        this.mensagemDeSucesso = mensagem;
        setTimeout(() => {
          this.mensagemDeSucesso = null;
        }, 2000);
      },
      (error) => {
        console.error('Erro ao registrar a venda.', error);
      }
    );
}

  limparCampos(): void {
    this.vendasForm.get('quantidade')?.reset();
    this.vendasForm.get('formaPagamento')?.reset();
  }

  getMaxQuantidade(): number {
    const bebidaSelecionada = this.bebidasDisponiveis.find(bebida => bebida.nomebebida === this.bebida?.value);

    if (bebidaSelecionada) {
      return bebidaSelecionada.quantidadebebida;
    }

    return 0;
  }

  obterEstoqueBebida(): number {
    const bebidaSelecionada = this.bebidasDisponiveis.find(bebida => bebida.nomebebida === this.bebida?.value);
    return bebidaSelecionada ? bebidaSelecionada.quantidade : 0;
  }

  validarQuantidade(): void {
    const bebidaSelecionada = this.bebidasDisponiveis.find(bebida => bebida.nomebebida === this.bebida?.value);
    const quantidadeInput = this.vendasForm.get('quantidade');

    if (bebidaSelecionada && quantidadeInput) {
      const quantidadeVendida = parseInt(quantidadeInput.value, 10);

      if (quantidadeVendida > bebidaSelecionada.quantidade) {
        quantidadeInput.setValue(bebidaSelecionada.quantidade);
      }
    }
  }

}
