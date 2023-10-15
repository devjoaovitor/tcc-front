import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos-edit',
  templateUrl: './eventos-edit.component.html',
  styleUrls: ['./eventos-edit.component.scss']
})
export class EventosEditComponent implements OnInit {
  evento: any = {};
  eventoForm!: FormGroup;
  mensagemDeSucesso: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventoService: EventoService
  ) {

   }

   ngOnInit(): void {
    this.eventoForm = this.fb.group({
      nomeevento: ['', [Validators.required]],
      dataevento: ['', [Validators.required]],
      localevento: ['', [Validators.required]]
    });

    this.route.paramMap.subscribe(params => {
      const eventId = Number(params.get('id'));
      this.eventoService.obterEventoPorId(eventId).subscribe(
        response => {
          this.eventoForm.patchValue(response);
          console.log('Evento obtido com sucesso:', response);
        },
        error => {
          console.error('Erro ao obter o evento:', error);
        }
      );
    });
  }

  formatarData(data: string): string {
    if (data) {
      const date = new Date(data);
      const dia = String(date.getDate()).padStart(2, '0');
      const mes = String(date.getMonth() + 1).padStart(2, '0');
      const ano = date.getFullYear();
      return `${ano}-${mes}-${dia}`;
    }
    return '';
  }

  salvarEvento() {
    this.route.paramMap.subscribe(params => {
      const eventId = Number(params.get('id'));
    this.eventoService.editarEvento(eventId, this.eventoForm.value).subscribe(
      response => {
        this.mensagemDeSucesso = 'Evento editado com sucesso!';
        setTimeout(() => {
          this.mensagemDeSucesso = null;
        }, 2000);
        console.log('Evento editado com sucesso:', response);
      },
      error => {
        console.error('Erro ao editar o evento:', error);
      }
    );
  });
}
}
