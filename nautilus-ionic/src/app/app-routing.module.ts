import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {authGuard} from "./utils/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'requests',
    pathMatch: 'full'
  },
  {
    path: 'requests',
    loadChildren: () => import('./views/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./views/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'vw',
    loadChildren: () => import('./views/vw/vw.module').then( m => m.VwPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./views/projects/projects.module').then( m => m.ProjectsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
