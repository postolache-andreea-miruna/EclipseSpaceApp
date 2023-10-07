import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVisionsComponent } from './evisions.component';

describe('EVisionsComponent', () => {
  let component: EVisionsComponent;
  let fixture: ComponentFixture<EVisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EVisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
