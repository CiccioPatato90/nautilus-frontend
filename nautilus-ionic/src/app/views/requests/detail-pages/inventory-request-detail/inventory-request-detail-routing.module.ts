import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryRequestDetailPage } from './inventory-request-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryRequestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRequestDetailPageRoutingModule {}
