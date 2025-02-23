import { Component, OnInit } from '@angular/core';
import {
  AssociationDTO,
  InventoryBoxDTO, InventoryChangeDTO,
  InventoryItemDTO,
  InventoryRequestDTO,
  RequestControllerService
} from "../../../../api";
import {ActionSheetController, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-inventory-request-add-modal',
  templateUrl: './inventory-request-add-modal.component.html',
  styleUrls: ['./inventory-request-add-modal.component.scss'],
})
export class InventoryRequestAddModalComponent implements OnInit {
  associations : Array<AssociationDTO> | undefined = [];
  items : Array<InventoryItemDTO> | undefined = [];

  selectedAssoc: AssociationDTO | undefined;

  request: InventoryRequestDTO = {} as InventoryRequestDTO;

  inventoryState: Map<number, number> = new Map<number,number>();
  addedItems: Array<InventoryItemDTO> | undefined = [];

  constructor(private requestController : RequestControllerService,
              private modalCtlr: ModalController,
              private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.requestController.apiRequestsCommonGet().subscribe(value => {
      if(value){
        this.associations = value.associationsList;
        this.items = value.itemsList;
      }
    });

  }


  deleteItem(item: InventoryBoxDTO) {
    if (item.id != null) {
      this.inventoryState.delete(item.id);
      this.addedItems?.filter(it => it.id !== item.id);
    }
  }

  trackChange(item: InventoryItemDTO, quantity : any) {

    if (item.id != null) {
      this.inventoryState.set(item.id, quantity.value);
    }

    console.log("updated state", this.inventoryState);
  }

  addItem(item: InventoryItemDTO) {
    item.availableQuantity = 0
    this.addedItems?.push(item)
    console.log("added item", item.id);
  }

  initState(value: AssociationDTO) {
    console.log("selected assoc", value);
    this.selectedAssoc = value;
    this.addedItems = [];
  }

  confirm() {
    var inventoryChanges = new Array<InventoryChangeDTO>();

    this.inventoryState.forEach((value, key) => {
      let itemChange = {
        itemId: key,
        requestedQuantity: value
      } as InventoryChangeDTO;

      inventoryChanges.push(itemChange);
    });

    this.modalCtlr.dismiss({
      assoc: this.selectedAssoc?.id,
      state: inventoryChanges
    })
  }


  cancel() {
    this.modalCtlr.dismiss();
  }
}
