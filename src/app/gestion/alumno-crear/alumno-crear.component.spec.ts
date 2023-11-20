import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCrearComponent } from './alumno-crear.component';

describe('AlumnoCrearComponent', () => {
  let component: AlumnoCrearComponent;
  let fixture: ComponentFixture<AlumnoCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoCrearComponent]
    });
    fixture = TestBed.createComponent(AlumnoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
