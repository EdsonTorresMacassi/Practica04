import { Component } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {

  lstCurso: Curso[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CursoService
  ) { }

  ngOnInit(): void {
    this.lstCurso = this.service.lista;
  }

  crear(){
    this.router.navigate(['curso/crear']);
  }
}
