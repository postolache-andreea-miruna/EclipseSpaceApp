import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolLunEclipseComponent } from './sol-lun-eclipse.component';

describe('SolLunEclipseComponent', () => {
  let component: SolLunEclipseComponent;
  let fixture: ComponentFixture<SolLunEclipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolLunEclipseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolLunEclipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
