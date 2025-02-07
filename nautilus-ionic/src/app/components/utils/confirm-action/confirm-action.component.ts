import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.scss'],
})
export class ConfirmActionComponent {

  @Input() title: string | undefined;
  @Input() description: string | undefined;

  constructor(private modalController: ModalController) {}

  confirm() {
    this.modalController.dismiss(true);
  }

  cancel() {
    this.modalController.dismiss(false);
  }
}
