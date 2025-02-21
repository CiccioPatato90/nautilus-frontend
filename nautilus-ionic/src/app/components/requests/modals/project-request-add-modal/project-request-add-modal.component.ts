import {Component, Input, OnInit} from '@angular/core';
import {
  AssociationDTO,
  InventoryItemDTO,
  ProjectRequestDTO, RequestCommand, RequestCommandType,
  RequestControllerService,
  RequestStatus,
  RequestType
} from "../../../../api";
import {formatDate} from "@angular/common";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-request-add-modal',
  templateUrl: './project-request-add-modal.component.html',
  styleUrls: ['./project-request-add-modal.component.scss'],
})
export class ProjectRequestAddModalComponent implements OnInit {

  associations : Array<AssociationDTO> | undefined = [];
  items : Array<InventoryItemDTO> | undefined = [];

  selectedAssoc: AssociationDTO | undefined;
  selectedItems: any[] = [];
  chosenBudget: number | undefined;
  constructor(private requestController : RequestControllerService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.requestController.apiRequestsCommonGet().subscribe(value => {
      if(value){
        this.associations = value.associationsList;
        this.items = value.itemsList;
      }
    });
  }

  protected readonly RequestType = RequestType;

  saveRequest() {
    const projReq: ProjectRequestDTO = {
      projectName: this.selectedAssoc?.name + "TEST",
      description: this.selectedAssoc?.name + "MOTIVATION TEST",
      budget: this.chosenBudget ?? 0,
      associationSqlId: this.selectedAssoc?.id,
      requiredItemsSQLId: this.selectedItems?.map(item => ({
        sqlId: item.id,
        quantityNeeded: item.quantityNeeded ?? Math.floor(Math.random() * 20) + 1,
      })),
    };

    const command: RequestCommand = {
      commandType: RequestCommandType.Insert,
      projectRequestDTO: projReq,
      requestType: RequestType.ProjectRequest,
    };

    this.modalCtrl.dismiss({
      command: command
    });
  }

  cancel(){
    this.modalCtrl.dismiss();
  }

}
