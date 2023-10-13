import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {
  cadastroForm: FormGroup;
  senhaGerada: string = '';

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: [''],
      tipoUsuario: ['', Validators.required]
    });

    this.gerarSenhaAleatoria();
  }

  get nome() { return this.cadastroForm.get('nome'); }
  get email() { return this.cadastroForm.get('email'); }
  get senha() { return this.cadastroForm.get('senha'); }
  get tipoUsuario() { return this.cadastroForm.get('tipoUsuario'); }

  gerarSenhaAleatoria() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';
    for (let i = 0; i < 6; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    this.senhaGerada = senha;
    this.cadastroForm.patchValue({ senha: senha });
  }

  cadastrarUsuario() {
    console.log('Dados do cadastro:', this.cadastroForm.value);
  }
}
