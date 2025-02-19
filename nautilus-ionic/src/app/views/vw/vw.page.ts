import { Component, OnInit } from '@angular/core';
import {Layer, marker} from "leaflet";
import {InventoryBoxDTO, VirtualWarehouseControllerService, WarehouseDTO} from "../../api";
import {List} from "postcss/lib/list";

@Component({
  selector: 'app-vw',
  templateUrl: './vw.page.html',
  styleUrls: ['./vw.page.scss'],
})
export class VwPage implements OnInit {
  warehouseMap : Map<string, Array<InventoryBoxDTO>> = new Map();
  warehouseList: Array<WarehouseDTO> | undefined;


  constructor(
    private virtualWarehouseController: VirtualWarehouseControllerService) {

  }

  ngOnInit(): void {
    this.virtualWarehouseController.apiVwListGet().subscribe(res => {
      if (res){
        // @ts-ignore
        this.warehouseMap = new Map(Object.entries(res.warehouseMap));
        this.warehouseList = res.warehouses;
        console.log("response: ", this.warehouseMap);
      }
    });
  }

  get warehouseEntries(): [string, InventoryBoxDTO[]][] {
    return Array.from(this.warehouseMap.entries());
  }


  getWarehouseDTO(id: string): WarehouseDTO | undefined{
    return this.warehouseList?.find(obj => obj.id == parseInt(id));
  }
}
