import { Component, OnInit } from '@angular/core';
import {
  AssociationRequestDTO,
  RequestCommand, RequestCommandType,
  RequestControllerService,
  RequestStatus,
  RequestType
} from "../../../../api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-association-request-detail',
  templateUrl: './association-request-detail.page.html',
  styleUrls: ['./association-request-detail.page.scss'],
})
export class AssociationRequestDetailPage implements OnInit {
  requestId?: string | null;
  req?: AssociationRequestDTO = {} as AssociationRequestDTO;

  constructor(private activatedRoute: ActivatedRoute,
              private requestController : RequestControllerService,) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id'); // Get ID from URL

    this.loadRequest();

  }

  loadRequest(){
    if (this.requestId !== null){
      const command: RequestCommand = {
        requestId: this.requestId,
        requestType: RequestType.AssociationRequest,
      };

      this.requestController.apiRequestsGetPost(command).subscribe(req => {
        this.req = req.associationRequestDTO;
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

  protected readonly RequestStatus = RequestStatus;

  handleConfirmationEvent(confirmed: boolean) {
    if(confirmed){
      // Add your approval logic here
      var command = Object.assign({} as RequestCommand, {
        requestType: RequestType.AssociationRequest,
        requestId: this.requestId,
        commandType: RequestCommandType.Approve
      } as RequestCommand);

      this.requestController.apiRequestsApprovePost(command).subscribe(value => {
        this.loadRequest();
      });
    }
    else{
    //   TODO: HANDLE REJECTION MECHANISM
    }
  }
}
