import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsPage } from './requests.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsPage
  },
  {
    path: 'get/a/:id',
    loadChildren: () => import('./detail-pages/association-request-detail/association-request-detail.module').then( m => m.AssociationRequestDetailPageModule)
  },
  {
    path: 'get/i/:id',
    loadChildren: () => import('./detail-pages/inventory-request-detail/inventory-request-detail.module').then( m => m.InventoryRequestDetailPageModule)
  },
  {
    path: 'get/p/:id',
    loadChildren: () => import('./detail-pages/project-request-detail/project-request-detail.module').then( m => m.ProjectRequestDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsPageRoutingModule {}
