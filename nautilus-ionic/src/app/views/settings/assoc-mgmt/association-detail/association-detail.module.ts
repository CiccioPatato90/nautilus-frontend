import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociationDetailPageRoutingModule } from './association-detail-routing.module';

import { AssociationDetailPage } from './association-detail.page';
import {ComponentsModule} from "../../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociationDetailPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [AssociationDetailPage]
})
export class AssociationDetailPageModule {}
