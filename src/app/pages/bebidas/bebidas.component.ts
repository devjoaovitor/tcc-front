import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent {
  public bebidaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bebidaForm = this.fb.group({
      nomeBebida: ['', Validators.required],
      tipoBebida: ['', Validators.required],
      teorAlcoolico: ['', [Validators.required, Validators.max(100)]],
      descricaoBebida: ['', Validators.required]
    });
  }

  ngOnInit() {}

  salvarBebida() {
    console.log('Bebida salvo:', this.bebidaForm.value);
  }

  limitarValor(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = parseFloat(inputElement.value);

    // Limitar ao intervalo [0, 100]
    if (currentValue < 0) {
      inputElement.value = '0';
    } else if (currentValue > 100) {
      inputElement.value = '100';
    }
  }

}
