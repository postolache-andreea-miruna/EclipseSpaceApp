import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawTimeComponent } from './draw-time.component';

describe('DrawTimeComponent', () => {
  let component: DrawTimeComponent;
  let fixture: ComponentFixture<DrawTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
