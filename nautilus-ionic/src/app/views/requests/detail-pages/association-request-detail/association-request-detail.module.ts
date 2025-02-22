import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociationRequestDetailPageRoutingModule } from './association-request-detail-routing.module';

import { AssociationRequestDetailPage } from './association-request-detail.page';
import {ComponentsModule} from "../../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AssociationRequestDetailPageRoutingModule,
        ComponentsModule
    ],
  declarations: [AssociationRequestDetailPage]
})
export class AssociationRequestDetailPageModule {}
