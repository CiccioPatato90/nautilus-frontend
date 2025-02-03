import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import {AssocMgmtPageModule} from "./assoc-mgmt/assoc-mgmt.module";
import {ItemMgmtPageModule} from "./item-mgmt/item-mgmt.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SettingsPageRoutingModule,
    AssocMgmtPageModule,
    ItemMgmtPageModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
