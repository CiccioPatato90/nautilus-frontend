import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssociationsRequestsComponent} from "./associations/associations-requests.component";
import {IonicModule} from "@ionic/angular";
import {AddAssociationModalComponent} from "./modals/add-association-modal/add-association-modal.component";
import {ReactiveFormsModule} from "@angular/forms";
import {JoinRequestsComponent} from "./join-requests/join-requests.component";

@NgModule({
  declarations: [AssociationsRequestsComponent, AddAssociationModalComponent, JoinRequestsComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [AssociationsRequestsComponent, AddAssociationModalComponent, JoinRequestsComponent],
})
export class ComponentsModule { }
