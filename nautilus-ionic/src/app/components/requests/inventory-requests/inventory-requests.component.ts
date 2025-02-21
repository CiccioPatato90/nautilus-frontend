import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestsFilterService} from "../../../services/requests/requests-filter.service";
import {Router} from "@angular/router";
import {
  InventoryBoxDTO,
  InventoryRequestDTO,
  ObjectId,
  ProjectStatus, RequestCommand, RequestCommandType, RequestControllerService,
  RequestListResponse,
  RequestStatus, RequestType
} from "../../../api";
import {ModalController} from "@ionic/angular";
import {
  InventoryRequestAddModalComponent
} from "../modals/inventory-request-add-modal/inventory-request-add-modal.component";

@Component({
  selector: 'app-inventory-requests',
  templateUrl: './inventory-requests.component.html',
  styleUrls: ['./inventory-requests.component.scss'],
})
export class InventoryRequestsComponent  implements OnInit {

  @Input() requestResponse: RequestListResponse = {} as RequestListResponse;
  @Output() addRequestEvent = new EventEmitter<RequestCommand>();
  inventoryRequestsMap : Map<string, Array<InventoryRequestDTO>> = new Map();

  constructor(private requestFilterService: RequestsFilterService, private router: Router,
              private modalCtrl: ModalController,
              private requestService: RequestControllerService) { }

  ngOnInit() {

    if(this.requestResponse){
      // @ts-ignore
      this.inventoryRequestsMap = new Map(Object.entries(this.requestResponse.inventoryRequests));
      console.log("maps!", this.inventoryRequestsMap);
    }
  }

  formatTimestamp(timestamp: string | undefined): string {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleString();
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

  async openAddInventoryModal() {
    const modal = await this.modalCtrl.create({
      component: InventoryRequestAddModalComponent,
      backdropDismiss: false,
      componentProps: { isEdit: false }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log("received change array", data.state);
      console.log("for assoc", data.assoc);

      var req = {
        status: RequestStatus.Pending,
        associationSqlId: data.assoc,
        inventoryChanges: data.state
      } as InventoryRequestDTO;

      console.log("req", req);

      var command = {
        inventoryRequestDTO: req,
        commandType: RequestCommandType.Insert,
        requestType: RequestType.InventoryRequest
      } as RequestCommand;

      this.addRequestEvent.emit(command);

      // this.requestService.apiRequestsAddPost(command).subscribe(value => {
      //   console.log("saved req with ID", value.requestMongoID)
      // })
    }
  }
}
