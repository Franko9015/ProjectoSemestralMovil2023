import { Component } from '@angular/core';

@Component({
  selector: 'app-malla-curricular',
  templateUrl: './malla-curricular.page.html',
  styleUrls: ['./malla-curricular.page.scss'],
})
export class MallaCurricularPage {
  asignaturas = [
    { nombre: 'Matemáticas', aprobado: true, asistencia: 85 },
    { nombre: 'Historia', aprobado: false, asistencia: 82 },
    { nombre: 'Ciencias', aprobado: true, asistencia: 78 },
    { nombre: 'Idiomas', aprobado: true, asistencia: 95 },
    { nombre: 'Arte', aprobado: false, asistencia: 70 },
    { nombre: 'Educación Física', aprobado: true, asistencia: 88 },
    { nombre: 'Informática', aprobado: true, asistencia: 92 },
    { nombre: 'Literatura', aprobado: false, asistencia: 69 },
    { nombre: 'Geografía', aprobado: true, asistencia: 75 },
    // Agrega más asignaturas aquí...
  ];

  getColor(asistencia: number): string {
    if (asistencia >= 85 && asistencia <= 100) {
      return 'green';
    } else if (asistencia >= 75 && asistencia < 85) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}

