import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociationRequestDetailPage } from './association-request-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AssociationRequestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociationRequestDetailPageRoutingModule {}
