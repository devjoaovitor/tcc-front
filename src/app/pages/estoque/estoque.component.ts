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
    console.log('Editar bebida com o ID:', id);
    this.router.navigate(['/bebidas/edit', id]);
  }

  excluirBebida(id: number) {
    this.bebidaService.deleteBebida(id).subscribe(
      (bebidas) => {
        this.bebidas = bebidas;
        this.carregarBebidas()
      },
      (error) => {
        console.error('Erro ao obter a lista de bebidas:', error);
      }
    );
  }

  gerarRelatorio() {

  }
}
