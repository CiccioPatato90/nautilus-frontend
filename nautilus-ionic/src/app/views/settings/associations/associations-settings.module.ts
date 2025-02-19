import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssocMgmtPageRoutingModule } from './associations-settings-routing.module';

import { AssociationSettingsPage } from './associations-settings-page.component';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AssocMgmtPageRoutingModule,
        ComponentsModule
    ],
    exports: [
        AssociationSettingsPage
    ],
    declarations: [AssociationSettingsPage]
})
export class AssocMgmtPageModule {}
