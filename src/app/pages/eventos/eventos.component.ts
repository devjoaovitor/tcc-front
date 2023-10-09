import { DatePipe } from '@angular/common';
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
    { nome: 'Cervejaaaaaaa' },
    { nome: 'Vinho Tinto' },
    { nome: 'Vinho Branco' },
    { nome: 'Vodka' },
    { nome: 'Whisky' },
    { nome: 'Tequila' },
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
      this.bebidasDoEvento.push(bebida);
    }
  }

  removerBebida(index: number) {
    this.bebidasDoEvento.splice(index, 1);
  }

  exibirResumoEvento(): boolean {
    const nomeEvento = this.eventoForm.get('nomeEvento')?.value;
    const dataEvento = this.eventoForm.get('dataEvento')?.value;
    const localEvento = this.eventoForm.get('localEvento')?.value;
    const bebidasLength = this.bebidasDoEvento.length;

    return nomeEvento || dataEvento || localEvento || bebidasLength > 0;
  }

  formatarData(data: string): string {
    const datePipe: DatePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(data, 'dd/MM/yyyy');
    return formattedDate || '';
  }

  salvarEvento() {
    console.log('Evento salvo:', this.eventoForm.value);
  }
}
