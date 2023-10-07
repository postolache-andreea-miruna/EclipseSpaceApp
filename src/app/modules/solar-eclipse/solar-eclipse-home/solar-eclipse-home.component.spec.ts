import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarEclipseHomeComponent } from './solar-eclipse-home.component';

describe('SolarEclipseHomeComponent', () => {
  let component: SolarEclipseHomeComponent;
  let fixture: ComponentFixture<SolarEclipseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarEclipseHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarEclipseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
