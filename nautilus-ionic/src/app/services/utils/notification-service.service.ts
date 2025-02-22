import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {ToastController} from "@ionic/angular";

export interface CallNotification {
  message: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<CallNotification>();
  notifications$: Observable<CallNotification> = this.notificationSubject.asObservable();

  constructor() {}

  showSuccess(message: string, duration: number = 5000): void {
    this.notificationSubject.next({ message, type: 'success' });
    setTimeout(() => this.clear(), duration);
  }

  showError(message: string, duration: number = 5000): void {
    this.notificationSubject.next({ message, type: 'error' });
    setTimeout(() => this.clear(), duration);
  }

  clear(): void {
    this.notificationSubject.next({} as CallNotification);
  }


  // async showSuccess(message: string, duration: number = 3000) {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration,
  //     position: 'bottom',
  //     cssClass: 'toast-success'
  //   });
  //   await toast.present();
  // }
  //
  // async showError(message: string, duration: number = 3000) {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration,
  //     position: 'bottom',
  //     cssClass: 'toast-error'
  //   });
  //   await toast.present();
  // }
}
