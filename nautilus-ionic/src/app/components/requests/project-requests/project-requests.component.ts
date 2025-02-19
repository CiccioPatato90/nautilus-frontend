import {Component, Input, OnInit} from '@angular/core';
import {AssociationRequest, ProjectRequest} from "../../../api";
import {RequestsFilterService} from "../../../services/requests/requests-filter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-requests',
  templateUrl: './project-requests.component.html',
  styleUrls: ['./project-requests.component.scss'],
})
export class ProjectRequestsComponent  implements OnInit {

  @Input() request: ProjectRequest = {} as ProjectRequest;

  constructor(private router:Router) { }

  ngOnInit() {
    // this.requestFilterService.setFilters();
    return
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


  navigateToDetail() {
    this.router.navigate(['requests/get', this.request.requestId]);
  }
}
