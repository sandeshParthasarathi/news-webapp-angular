import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMAIL_REGEX, PASSWORD_REGEX } from 'src/app/constants/form';
import { AUTH, RESET_PASSWORD, USER_SIGNUP } from 'src/app/constants/url';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  loginForm: FormGroup;
  showConfirm: boolean;

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
    });
  }

  confirmPasswordVissible(): any {
    this.showConfirm = !this.showConfirm;
  }

  googleSignin(): void {
    console.log('google sign in')
  }

  onSubmit(form): void {
    console.log(form.controls.email.value, form.controls.password.value)
  }

  navigateToSignup(): void{
    void this.router.navigate([`/${AUTH}/${USER_SIGNUP}`], { relativeTo: this.activatedRoute });
  }

  resetPassword(emailId: string): void {
    const data = {
      email: emailId
    }
    void this.router.navigateByUrl(`/${AUTH}/${RESET_PASSWORD}`, { state: data });
  }

}
