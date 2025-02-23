import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ObjectId, ProjectRequestDTO, RequestCommand, RequestListResponse} from "../../../../api";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {ProjectRequestAddModalComponent} from "../../modals/project-request-add-modal/project-request-add-modal.component";

@Component({
  selector: 'app-project-requests',
  templateUrl: './project-requests.component.html',
  styleUrls: ['./project-requests.component.scss'],
})
export class ProjectRequestsComponent implements OnInit{

  @Input() requestResponse: RequestListResponse = {} as RequestListResponse;
  @Output() addRequestEvent = new EventEmitter<RequestCommand>();

  projectRequestsMap : Map<string, Array<ProjectRequestDTO>> = new Map();

  constructor(private router:Router,
              private modalCtrl: ModalController) { }


  ngOnInit() {
    // @ts-ignore
    if(this.requestResponse.projectRequests){
      console.log(Object.entries(this.requestResponse.projectRequests));
      this.projectRequestsMap = new Map(Object.entries(this.requestResponse.projectRequests));
    }
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

  async openAddProjectModal() {
    const modal = await this.modalCtrl.create({
      component: ProjectRequestAddModalComponent,
      componentProps: { isEdit: false }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      var command = data.command;

      this.addRequestEvent.emit(command);
    }
  }


  navigateToDetail(id: ObjectId | undefined) {
    this.router.navigate(['requests/get/p', id]);
  }
}
