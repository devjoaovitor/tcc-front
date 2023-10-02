import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventoForm = this.fb.group({
      nomeEvento: ['', Validators.required],
      dataEvento: ['', Validators.required],
      localEvento: ['', Validators.required]
    });
  }

  ngOnInit() {}

  salvarEvento() {
    console.log('Evento salvo:', this.eventoForm.value);
  }
}
