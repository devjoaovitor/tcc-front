import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BebidaService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {
  bebidas: any[];
  mensagemDeSucesso: string | null = null;

  constructor(private router: Router, private bebidaService: BebidaService) {
    this.bebidas = [];
  }

  ngOnInit() {
    this.carregarBebidas();
  }

  carregarBebidas() {
    this.bebidaService.getAllBebidas().subscribe(
      (bebidas) => {
        this.bebidas = bebidas;
      },
      (error) => {
        console.error('Erro ao obter a lista de bebidas:', error);
      }
    );
  }

  editarBebida(id: number) {
    this.router.navigate(['/bebidas/edit', id]);
  }

  excluirBebida(id: number) {
    this.bebidaService.deleteBebida(id).subscribe(
      (bebidas) => {
        this.bebidas = bebidas;
        this.carregarBebidas()
        this.mensagemDeSucesso = 'Bebida excluída com sucesso!';
        setTimeout(() => {
          this.mensagemDeSucesso = null;
        }, 2000);
      },
      (error) => {
        console.error('Erro ao obter a lista de bebidas:', error);
      }
    );
  }

  gerarRelatorio() {
    this.bebidaService.gerarRelatorioBebidas().subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Erro ao gerar relatório de bebidas:', error);
      }
    );
  }
}
