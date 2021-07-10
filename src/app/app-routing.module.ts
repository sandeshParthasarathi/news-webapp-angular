import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTH, DASHBOARD, KNOLCOM_HOME } from './constants/url';

const routes: Routes = [
  {
    path: KNOLCOM_HOME,
    loadChildren: () => import('./knolcom/knolcom.module').then(m => m.KnolcomModule)
  },
  {
    path: AUTH,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '',
    redirectTo: `/${KNOLCOM_HOME}/${DASHBOARD}`,
    pathMatch: 'full'
  },
  {path: '**', redirectTo: `/${KNOLCOM_HOME}/${DASHBOARD}`, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
