import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private toastService: ToastService, private router: Router) {}

  sair() {
    this.toastService.showToast('Tem certeza que deseja sair da aplicação?', 'Fechar', 'Sair');
  }

  // isUserLoggedIn(): boolean {
  //   const permissao = localStorage.getItem('permissao');
  //   return permissao !== null;
  // }

  mudarSenha() {
    const id = 1; // You can get the user ID from the token
    this.router.navigate(['/mudar-senha/', id]);
  }
}
