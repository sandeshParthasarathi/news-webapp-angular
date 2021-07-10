import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaliseFeedComponent } from './personalise-feed.component';

describe('PersonaliseFeedComponent', () => {
  let component: PersonaliseFeedComponent;
  let fixture: ComponentFixture<PersonaliseFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaliseFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaliseFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
