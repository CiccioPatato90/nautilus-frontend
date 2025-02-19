import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociationSettingsDetailPage } from './association-settings-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: AssociationSettingsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociationDetailPageRoutingModule {}
