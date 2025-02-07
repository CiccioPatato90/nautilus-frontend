import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  BaseRequest,
  RequestCommand,
  RequestCommandType,
  RequestControllerService,
  RequestStatus,
  RequestType
} from "../../../api";
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {ConfirmActionComponent} from "../../../components/utils/confirm-action/confirm-action.component";

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit {
  requestId: string | null | undefined;
  req: BaseRequest = {} as BaseRequest;
  constructor( private activatedRoute: ActivatedRoute,
               private requestController : RequestControllerService,
               private modalController: ModalController) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id'); // Get ID from URL

    if (this.requestId !== null){
      this.requestController.apiRequestsGetIdPost(this.requestId).subscribe(req => {
        this.req = req;
        console.log("received req", req);
      });
    }


  }

  async openConfirmModal(title: string, description: string) {
    const modal = await this.modalController.create({
      component: ConfirmActionComponent,
      componentProps: { title, description },
      // // Setting the presenting element makes the modal animate and center relative to that element
      // presentingElement: this.routerOutlet?.nativeEl,
      cssClass: 'confirm-modal' // optional: use a custom class for additional styling
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    return data; // returns true/false depending on user action
  }

  async approveRequest() {
    const confirmed = await this.openConfirmModal(
      'Confirm Approval',
      'Are you sure you want to approve this request?'
    );
    if (confirmed) {
      console.log('Request approved!');
      // Add your approval logic here
      var command = Object.assign({} as RequestCommand, {
        requestType: this.req.requestType,
        requestMongoId: this.req.requestId,
        commandType: RequestCommandType.Approve
      } as RequestCommand);

      this.requestController.apiRequestsApprovePost(command).subscribe(value => {
        console.log("REQUEST ACCEPTED CORRECTLY!");
        this.req.status = RequestStatus.Approved;
      });

    } else {
      console.log('Approval cancelled.');
    }
  }

  async rejectRequest() {
    const confirmed = await this.openConfirmModal(
      'Confirm Rejection',
      'Are you sure you want to reject this request?'
    );
    if (confirmed) {
      console.log('Request rejected!');
      // Add your rejection logic here
    } else {
      console.log('Rejection cancelled.');
    }
  }

  getStatusIcon(status: RequestStatus | undefined): string {
    console.log("status!!", status);
    switch (status) {
      case RequestStatus.Approved:
        return 'checkmark-circle-outline';
      case RequestStatus.Pending:
        return 'time-outline';
      case RequestStatus.Rejected:
        return 'close-circle-outline';
      default:
        return 'help-circle-outline';
    }
  }

  getStatusColor(status: RequestStatus | undefined): string {
    switch (status) {
      case RequestStatus.Approved:
        return '#28a745'; // green
      case RequestStatus.Pending:
        return '#ffc107'; // yellow/orange
      case RequestStatus.Rejected:
        return '#dc3545'; // red
      default:
        return '#6c757d'; // gray
    }
  }


  protected readonly RequestType = RequestType;
  protected readonly RequestStatus = RequestStatus;
}
