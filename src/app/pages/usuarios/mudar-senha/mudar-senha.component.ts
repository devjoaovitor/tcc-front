import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

const senhaMatchValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
  const novaSenha = control.get('novaSenha')?.value;
  const confirmSenha = control.get('confirmSenha')?.value;

  if (novaSenha !== confirmSenha) {
    return { 'senhaMismatch': true };
  }

  return null;
};


@Component({
  selector: 'app-mudar-senha',
  templateUrl: './mudar-senha.component.html',
  styleUrls: ['./mudar-senha.component.scss']
})

export class MudarSenhaComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      senhaAtual: ['', [Validators.required, Validators.minLength(6)]],
      novaSenha: ['', [Validators.required, Validators.minLength(6)]],
      confirmSenha: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: senhaMatchValidator });
  }

  mudarSenha() {
    if (this.cadastroForm.valid) {
      const senhaAtual = this.cadastroForm.get('senhaAtual')?.value;
      const novaSenha = this.cadastroForm.get('novaSenha')?.value;
      const confirmSenha = this.cadastroForm.get('confirmSenha')?.value;

      if (novaSenha === confirmSenha) {
        // Implement the logic to change the password here
        // You can use senhaAtual, novaSenha, and confirmSenha
      } else {
        console.log('As senhas não estão iguais.');
      }
    }
  }

  cadastrarUsuario() {
    console.log('Dados do cadastro:', this.cadastroForm.value);
  }
}
