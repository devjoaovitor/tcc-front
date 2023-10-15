import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';
import { VendasService } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.scss']
})
export class ListaVendasComponent {
  vendas: any[] = [];
  constructor(private vendasService: VendasService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
    this.carregarVendas();
  }

  carregarVendas() {
    this.vendasService.getVendas().subscribe(
      vendas => {
        this.vendas = vendas;
      },
      error => {
        console.error('Erro ao buscar os eventos:', error);
      }
    );
  }

  formatarPagamento(formaPagamento: string): string {
    switch (formaPagamento) {
      case 'cartao_credito':
        return 'Cartão de Crédito';
      case 'cartao_debito':
        return 'Cartão de Débito';
      case 'dinheiro':
        return 'Dinheiro';
      case 'pix':
        return 'PIX';
      default:
        return formaPagamento;
    }
  }

  gerarRelatorio() {
    this.vendasService.gerarRelatorioVendas().subscribe(
      data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Erro ao gerar o relatório de vendas:', error);
      }
    );
  }
}
