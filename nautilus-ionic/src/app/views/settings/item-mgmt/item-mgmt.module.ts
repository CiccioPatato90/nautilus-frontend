import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemMgmtPageRoutingModule } from './item-mgmt-routing.module';

import { ItemMgmtPage } from './item-mgmt.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ItemMgmtPageRoutingModule
    ],
    exports: [
        ItemMgmtPage
    ],
    declarations: [ItemMgmtPage]
})
export class ItemMgmtPageModule {}
