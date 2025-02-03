import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociationDetailPage } from './association-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AssociationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociationDetailPageRoutingModule {}
