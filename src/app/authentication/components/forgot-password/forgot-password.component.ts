import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMAIL_REGEX } from 'src/app/constants/form';
import { AUTH, LOGIN } from 'src/app/constants/url';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  resetPassword: FormGroup;
  showConfirm: boolean;

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(): void {
    this.resetPassword = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]]
    });
  }

  onSubmit(form): void {
  }

  navigateToLogin(): void{
    void this.router.navigate([`/${AUTH}/${LOGIN}`], { relativeTo: this.activatedRoute });
  }

}
