import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements AfterViewInit {
  closeButtonLabel: string = 'Fechar';
  confirmButtonLabel: string = 'Sim';

  constructor(private toastService: ToastService, private router: Router) {}

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

  hideToast() {
    this.showToast = false;
  }

  confirm() {
   localStorage.removeItem('permissao');
   this.router.navigate(['/login']);
   this.hideToast();
  }
}
