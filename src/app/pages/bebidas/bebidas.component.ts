import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent {
  public bebidaForm: FormGroup;

  constructor(private fb: FormBuilder, private toastService: ToastService) {
    this.bebidaForm = this.fb.group({
      nomeBebida: ['', Validators.required],
      tipoBebida: ['', Validators.required],
      teorAlcoolico: ['', [Validators.required, Validators.max(100)]],
      descricaoBebida: ['', Validators.required],
      quantidadeBebida: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {}

  salvarBebida() {

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
