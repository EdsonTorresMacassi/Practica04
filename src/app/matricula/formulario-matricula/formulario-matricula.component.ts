import { Component } from '@angular/core';
import { Alumno } from 'src/app/gestion/alumno/alumno';
import { AlumnoService } from 'src/app/gestion/alumno/alumno.service';
import { Curso } from 'src/app/gestion/curso/curso';
import { CursoService } from 'src/app/gestion/curso/curso.service';

@Component({
  selector: 'app-formulario-matricula',
  templateUrl: './formulario-matricula.component.html',
  styleUrls: ['./formulario-matricula.component.scss']
})
export class FormularioMatriculaComponent {

  lstAlumnos: Alumno[] = [];
  lstCurso: Curso[] = [];

  constructor(
    private serviceCurso: CursoService,
    private serviceAlumno: AlumnoService
  ) { }

  ngOnInit(): void {
    this.lstCurso = this.serviceCurso.lista;
    this.lstAlumnos = this.serviceAlumno.lista;
  }
}
