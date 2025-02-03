import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociationInventoryPage } from './association-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: AssociationInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociationInventoryPageRoutingModule {}
