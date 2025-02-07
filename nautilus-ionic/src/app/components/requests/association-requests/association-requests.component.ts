import {Component, Input, OnInit} from '@angular/core';
import {
  BaseRequest,
  JoinRequest,
  RequestControllerService, RequestFilter,
} from "../../../api";
import {RequestsFilterService} from "../../../services/requests/requests-filter.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-association-requests',
  templateUrl: './association-requests.component.html',
  styleUrls: ['./association-requests.component.scss'],
})
export class AssociationRequestsComponent implements OnInit {

  @Input() request: JoinRequest = {} as JoinRequest;

  constructor(private requestFilterService: RequestsFilterService, private router:Router) { }

  ngOnInit() {
    // this.requestFilterService.setFilters();
    return
  }

  // mockAddRequest() {
  //   var requestDto = Object.assign({} as JoinRequestDto, {
  //     associationName: `Association ${Math.floor(Math.random() * 1000)}`,
  //     timestamp: new Date().toISOString(),
  //     date: new Date().toISOString().split("T")[0],
  //     motivation: "We would like to partner for an upcoming event.",
  //     contactInfo: {
  //       email: `contact${Math.floor(Math.random() * 100)}@example.com`,
  //       phone: `+1${Math.floor(1000000000 + Math.random() * 9000000000)}`,
  //     },
  //     status: 'Pending',
  //     requestSource: 'web',
  //     history: [
  //       {
  //         changedBy: "client",
  //         timestamp: new Date().toISOString()
  //       },
  //     ],
  //   } as JoinRequestDto);
  //
  //   console.log("sending:", requestDto);
  //
  //   this.requestsController.apiRequestsAddPost(requestDto).subscribe(value => {
  //     console.log("received response!!! ", value);
  //   })
  // }

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


  navigateToDetail() {
    this.router.navigate(['requests/get', this.request.requestId]);
  }
}
