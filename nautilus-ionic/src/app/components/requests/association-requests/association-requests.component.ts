import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestsFilterService} from "../../../services/requests/requests-filter.service";
import {Router} from "@angular/router";
import {
  AssociationRequestDTO,
  InventoryRequestDTO,
  ObjectId, RequestCommand, RequestCommandType, RequestControllerService,
  RequestListResponse,
  RequestStatus,
  RequestType
} from "../../../api";
import {ModalController} from "@ionic/angular";
import {
  AssociationRequestAddModalComponent
} from "../modals/association-request-add-modal/association-request-add-modal.component";


@Component({
  selector: 'app-association-requests',
  templateUrl: './association-requests.component.html',
  styleUrls: ['./association-requests.component.scss'],
})
export class AssociationRequestsComponent implements OnInit {

  @Input() requestResponse: RequestListResponse = {} as RequestListResponse;
  @Output() addRequestEvent = new EventEmitter<RequestCommand>();
  associationRequests?: Array<AssociationRequestDTO>;

  constructor(private requestFilterService: RequestsFilterService,
              private router:Router,
              private modalCtrl : ModalController,
              private requestService: RequestControllerService) { }

  ngOnInit() {
    // this.requestFilterService.setFilters();
    if(this.requestResponse){
      // @ts-ignore
      this.associationRequests = this.requestResponse.associationRequests;
    }

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


  navigateToDetail(id: ObjectId | undefined) {
    this.router.navigate(['requests/get', id]);
  }

  async openAddAssociationModal() {
    const modal = await this.modalCtrl.create({
      component: AssociationRequestAddModalComponent,
      componentProps: { isEdit: false }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      // const result: AssociationRequestDTO = data.request;
      // this.addAssociation(result);
      const result= Object.assign(
        data.request as AssociationRequestDTO,
        {

        } as AssociationRequestDTO)

      console.log("req", result);

      var command = {
        associationRequestDTO: result,
        commandType: RequestCommandType.Insert,
        requestType: RequestType.AssociationRequest
      } as RequestCommand;

      this.addRequestEvent.emit(command);
    }
  }

  protected readonly RequestType = RequestType;
}
