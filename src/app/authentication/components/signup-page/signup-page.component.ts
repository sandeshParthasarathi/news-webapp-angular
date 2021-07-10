import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMAIL_REGEX, PASSWORD_REGEX } from 'src/app/constants/form';
import { AUTH, LOGIN } from 'src/app/constants/url';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  signupForm: FormGroup;
  showConfirm: boolean;

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(): void {
    this.signupForm = this.fb.group({
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

  navigateToSignin(): void{
    void this.router.navigate([`/${AUTH}/${LOGIN}`], { relativeTo: this.activatedRoute });
  }

}
