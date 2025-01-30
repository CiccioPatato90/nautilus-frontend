import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {RequestPageRoutingModule} from './request-page-routing.module';

import { RequestPage } from './request-page.component';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RequestPage]
})
export class RequestPageModule {}
