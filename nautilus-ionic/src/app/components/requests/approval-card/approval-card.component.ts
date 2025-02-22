import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestCommand, RequestCommandType, RequestStatus} from "../../../api";
import {ConfirmActionComponent} from "../../utils/confirm-action/confirm-action.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-approval-card',
  templateUrl: './approval-card.component.html',
  styleUrls: ['./approval-card.component.scss'],
})
export class ApprovalCardComponent {

  @Input() buttonsDisabled: boolean = true;
  @Output() confirmationEvent = new EventEmitter<boolean>();

  constructor(private modalController: ModalController) {}

  async approveRequest() {
    const confirmed = await this.openConfirmModal(
      'Confirm Approval',
      'Are you sure you want to approve this request?'
    );
    if (confirmed) {
      console.log('Request approved!');

      this.confirmationEvent.emit(true)

    }
  }

  async rejectRequest() {
    const confirmed = await this.openConfirmModal(
      'Confirm Rejection',
      'Are you sure you want to reject this request?'
    );
    if (confirmed) {
      this.confirmationEvent.emit(false)
      // Add your rejection logic here
    }
  }

  async openConfirmModal(title: string, description: string) {
    const modal = await this.modalController.create({
      component: ConfirmActionComponent,
      componentProps: { title, description },
      cssClass: 'confirm-modal'
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    return data; // returns true/false depending on user action
  }

  protected readonly RequestStatus = RequestStatus;
}
