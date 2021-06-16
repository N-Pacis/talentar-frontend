import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionStatsPanelComponent } from './competition-stats-panel.component';

describe('CompetitionStatsPanelComponent', () => {
  let component: CompetitionStatsPanelComponent;
  let fixture: ComponentFixture<CompetitionStatsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionStatsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionStatsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
