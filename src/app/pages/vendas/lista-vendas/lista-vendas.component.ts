import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  formatarData(data: string): string {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  gerarRelatorio(){

  }
}
