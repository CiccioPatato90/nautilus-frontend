import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CallNotification, NotificationService} from "../../../services/utils/notification-service.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          transform: 'translateY(100%)',
          opacity: 0
        }),
        animate('200ms ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({
          transform: 'translateY(100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class NotificationBannerComponent  implements OnInit, OnDestroy {
  private subscription?: Subscription;
  notification: CallNotification | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.subscription = this.notificationService.notifications$.subscribe(
      (notification) => {
        // Check if it's a clear notification (empty message)
        if (!notification.message) {
          this.notification = null;
          return;
        }
        this.notification = notification;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  dismiss() {
    this.notificationService.clear();
  }

}
