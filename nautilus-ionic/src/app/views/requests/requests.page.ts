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
              private modalCtrl : ModalController) { }

  ngOnInit() {
    this.filters = Object.assign({} as RequestFilter, {
      requestType: RequestType.AssociationRequest,
      status: RequestStatus.Pending
    } as RequestFilter);

    this.requestFilterService.filters$.subscribe(filters => {
      if (filters !== null){
        this.filters = filters;
        this.loadRequests();
      }
    });

    this.loadRequests();

  }

  private loadRequests() {
    this.requestController.apiRequestsListPost(this.filters).subscribe(response => {
      this.requestResponse = response
    });
  }

  filterTypeChanged($event: any) {
    this.filters.requestType = $event.detail.value;
    this.requestResponse = undefined;
    this.loadRequests();
  }

  protected readonly RequestType = RequestType;

  addRequest(command: RequestCommand) {
    this.requestController.apiRequestsAddPost(command).subscribe(value => {
      console.log("saved req with ID", value.requestMongoID);
      this.loadRequests();
    });
  }
}
