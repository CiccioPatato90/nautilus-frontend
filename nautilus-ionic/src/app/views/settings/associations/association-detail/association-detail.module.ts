import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociationDetailPageRoutingModule } from './association-detail-routing.module';

import { AssociationSettingsDetailPage } from './association-settings-detail-page.component';
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
  declarations: [AssociationSettingsDetailPage]
})
export class AssociationDetailPageModule {}
