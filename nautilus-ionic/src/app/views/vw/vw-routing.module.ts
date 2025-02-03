import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VwPage } from './vw.page';

const routes: Routes = [
  {
    path: '',
    component: VwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VwPageRoutingModule {}
