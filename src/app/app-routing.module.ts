import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './gestion/alumno/alumno.component';
import { CursoComponent } from './gestion/curso/curso.component';
import { FormularioMatriculaComponent } from './matricula/formulario-matricula/formulario-matricula.component';
import { AlumnoCrearComponent } from './gestion/alumno-crear/alumno-crear.component';
import { CursoCrearComponent } from './gestion/curso-crear/curso-crear.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumno', pathMatch: 'full'} ,
  { path: 'alumno', component: AlumnoComponent},
  { path: 'alumno/crear', component: AlumnoCrearComponent},
  { path: 'curso', component: CursoComponent},
  { path: 'curso/crear', component: CursoCrearComponent},
  { path: 'matricula', component: FormularioMatriculaComponent},
  { path: '**', redirectTo: 'alumno' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
