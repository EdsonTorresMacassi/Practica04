import { Component } from '@angular/core';
import { Curso } from '../curso/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-curso-crear',
  templateUrl: './curso-crear.component.html',
  styleUrls: ['./curso-crear.component.scss']
})
export class CursoCrearComponent {

  public form!: FormGroup;
  registro!: Curso;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: CursoService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, Validators.compose([Validators.required])],
      nombre: [null, Validators.compose([Validators.required])],
      horas: [null, Validators.compose([Validators.required])],
      creditos: [null, Validators.compose([Validators.required])],
      categoria: [null, Validators.compose([Validators.required])]

    });
  }

  guardar(){
    const data = this.form.getRawValue();
    this.registro = data;
    this.service.agregar(this.registro);
    this.salir();
  }

  cancelar(){
    this.salir();
  }

  salir() {
    this.router.navigate(['curso']);
  }
}

