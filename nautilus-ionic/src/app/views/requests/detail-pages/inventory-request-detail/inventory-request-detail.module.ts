import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryRequestDetailPageRoutingModule } from './inventory-request-detail-routing.module';

import { InventoryRequestDetailPage } from './inventory-request-detail.page';
import {ComponentsModule} from "../../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InventoryRequestDetailPageRoutingModule,
        ComponentsModule
    ],
  declarations: [InventoryRequestDetailPage]
})
export class InventoryRequestDetailPageModule {}
