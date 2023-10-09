import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements AfterViewInit {
  closeButtonLabel: string = 'Fechar';
  confirmButtonLabel: string = 'Sim';

  constructor(private toastService: ToastService) {}

  ngAfterViewInit() {
    this.toastService.setToastComponent(this);
  }

  showToast: boolean = false;
  message: string = '';

  show(message: string, closeButtonLabel: string, confirmButtonLabel: string) {
    this.message = message;
    this.closeButtonLabel = closeButtonLabel;
    this.confirmButtonLabel = confirmButtonLabel;
    this.showToast = true;
  }

  // Função para esconder o toast
  hideToast() {
    this.showToast = false;
  }

  // Função para ação de confirmação
  confirm() {
    // Adicione a lógica que deseja executar ao confirmar aqui
    console.log('Ação de confirmação');
    this.hideToast();
  }
}
