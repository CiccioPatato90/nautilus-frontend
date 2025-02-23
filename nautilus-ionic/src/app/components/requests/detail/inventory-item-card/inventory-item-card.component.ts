import {Component, Input, OnInit} from '@angular/core';
import {
  GreedyOrder,
  GreedyStrategy,
  InventoryChangeDTO,
  InventoryItemDTO,
  InventoryRequestControllerService,
  InventoryRequestDTO, InventorySimulationType, ObjectId, ProjectRequest,
  RequestStatus, SimulateCommand, SimulateRequestResponse
} from "../../../../api";

@Component({
  selector: 'app-inventory-item-card',
  templateUrl: './inventory-item-card.component.html',
  styleUrls: ['./inventory-item-card.component.scss'],
})
export class InventoryItemCardComponent  implements OnInit {
  @Input() req: InventoryRequestDTO = {} as InventoryRequestDTO;
  @Input() itemsMetadata: Map<number, InventoryItemDTO> = new Map<number, InventoryItemDTO>();
  originalCompletions: Map<string, number> = new Map<string, number>();

  changesSet = new Set<InventoryChangeDTO>();
  command = {} as SimulateCommand;
  simulationResponse?: SimulateRequestResponse;

  constructor(private inventoryRequestController: InventoryRequestControllerService) { }

  ngOnInit() {
    // if(this.req){
    //   this.command.changes = this.req.inventoryChanges;
    // }
    return
  }

  protected readonly RequestStatus = RequestStatus;

  getMetadata(itemId: number | undefined) {
    var res = {} as InventoryItemDTO;
      this.itemsMetadata.forEach((value, key) => {
        if(key == itemId){
          res = value;
        }
      });
    return res;
  }

  changeSimulationType(event: any) {
    if (event){
      console.log("changeScenario", event.detail.value);
      this.command.simulationType = event.detail.value;
    }
  }

  includeSim(event: any,change: InventoryChangeDTO) {
    if (event.detail.checked) {
      // Toggle is on: handle accordingly
      // this.command.changes?.push(change);
      this.changesSet.add(change)
      // console.log("includeSim", this.changesSet);
    } else {
      // Toggle is off: handle accordingly
      // this.command.changes = this.command.changes?.filter(cm => cm.itemId !== change);
      this.changesSet.delete(change);
      // console.log("EXCLUDESim", this.changesSet);
    }

  }

  simulate() {

    this.command.inventoryRequestId = this.req?._id?.toString();
    this.command.changes = Array.from(this.changesSet);

    console.log("command:", this.command);

    this.inventoryRequestController.apiRequestsInvSimPost(this.command).subscribe(value => {
      this.simulationResponse = value;
      this.originalCompletions = new Map(Object.entries(value?.originalCompletionPercentages ?? {}));
      console.log("response: ", value);
    })

  }

  protected readonly InventorySimulationType = InventorySimulationType;

  getAvgProjectCompletion(processedRequests: Array<ProjectRequest> | undefined, length: number | undefined) {
    let acc = 0;
    if(length) {
      processedRequests?.forEach(req => acc += req.allocatedResources?.completionPercentage ?? 0);
    }
    return acc/(length ?? 0.0);
  }

  getString(id: ObjectId | undefined) {
    if (id) {
      return id.toString();
    }
    else{
      return "Project ID not found";
    }
  }

  protected readonly GreedyStrategy = GreedyStrategy;

  changeSimulationStrategy(event: any) {
    if (event){
      console.log("changeScenario", event.detail.value);
      this.command.greedyStrategy = event.detail.value;
    }

  }

  changeSimulationStrategyOrder(event: any) {
    if (event){
      console.log("changeScenario", event.detail.value);
      this.command.greedyOrder = event.detail.value;
    }
  }

  protected readonly GreedyOrder = GreedyOrder;

  isSimulateDisabled() {
    return this.command.simulationType === undefined
      || this.command.greedyStrategy === undefined || this.command.greedyOrder === undefined;
  }
}
