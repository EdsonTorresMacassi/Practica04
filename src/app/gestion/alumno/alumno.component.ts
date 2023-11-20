import { Component } from '@angular/core';
import { Alumno } from './alumno';
import { AlumnoService } from './alumno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {

  lstAlumnos: Alumno[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlumnoService
  ) { }

  ngOnInit(): void {
    this.lstAlumnos = this.service.lista;
  }

  crear(){
    this.router.navigate(['alumno/crear']);
  }
}
