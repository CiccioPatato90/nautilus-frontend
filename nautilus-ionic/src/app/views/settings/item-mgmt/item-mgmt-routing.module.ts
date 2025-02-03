import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemMgmtPage } from './item-mgmt.page';

const routes: Routes = [
  {
    path: '',
    component: ItemMgmtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemMgmtPageRoutingModule {}
