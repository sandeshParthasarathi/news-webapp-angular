import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knolcom-dashboard',
  templateUrl: './knolcom-dashboard.component.html',
  styleUrls: ['./knolcom-dashboard.component.scss']
})
export class KnolcomDashboardComponent implements OnInit {

  constructor() { }

  show: boolean  = false

  ngOnInit(): void {
  }

  sideBar(): void{
    this.show = !this.show;
  }

}
