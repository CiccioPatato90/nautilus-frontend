import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {RequestsFilterComponent} from "./requests/requests-filter/requests-filter.component";
import {ConfirmActionComponent} from "./utils/confirm-action/confirm-action.component";
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
import {NotificationBannerComponent} from "./utils/notification-banner/notification-banner.component";
import {
  ProjectRequestDetailCardComponent
} from "./requests/detail/project-request-detail-card/project-request-detail-card.component";
import {
  AssociationRequestDetailCardComponent
} from "./requests/detail/association-request-detail-card/association-request-detail-card.component";
import {InventoryItemCardComponent} from "./requests/detail/inventory-item-card/inventory-item-card.component";
import {ProjectRequestsComponent} from "./requests/list/project-requests/project-requests.component";
import {ApprovalCardComponent} from "./requests/detail/approval-card/approval-card.component";
import {AssociationRequestsComponent} from "./requests/list/association-requests/association-requests.component";
import {InventoryRequestsComponent} from "./requests/list/inventory-requests/inventory-requests.component";

@NgModule({
  declarations: [
    ToolbarComponent,
    AssociationRequestsComponent,
    InventoryRequestsComponent,
    RequestsFilterComponent,
    InventoryItemCardComponent,
    AssociationRequestDetailCardComponent,
    ProjectRequestDetailCardComponent,
    ConfirmActionComponent,
    ProjectRequestAddModalComponent,
    InventoryRequestAddModalComponent,
    AssociationRequestAddModalComponent,
    ProjectRequestsComponent,
    LabelComponent,
    ApprovalCardComponent,
    NotificationBannerComponent
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, RouterLink],
  exports:
    [
      ToolbarComponent,
      AssociationRequestsComponent,
      InventoryRequestsComponent,
      RequestsFilterComponent,
      InventoryItemCardComponent,
      AssociationRequestDetailCardComponent,
      ProjectRequestDetailCardComponent,
      ConfirmActionComponent,
      ProjectRequestAddModalComponent,
      InventoryRequestAddModalComponent,
      AssociationRequestAddModalComponent,
      ProjectRequestsComponent,
      LabelComponent,
      ApprovalCardComponent,
      NotificationBannerComponent
    ],
})
export class ComponentsModule { }
