import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPredictionComponent } from './eprediction.component';

describe('EPredictionComponent', () => {
  let component: EPredictionComponent;
  let fixture: ComponentFixture<EPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPredictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
