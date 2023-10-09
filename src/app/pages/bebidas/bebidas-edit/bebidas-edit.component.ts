import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BebidaService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-bebidas-edit',
  templateUrl: './bebidas-edit.component.html',
  styleUrls: ['./bebidas-edit.component.scss']
})
export class BebidasEditComponent implements OnInit {
  public bebidaForm: FormGroup;
  bebida: any;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private bebidaService: BebidaService) {
    this.bebidaForm = this.fb.group({
      nomeBebida: ['', Validators.required],
      tipoBebida: ['', Validators.required],
      teorAlcoolico: ['', [Validators.required, Validators.max(100)]],
      descricaoBebida: ['', Validators.required],
      quantidadeBebida: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bebidaService.getBebida(id).subscribe((bebida) => {
      this.bebida = bebida;
      this.patchFormValues(bebida);
    });
  }

  private patchFormValues(bebida: any) {
    this.bebidaForm.patchValue({
      nomeBebida: bebida.nome,
      tipoBebida: bebida.tipoBebida,
      teorAlcoolico: bebida.teorAlcoolico,
      quantidadeBebida: bebida.quantidadeBebida,
      descricaoBebida: bebida.descricaoBebida
    });
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

  salvarBebida() {
    this.bebidaService.updateBebida(this.bebidaForm.value).subscribe(() => {
    });
  }

}
