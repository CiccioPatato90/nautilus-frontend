import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
    children:[
      {
        path: 'item-mgmt',
        loadChildren: () => import('./item-mgmt/item-mgmt.module').then( m => m.ItemMgmtPageModule)
      },
      {
        path: 'assoc-mgmt',
        loadChildren: () => import('./associations/associations-settings.module').then(m => m.AssocMgmtPageModule),
      },
      {
        path: 'assoc-inventory',
        loadChildren: () => import('./association-inventory/association-inventory.module').then( m => m.AssociationInventoryPageModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
