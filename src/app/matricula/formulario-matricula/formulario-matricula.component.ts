import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/gestion/alumnos/alumno';
import { AlumnoService } from 'src/app/gestion/alumnos/alumno.service';
import { Curso } from 'src/app/gestion/cursos/curso';
import { CursoService } from 'src/app/gestion/cursos/curso.service';

@Component({
  selector: 'app-formulario-matricula',
  templateUrl: './formulario-matricula.component.html',
  styleUrls: ['./formulario-matricula.component.css']
})
export class FormularioMatriculaComponent implements OnInit{
  cursos:Curso[] = [];
  alumnos: Alumno[] = [];
  mostrarModuloPago = false;

  constructor(private cursoService: CursoService, private alumnoService: AlumnoService){}

  ngOnInit() {
    this.cursos = this.cursoService.cursos;
    this.alumnos = this.alumnoService.alumnos;
  }
  pagar() {
    this.mostrarModuloPago = true;
  }
}
