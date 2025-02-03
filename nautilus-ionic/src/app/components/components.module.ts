import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssociationsRequestsComponent} from "./associations/associations-requests.component";
import {IonicModule} from "@ionic/angular";
import {AddAssociationModalComponent} from "./modals/add-association-modal/add-association-modal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JoinRequestsComponent} from "./join-requests/join-requests.component";
import {RouterLink} from "@angular/router";
import {ToolbarComponent} from "./toolbar/toolbar.component";

@NgModule({
  declarations: [AssociationsRequestsComponent, AddAssociationModalComponent, JoinRequestsComponent, ToolbarComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, RouterLink],
  exports: [AssociationsRequestsComponent, AddAssociationModalComponent, JoinRequestsComponent, ToolbarComponent],
})
export class ComponentsModule { }
