import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../alumno/alumno.service';
import { Alumno } from '../alumno/alumno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-crear',
  templateUrl: './alumno-crear.component.html',
  styleUrls: ['./alumno-crear.component.scss']
})
export class AlumnoCrearComponent {

  form!: FormGroup;
  registro!: Alumno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AlumnoService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, Validators.compose([Validators.required])],
      nombres: [null, Validators.compose([Validators.required])],
      apellidos: [null, Validators.compose([Validators.required])],
      fechaNacimiento: [null, Validators.compose([Validators.required])],
      direccion: [null, Validators.compose([Validators.required])],
      correo: [null, Validators.compose([Validators.required])],
      telefono: [null, Validators.compose([Validators.required])]
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
    this.router.navigate(['alumno']);
  }
}
