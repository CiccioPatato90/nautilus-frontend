import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssocMgmtPageRoutingModule } from './assoc-mgmt-routing.module';

import { AssocMgmtPage } from './assoc-mgmt.page';
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
        AssocMgmtPage
    ],
    declarations: [AssocMgmtPage]
})
export class AssocMgmtPageModule {}
