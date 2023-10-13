import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      permissao: ['', Validators.required]
    });
  }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId !== null) {
      this.usuario = this.usuarioService.getUsuarioById(+userId);
      if (this.usuario) {
        this.usuarioForm.patchValue(this.usuario);
      } else {
        console.error('Usuário não encontrado.');
      }
    } else {
      console.error('ID do usuário não fornecido.');
    }
  }

  salvarEdicao() {
    const novoUsuario = { ...this.usuario, ...this.usuarioForm.value };
    this.usuarioService.editarUsuario(this.usuario.id, novoUsuario);
    console.log('Usuário editado com sucesso:', novoUsuario);
    this.router.navigate(['/lista-usuarios']);
  }
}
