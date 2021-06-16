import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCompetitorsComponent } from './top-competitors.component';

describe('TopCompetitorsComponent', () => {
  let component: TopCompetitorsComponent;
  let fixture: ComponentFixture<TopCompetitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCompetitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCompetitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
