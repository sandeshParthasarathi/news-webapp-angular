import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';


import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PrimeNgModule } from '../prime-ng.module';


@NgModule({
  declarations: [AuthenticationComponent, LoginPageComponent, SignupPageComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ] 
})
export class AuthenticationModule { }
