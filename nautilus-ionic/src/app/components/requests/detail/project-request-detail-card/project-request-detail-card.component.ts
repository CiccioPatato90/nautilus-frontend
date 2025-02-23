import {Component, Input, OnInit} from '@angular/core';
import {InventoryItemDTO, InventoryRequestDTO, ProjectRequestDTO} from "../../../../api";

@Component({
  selector: 'app-project-request-detail-card',
  templateUrl: './project-request-detail-card.component.html',
  styleUrls: ['./project-request-detail-card.component.scss'],
})
export class ProjectRequestDetailCardComponent  implements OnInit {
  @Input() req: ProjectRequestDTO = {} as ProjectRequestDTO;
  @Input() itemsMetadata: Map<number, InventoryItemDTO> = new Map<number, InventoryItemDTO>;
  @Input() originalAllocationMap: Map<string, number> = new Map<string, number>();

  constructor() { }

  ngOnInit() {
    // this.originalAllocationMap = new Map(Object.entries(this.req?.allocatedResources?.allocationMap ?? {}));
    console.log(this.originalAllocationMap)
  }

  getMetadata(itemId: number | undefined) {
    var res = {} as InventoryItemDTO;
    this.itemsMetadata.forEach((value, key) => {
      if(key == itemId){
        res = value;
      }
    });
    return res;
  }

  getAllocated(sqlId: number | undefined) {
    if(sqlId){
      return this.originalAllocationMap.get(sqlId?.toString());
    }else{
      return "Not Allocated";
    }
  }
}
