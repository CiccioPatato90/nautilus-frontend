import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectRequestDetailPage } from './project-request-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectRequestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRequestDetailPageRoutingModule {}
