import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssocMgmtPage } from './assoc-mgmt.page';
import {AssociationDetailPageModule} from "./association-detail/association-detail.module";
import {AssociationDetailPage} from "./association-detail/association-detail.page";

const routes: Routes = [
  {
    path: '',
    component: AssocMgmtPage,
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
    component: AssociationDetailPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssocMgmtPageRoutingModule {}
