import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioMatriculaComponent } from './formulario-matricula/formulario-matricula.component';
import { PagosComponent } from './pagos/pagos.component';



@NgModule({
  declarations: [
    FormularioMatriculaComponent,
    PagosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormularioMatriculaComponent,
    PagosComponent
  ]
})
export class MatriculaModule { }
