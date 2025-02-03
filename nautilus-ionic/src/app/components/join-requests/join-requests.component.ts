import { Component, OnInit } from '@angular/core';
import {
  BaseRequest,
  JoinRequest,
  RequestControllerService,
  RequestFilter,
  RequestListResponse,
  RequestType
} from "../../api";

@Component({
  selector: 'app-join-requests',
  templateUrl: './join-requests.component.html',
  styleUrls: ['./join-requests.component.scss'],
})
export class JoinRequestsComponent  implements OnInit {

  filters: RequestFilter = {} as RequestFilter;

  requestTypes = Object.values(RequestType);

  requestResponse: RequestListResponse = {} as RequestListResponse;
  constructor(private requestController: RequestControllerService) { }

  ngOnInit() {
    this.filters = Object.assign({} as RequestFilter, {
    requestType: "VIEW_ALL_LIST"
    } as RequestFilter);

    this.loadJoinRequests();

  }

  private loadJoinRequests() {
    this.requestController.apiRequestsListPost(this.filters).subscribe(response => {
      console.log("Received response", response)
      this.requestResponse = response;
    });
  }

  filtersChanged($event: any) {
    // this.filters.status = $event.detail.value;
    console.log("new filters: ", this.filters);
    this.loadJoinRequests();
  }

  filterTypeChanged($event: any) {
    this.filters.requestType = $event.detail.value;
    this.loadJoinRequests();
  }

  // Function to format timestamp (adjust to your preferred format)
  formatTimestamp(timestamp: string | undefined): string {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleString(); // Example: Converts to "Jan 30, 2025, 11:16 AM"
  }

  // Function to assign status colors
  getStatusColor(status: string | undefined): string {
    switch (status?.toLowerCase()) {
      case 'pending': return 'warning';
      case 'approved': return 'success';
      case 'rejected': return 'danger';
      default: return 'medium'; // Default grey color
    }
  }

  getStatusIcon(status: string | undefined): string {
    switch (status?.toLowerCase()) {
      case 'pending': return 'hourglass-outline';
      case 'approved': return 'checkmark-circle-outline';
      case 'rejected': return 'close-circle-outline';
      default: return 'help-circle-outline'; // Default icon
    }
  }


  // TODO: UNDERSTAND HOW TO DISPLAY THIS DATA,
  //  MAYBE IT COULD BE A GOOD IDEA TO ABSTRACT INTO TWO DIFFERENT COMPONENT
  //  SINCE WE ALSO HAVE TO HANDLE NAVIGATION DIFFERENTLY
  getCardTitle(requestType: BaseRequest ) {
    switch (requestType.requestType){
      case "ORGANIZATION_JOIN_REQUEST":
        return requestType.motivation;
      case "INVENTORY_REQUEST":
        return requestType.associationId;
      default:
        return 'Request';
    }
  }

  getIcon(requestType: BaseRequest) {
    switch (requestType.requestType){
      case "ORGANIZATION_JOIN_REQUEST":
        return 'business-outline';
      case "INVENTORY_REQUEST":
        return 'cube-outline';
      default:
        return 'help-outline'
    }
  }

  // getCardSubtitle(requestType: BaseRequest) {
  //   switch (requestType.requestType){
  //     case "ORGANIZATION_JOIN_REQUEST":
  //       return "Request ID:" + requestType.requestId
  //     case "INVENTORY_REQUEST":
  //
  //   }
  // }
}
