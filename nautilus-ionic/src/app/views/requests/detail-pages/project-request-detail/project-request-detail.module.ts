import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectRequestDetailPageRoutingModule } from './project-request-detail-routing.module';

import { ProjectRequestDetailPage } from './project-request-detail.page';
import {ComponentsModule} from "../../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProjectRequestDetailPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ProjectRequestDetailPage]
})
export class ProjectRequestDetailPageModule {}
