import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos-edit',
  templateUrl: './eventos-edit.component.html',
  styleUrls: ['./eventos-edit.component.scss']
})
export class EventosEditComponent implements OnInit {
  evento: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventoService: EventoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const eventId = Number(params.get('id'));
      // this.evento = this.eventoService.getEventoById(eventId); // Implemente essa função no seu serviço
    });
  }
}
