import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCrearComponent } from './curso-crear.component';

describe('CursoCrearComponent', () => {
  let component: CursoCrearComponent;
  let fixture: ComponentFixture<CursoCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoCrearComponent]
    });
    fixture = TestBed.createComponent(CursoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
