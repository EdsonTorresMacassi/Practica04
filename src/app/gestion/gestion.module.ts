import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoCrearComponent } from './alumno-crear/alumno-crear.component';
import { CursoCrearComponent } from './curso-crear/curso-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursoComponent,
    AlumnoComponent,
    AlumnoCrearComponent,
    CursoCrearComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CursoComponent,
    AlumnoComponent,
    AlumnoCrearComponent,
    CursoCrearComponent
  ]
})
export class GestionModule { }
