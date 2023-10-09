import { Injectable } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastComponent!: ToastComponent;

  setToastComponent(toastComponent: ToastComponent) {
    this.toastComponent = toastComponent;
  }

  showToast(message: string, closeButtonLabel: string, confirmButtonLabel: string) {
    if (this.toastComponent) {
      this.toastComponent.show(message, closeButtonLabel, confirmButtonLabel);
    }
  }
}
