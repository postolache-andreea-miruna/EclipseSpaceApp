import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunEclipseComponent } from './lun-eclipse.component';

describe('LunEclipseComponent', () => {
  let component: LunEclipseComponent;
  let fixture: ComponentFixture<LunEclipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunEclipseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunEclipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
