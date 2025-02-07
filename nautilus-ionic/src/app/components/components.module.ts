import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {AddAssociationModalComponent} from "./modals/add-association-modal/add-association-modal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {AssociationRequestsComponent} from "./requests/association-requests/association-requests.component";
import {InventoryRequestsComponent} from "./requests/inventory-requests/inventory-requests.component";
import {RequestsFilterComponent} from "./requests/requests-filter/requests-filter.component";
import {InventoryItemCardComponent} from "./requests/inventory-item-card/inventory-item-card.component";
import {
  AssociationRequestDetailCardComponent
} from "./requests/association-request-detail-card/association-request-detail-card.component";
import {ConfirmActionComponent} from "./utils/confirm-action/confirm-action.component";

@NgModule({
  declarations: [
    AddAssociationModalComponent,
    ToolbarComponent,
    AssociationRequestsComponent,
    InventoryRequestsComponent,
    RequestsFilterComponent,
    InventoryItemCardComponent,
    AssociationRequestDetailCardComponent,
    ConfirmActionComponent
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, RouterLink],
  exports:
    [
      AddAssociationModalComponent,
      ToolbarComponent,
      AssociationRequestsComponent,
      InventoryRequestsComponent,
      RequestsFilterComponent,
      InventoryItemCardComponent,
      AssociationRequestDetailCardComponent,
      ConfirmActionComponent
    ],
})
export class ComponentsModule { }
