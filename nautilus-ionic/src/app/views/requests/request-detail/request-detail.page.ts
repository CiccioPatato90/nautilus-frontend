import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  RequestCommand,
  RequestCommandType,
  RequestControllerService,
  RequestStatus,
  RequestType
} from "../../../api";
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {ConfirmActionComponent} from "../../../components/utils/confirm-action/confirm-action.component";
import {BaseRequest} from "../../../api/model/baseRequest";

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit {
  requestId: string | null | undefined;
  req: any = {};
  constructor( private activatedRoute: ActivatedRoute,
               private requestController : RequestControllerService,) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id'); // Get ID from URL

    if (this.requestId !== null){
      const command: RequestCommand = {
        requestId: this.requestId,
        requestType: RequestType.ProjectRequest,
      };

      this.requestController.apiRequestsGetPost(command).subscribe(req => {
        this.req = req.projectRequestDTO;
        console.log("received req", req);
      });
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
