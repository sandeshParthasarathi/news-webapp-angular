import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LOGIN, RESET_PASSWORD, USER_SIGNUP } from '../constants/url';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: LOGIN,
        pathMatch: 'full'
      },
      {
        path: LOGIN,
        component: LoginPageComponent
      },
      {
        path: USER_SIGNUP,
        component: SignupPageComponent
      },
      {
        path: RESET_PASSWORD,
        component: ForgotPasswordComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
