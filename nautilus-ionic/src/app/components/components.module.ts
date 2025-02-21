import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
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
import {MapComponent} from "./map/map.component";
import {ProjectRequestsComponent} from "./requests/project-requests/project-requests.component";
import {LabelComponent} from "./granular/label/label.component";
import {
  ProjectRequestAddModalComponent
} from "./requests/modals/project-request-add-modal/project-request-add-modal.component";
import {
  InventoryRequestAddModalComponent
} from "./requests/modals/inventory-request-add-modal/inventory-request-add-modal.component";
import {
  AssociationRequestAddModalComponent
} from "./requests/modals/association-request-add-modal/association-request-add-modal.component";
import {AddAssociationModalComponent} from "./requests/modals/add-association-modal/add-association-modal.component";

@NgModule({
  declarations: [
    AddAssociationModalComponent,
    ToolbarComponent,
    AssociationRequestsComponent,
    InventoryRequestsComponent,
    RequestsFilterComponent,
    InventoryItemCardComponent,
    AssociationRequestDetailCardComponent,
    ConfirmActionComponent,
    MapComponent,
    ProjectRequestAddModalComponent,
    InventoryRequestAddModalComponent,
    AssociationRequestAddModalComponent,
    ProjectRequestsComponent,
    LabelComponent
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
      ConfirmActionComponent,
      MapComponent,
      ProjectRequestAddModalComponent,
      InventoryRequestAddModalComponent,
      AssociationRequestAddModalComponent,
      ProjectRequestsComponent,
      LabelComponent
    ],
})
export class ComponentsModule { }
