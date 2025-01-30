import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {authGuard} from "./utils/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadChildren: () => import('./views/home/request-page.module').then(m => m.RequestPageModule)
  },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadChildren: () => import('./views/home/request-page.module').then(m => m.RequestPageModule)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadChildren: () => import('./views/home/request-page.module').then(m => m.RequestPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./views/requests/requests.module').then( m => m.RequestsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
