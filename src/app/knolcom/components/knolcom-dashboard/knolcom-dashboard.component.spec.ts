import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnolcomDashboardComponent } from './knolcom-dashboard.component';

describe('KnolcomDashboardComponent', () => {
  let component: KnolcomDashboardComponent;
  let fixture: ComponentFixture<KnolcomDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnolcomDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnolcomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
