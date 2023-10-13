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
    this.eventoService.getEventos().subscribe(
      eventos => {
        this.eventos = eventos;
      },
      error => {
        console.error('Erro ao buscar os eventos:', error);
      }
    );
  }

  editarEvento(id: number) {
    console.log('Editar evento com o ID:', id);
    this.router.navigate(['/evento/edit', id]);
  }

  excluirEvento(id: number) {
    console.log('Excluir evento com o ID:', id);
    this.toastService.showToast('Você tem certeza que deseja excluir esse evento?<br>Esta ação é irreversível.', 'Fechar', 'Deletar');
  }
}
