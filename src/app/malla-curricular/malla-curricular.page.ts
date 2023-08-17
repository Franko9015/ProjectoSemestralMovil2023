import { Component } from '@angular/core';

@Component({
  selector: 'app-malla-curricular',
  templateUrl: './malla-curricular.page.html',
  styleUrls: ['./malla-curricular.page.scss'],
})
export class MallaCurricularPage {
  asignaturas = [
    { nombre: 'Matemáticas', aprobado: true },
    { nombre: 'Historia', aprobado: false },
    { nombre: 'Ciencias', aprobado: true },
    { nombre: 'Idiomas', aprobado: true },
    { nombre: 'Arte', aprobado: false },
    { nombre: 'Educación Física', aprobado: true },
    { nombre: 'Informática', aprobado: true },
    { nombre: 'Literatura', aprobado: false },
    { nombre: 'Geografía', aprobado: true },
    // Agrega más asignaturas aquí...
  ];
}
