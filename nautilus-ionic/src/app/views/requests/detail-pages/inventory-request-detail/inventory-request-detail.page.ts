import {Component, input, OnInit} from '@angular/core';
import {
  AssociationRequestDTO, InventoryItemDTO, InventoryRequestDTO,
  RequestCommand, RequestCommandType,
  RequestControllerService,
  RequestStatus,
  RequestType
} from "../../../../api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-inventory-request-detail',
  templateUrl: './inventory-request-detail.page.html',
  styleUrls: ['./inventory-request-detail.page.scss'],
})
export class InventoryRequestDetailPage implements OnInit {

  requestId?: string | null;
  req?: InventoryRequestDTO = {} as InventoryRequestDTO;
  requestingAssoc?: AssociationRequestDTO = {} as AssociationRequestDTO;
  itemsMetadata?: Map<number, InventoryItemDTO> = new Map<number, InventoryItemDTO>;

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
        requestType: RequestType.InventoryRequest,
      };

      this.requestController.apiRequestsGetPost(command).subscribe(req => {
        this.req = req.inventoryRequestDTO;
        this.requestingAssoc = req.associationRequestDTO;
        // @ts-ignore
        this.itemsMetadata = new Map(Object.entries(req.commonData?.itemMetadataMap));
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
        requestType: RequestType.InventoryRequest,
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
