import { Component, OnInit } from '@angular/core';
import {
  AssociationDTO,
  RequestControllerService,
  RequestFilter,
  RequestListResponse,
  RequestStatus,
  RequestType
} from "../../api";
import {RequestsFilterService} from "../../services/requests/requests-filter.service";
import {
  AddAssociationModalComponent
} from "../../components/modals/add-association-modal/add-association-modal.component";
import {ModalController} from "@ionic/angular";
import {RequestAddModalComponent} from "../../components/requests/request-add-modal/request-add-modal.component";

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

  protected readonly RequestType = RequestType;

  async openAddModal(requestType: RequestType | undefined) {
    const modal = await this.modalCtrl.create({
      component: RequestAddModalComponent,
      componentProps: { requestType: requestType, isEdit: false }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      // const result: AssociationDTO = data.association;
      // this.addAssociation(result);
    }
  }
}
