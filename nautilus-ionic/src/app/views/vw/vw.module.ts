import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VwPageRoutingModule } from './vw-routing.module';

import { VwPage } from './vw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VwPageRoutingModule
  ],
  declarations: [VwPage]
})
export class VwPageModule {}
