import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeclipseComponent } from './ueclipse.component';

describe('UeclipseComponent', () => {
  let component: UeclipseComponent;
  let fixture: ComponentFixture<UeclipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UeclipseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeclipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
