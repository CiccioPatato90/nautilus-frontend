import {Component, Input, OnInit} from '@angular/core';
import {
  AssociationDTO,
  InventoryItemDTO, ProjectAllocatedResources, ProjectAllocatedResourcesDTO,
  ProjectItem,
  ProjectRequest, ProjectRequestDTO, ProjectStatus, RequestCommand, RequestCommandType,
  RequestControllerService, RequestStatus,
  RequestType
} from "../../../api";

@Component({
  selector: 'app-request-add-modal',
  templateUrl: './request-add-modal.component.html',
  styleUrls: ['./request-add-modal.component.scss'],
})
export class RequestAddModalComponent implements OnInit {

  @Input() type: RequestType | undefined;
  associations : Array<AssociationDTO> | undefined = [];
  items : Array<InventoryItemDTO> | undefined = [];

  selectedAssoc: AssociationDTO | undefined;
  selectedItems: any[] = [];
  chosenBudget: number | undefined;
  constructor(private requestController : RequestControllerService) { }

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
    const projReq: ProjectRequest = {
      requestId: "",
      associationReqId: "",
      associationSQLId: this.selectedAssoc?.id?.toString() || "",
      associationConfirmed: false,
      associationName: this.selectedAssoc?.name || "",
      requestType: RequestType.ProjectRequest,
      motivation: "",
      status: RequestStatus.Pending,
      tags: [],
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      projectName: "",
      description: "",
      budget: this.chosenBudget ?? 0,
      requiredItemsSQLId: this.selectedItems?.map(item => ({
        sqlId: item.id || "",
        quantityNeeded: item.quantityNeeded ?? Math.floor(Math.random() * 20) + 1,
      })) || [],
      projectPlan: [],
      projectStatus: ProjectStatus.Allocated,
      allocationId: "",
      // Initialize with empty object instead of type cast
      allocatedResources: {},
    };

    // const projReq: ProjectRequestDTO = {
    //   projectName: "My Project",
    //   description: "A sample project description",
    //   budget: this.chosenBudget ?? 0,
    //   requiredItemsSQLId: this.selectedItems?.map(item => ({
    //     sqlId: item.id || "",
    //     quantityNeeded: item.quantityNeeded ?? Math.floor(Math.random() * 20) + 1,
    //   })) || [],
    // };

    const command: RequestCommand = {
      commandType: RequestCommandType.Insert,
      // projectRequestDTO: projReq,
      request: projReq,
      requestType: RequestType.ProjectRequest,
    };


    console.log("command: ", JSON.stringify(command, null, 2));

    this.requestController.apiRequestsAddPost(command).subscribe(value => {
      console.log("received ", value);
    });
  }

}
