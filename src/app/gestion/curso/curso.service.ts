import { Injectable } from '@angular/core';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  lista:Curso[] = [
    {"id":1,"nombre":"C#","horas":5,"creditos":3,"categoria":"software"},
    {"id":2,"nombre":"Java","horas":4,"creditos":2,"categoria":"software"},
    {"id":3,"nombre":"PHP","horas":3,"creditos":2,"categoria":"software"},
    {"id":4,"nombre":"Python","horas":6,"creditos":3,"categoria":"software"},
    {"id":5,"nombre":"Java Script","horas":10,"creditos":4,"categoria":"software"},
    {"id":6,"nombre":"Type Script","horas":4,"creditos":5,"categoria":"software"},
    {"id":7,"nombre":"Scrum","horas":7,"creditos":7,"categoria":"gestión"},
    {"id":8,"nombre":"Procesos","horas":8,"creditos":8,"categoria":"gestión"},
    {"id":9,"nombre":"Funciones","horas":9,"creditos":9,"categoria":"gestión"},
    {"id":10,"nombre":"Documentación","horas":10,"creditos":10,"categoria":"gestión"},
    {"id":11,"nombre":"Aleman","horas":11,"creditos":11,"categoria":"otros"},
    {"id":12,"nombre":"Quechua","horas":12,"creditos":12,"categoria":"otros"},
    {"id":13,"nombre":"Ingles","horas":13,"creditos":13,"categoria":"otros"},
    {"id":14,"nombre":"Frances","horas":14,"creditos":14,"categoria":"otros"},
    {"id":15,"nombre":"Portugues","horas":15,"creditos":15,"categoria":"otros"}
  ]
  constructor() { }

  agregar(curso: Curso) {
    this.lista.push(curso);
  }
}
