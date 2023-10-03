import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventoForm: FormGroup;
  public bebidasDoEvento: any[] = [];

  public bebidasDisponiveis = [
    { nome: 'Bebida 1' },
    { nome: 'Bebida 2' },
  ];

  constructor(private fb: FormBuilder) {
    this.eventoForm = this.fb.group({
      nomeEvento: ['', Validators.required],
      dataEvento: ['', Validators.required],
      localEvento: ['', Validators.required],
      bebidaSelecionada: ['', Validators.required],
      quantidadeBebida: ['', Validators.required]
    });

    this.bebidasDoEvento = [];
  }

  ngOnInit() {}

  adicionarBebida() {
    const bebidaSelecionada = this.eventoForm.get('bebidaSelecionada')?.value;
    const quantidadeBebida = this.eventoForm.get('quantidadeBebida')?.value;

    if (bebidaSelecionada && quantidadeBebida) {
      const bebida = { nome: bebidaSelecionada, quantidade: quantidadeBebida };
      this.bebidasDoEvento.push(bebida);  // Crie um array bebidasDoEvento no componente para armazenar as bebidas
    }
  }

  salvarEvento() {
    console.log('Evento salvo:', this.eventoForm.value);
  }
}
