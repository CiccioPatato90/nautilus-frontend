import { Component, OnInit } from '@angular/core';
import {
  AssociationRequestDTO,
  ProjectRequestDTO,
  RequestCommand, RequestCommandType,
  RequestControllerService, RequestStatus, RequestType
} from "../../../../api";
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../../../../services/utils/notification-service.service";

@Component({
  selector: 'app-project-request-detail',
  templateUrl: './project-request-detail.page.html',
  styleUrls: ['./project-request-detail.page.scss'],
})
export class ProjectRequestDetailPage implements OnInit {

  requestId?: string | null;
  req?: ProjectRequestDTO = {} as ProjectRequestDTO;
  requestingAssoc?: AssociationRequestDTO = {} as AssociationRequestDTO;
  // itemsMetadata?: Map<number, InventoryItemDTO> = new Map<number, InventoryItemDTO>;

  constructor(private activatedRoute: ActivatedRoute,
              private requestController : RequestControllerService,
              private notificationService: NotificationService
              ) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id'); // Get ID from URL
    this.loadRequest();
  }

  loadRequest(){
    if (this.requestId !== null){
      const command: RequestCommand = {
        requestId: this.requestId,
        requestType: RequestType.ProjectRequest,
      };

      this.requestController.apiRequestsGetPost(command).subscribe(req => {
        this.req = req.projectRequestDTO;
        this.requestingAssoc = req.associationRequestDTO;
        // @ts-ignore
        // this.itemsMetadata = new Map(Object.entries(req.commonData?.itemMetadataMap));
      });
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
        requestType: RequestType.ProjectRequest,
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

  simulateSuccess(): void {
    this.notificationService.showSuccess('Operation successful!');
  }

  simulateError(): void {
    this.notificationService.showError('An error occurred!');
  }


}
