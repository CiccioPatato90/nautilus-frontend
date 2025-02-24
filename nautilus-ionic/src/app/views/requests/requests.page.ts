import { Component, OnInit } from '@angular/core';
import {
  RequestCommand,
  RequestControllerService,
  RequestFilter,
  RequestListResponse,
  RequestStatus,
  RequestType
} from "../../api";
import {RequestsFilterService} from "../../services/requests/requests-filter.service";
import {ModalController} from "@ionic/angular";
import {NotificationService} from "../../services/utils/notification-service.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  filters: RequestFilter = {} as RequestFilter;

  requestTypes = Object.values(RequestType);

  requestResponse: RequestListResponse | undefined;
  // requests: Array<InventoryRequestDTO> | Array<AssociationRequestDTO> | Array<ProjectRequestDTO> | undefined;

  constructor(private requestController: RequestControllerService,
              private requestFilterService: RequestsFilterService,
              private notificationService: NotificationService,
              private modalCtrl : ModalController) { }

  ngOnInit() {
    this.filters = Object.assign({} as RequestFilter, {
      requestType: RequestType.AssociationRequest,
      status: RequestStatus.Pending
    } as RequestFilter);

    this.requestFilterService.filters$.subscribe(filters => {
      if (filters !== null){
        this.filters = filters;
      }
    });

    this.loadRequests();

  }

  private loadRequests() {
    this.requestResponse = undefined;
    this.requestController.apiRequestsListPost(this.filters).subscribe(response => {
      this.requestResponse = response
    });
  }

  filterTypeChanged($event: any) {
    this.filters.requestType = $event.detail.value;
    this.requestFilterService.setFilters(this.filters);
    this.loadRequests();
  }

  protected readonly RequestType = RequestType;

  addRequest(command: RequestCommand) {
    this.requestController.apiRequestsAddPost(command).subscribe(value => {
      if(value){
        this.notificationService.showSuccess("Request saved successfully");
        console.log("saved req with ID", value.requestMongoID);
        this.loadRequests();
      }else{
        this.notificationService.showError("Failed to save request");
      }
    });
  }
}
