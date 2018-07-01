import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMentionComponent } from './nav-mention.component';

describe('NavMentionComponent', () => {
  let component: NavMentionComponent;
  let fixture: ComponentFixture<NavMentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
