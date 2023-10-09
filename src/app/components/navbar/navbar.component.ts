import { Component } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private toastService: ToastService) {}

  sair() {
    this.toastService.showToast('Tem certeza que deseja sair da aplicação?', 'Fechar', 'Sair');
  }
}
