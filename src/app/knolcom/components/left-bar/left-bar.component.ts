import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { permissions } from 'src/app/constants/constant';
import { ACCOUNT_SETTINGS, AUTH, KNOLCOM_HOME, LOGIN } from 'src/app/constants/url';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  navItems = permissions;

  ngOnInit(): void {
  }

  accountSettings(): void{
    void this.router.navigateByUrl(`/${KNOLCOM_HOME}/${ACCOUNT_SETTINGS}`);
  }

  logout(): void{
    void this.router.navigateByUrl(`/${AUTH}/${LOGIN}`);
  }

}
