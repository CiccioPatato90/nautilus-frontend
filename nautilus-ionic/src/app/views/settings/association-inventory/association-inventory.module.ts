import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociationInventoryPageRoutingModule } from './association-inventory-routing.module';

import { AssociationInventoryPage } from './association-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociationInventoryPageRoutingModule
  ],
  declarations: [AssociationInventoryPage]
})
export class AssociationInventoryPageModule {}
