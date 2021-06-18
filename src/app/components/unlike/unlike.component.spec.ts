import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlikeComponent } from './unlike.component';

describe('UnlikeComponent', () => {
  let component: UnlikeComponent;
  let fixture: ComponentFixture<UnlikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
