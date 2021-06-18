import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCompetitionsComponent } from './trending-competitions.component';

describe('TrendingCompetitionsComponent', () => {
  let component: TrendingCompetitionsComponent;
  let fixture: ComponentFixture<TrendingCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingCompetitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
