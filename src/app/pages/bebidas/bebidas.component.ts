import { Component, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent {
  public bebidaForm: FormGroup;

  constructor(private fb: FormBuilder, private el: ElementRef) {
    this.bebidaForm = this.fb.group({
      nomeBebida: ['', Validators.required],
      tipoBebida: ['', Validators.required],
      teorAlcoolico: [0, [Validators.required, Validators.max(100)]],
      descricaoBebida: [''],
      quantidadeBebida: ['', [Validators.required, Validators.min(0)]],
      valorUnitario: ['', [Validators.required, Validators.min(0)]],
    });
  }

  get nomeBebida() { return this.bebidaForm.get('nomeBebida'); }
  get tipoBebida() { return this.bebidaForm.get('tipoBebida'); }
  get teorAlcoolico() { return this.bebidaForm.get('teorAlcoolico'); }
  get descricaoBebida() { return this.bebidaForm.get('descricaoBebida'); }
  get quantidadeBebida() { return this.bebidaForm.get('quantidadeBebida'); }
  get valorUnitario() { return this.bebidaForm.get('valorUnitario'); }


  ngOnInit() {}

  salvarBebida() {
    console.log(this.bebidaForm.value);
  }

  limitarValor(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = parseFloat(inputElement.value);

    if (currentValue < 0) {
      inputElement.value = '0';
    } else if (currentValue > 100) {
      inputElement.value = '100';
    }
  }

}
