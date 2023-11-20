import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraAppComponent } from './cabecera-app/cabecera-app.component';
import { PieAppComponent } from './pie-app/pie-app.component';

@NgModule({
  declarations: [
    CabeceraAppComponent,
    PieAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabeceraAppComponent,
    PieAppComponent
  ]
})
export class UtilesModule { }
