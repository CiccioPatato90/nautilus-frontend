import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociationSettingsPage } from './associations-settings-page.component';
import {AssociationDetailPageModule} from "./association-detail/association-detail.module";
import {AssociationSettingsDetailPage} from "./association-detail/association-settings-detail-page.component";

const routes: Routes = [
  {
    path: '',
    component: AssociationSettingsPage,
  },
  {
    // children: [
    //   {
    //
    //     // loadChildren: () =>
    //     //   import('./association-detail/association-detail.module').then(m => m.AssociationDetailPageModule),
    //   },
    // ],
    path: 'get/:id',
    component: AssociationSettingsDetailPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssocMgmtPageRoutingModule {}
