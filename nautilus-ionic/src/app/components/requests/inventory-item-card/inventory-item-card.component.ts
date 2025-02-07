import {Component, Input, OnInit} from '@angular/core';
import {InventoryRequest, RequestStatus} from "../../../api";

@Component({
  selector: 'app-inventory-item-card',
  templateUrl: './inventory-item-card.component.html',
  styleUrls: ['./inventory-item-card.component.scss'],
})
export class InventoryItemCardComponent  implements OnInit {
  @Input() req: InventoryRequest = {} as InventoryRequest;
  constructor() { }

  ngOnInit() {
    return
  }

  protected readonly RequestStatus = RequestStatus;
}
