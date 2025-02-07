import { Component, OnInit } from '@angular/core';
import {
  BaseRequest,
  RequestControllerService,
  RequestFilter,
  RequestListResponse,
  RequestStatus,
  RequestType
} from "../../api";
import {JoinRequestDto} from "../../api/model/joinRequestDto";
import {RequestsFilterService} from "../../services/requests/requests-filter.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  filters: RequestFilter = {} as RequestFilter;

  requestTypes = Object.values(RequestType);

  requestResponse: RequestListResponse = {} as RequestListResponse;
  constructor(private requestController: RequestControllerService,
              private requestFilterService: RequestsFilterService) { }

  ngOnInit() {
    this.filters = Object.assign({} as RequestFilter, {
      requestType: RequestType.OrganizationJoinRequest,
      status: RequestStatus.Pending
    } as RequestFilter);

    this.requestFilterService.filters$.subscribe(filters => {
      if (filters !== null){
        this.filters = filters;
        this.loadJoinRequests();
      }
    });

    this.loadJoinRequests();

  }

  private loadJoinRequests() {
    this.requestController.apiRequestsListPost(this.filters).subscribe(response => {
      console.log("Received response", response)
      this.requestResponse = response;
    });
  }

  filterTypeChanged($event: any) {
    this.filters.requestType = $event.detail.value;
    this.loadJoinRequests();
  }

}
