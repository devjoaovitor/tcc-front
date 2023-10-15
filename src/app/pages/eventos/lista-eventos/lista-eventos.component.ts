import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/eventos.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent implements OnInit {
  eventos: any[] = [];
  constructor(private eventoService: EventoService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
    this.carregarEventos();
  }

  carregarEventos() {
    this.eventoService.obterEventos().subscribe(
      eventos => {
        console.log('Eventos:', eventos);
        this.eventos = eventos;
      },
      error => {
        console.error('Erro ao buscar os eventos:', error);
      }
    );
  }

  formatarData(data: string): string {
    const dataObj = new Date(data);
    const dia = ('0' + dataObj.getDate()).slice(-2);
    const mes = ('0' + (dataObj.getMonth() + 1)).slice(-2);
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  editarEvento(id: number) {
    this.router.navigate(['/evento/edit', id]);
  }

  gerarRelatorio() {
    this.eventoService.gerarRelatorio().subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Erro ao gerar relatório:', error);
      }
    );
  }


  excluirEvento(id: number) {
    console.log('Excluir evento com o ID:', id);
    this.toastService.showToast('Você tem certeza que deseja excluir esse evento?<br>Esta ação é irreversível.', 'Fechar', 'Deletar');
  }
}
