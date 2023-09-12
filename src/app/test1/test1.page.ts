import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface Asignatura {
  nombre: string;
  profesor: string;
  parcial1: number;
  parcial2: number;
  parcial3: number;
  examen: number;
}

@Component({
  selector: 'app-test1',
  templateUrl: './test1.page.html',
  styleUrls: ['./test1.page.scss'],
})
export class TEST1Page {

  asignaturas: Asignatura[] = [
    { nombre: 'Matemáticas', profesor: 'Juan Pérez', parcial1: 3.0, parcial2: 5.0, parcial3: 7.0, examen: 5.0 },
    { nombre: 'Historia', profesor: 'Maria González', parcial1: 7.0, parcial2: 6.5, parcial3: 6.0, examen: 6.5 },
    { nombre: 'Ingles', profesor: 'Millaray Aravena', parcial1: 2.3, parcial2: 4.5, parcial3: 6.0, examen: 4.9 },
    // Agrega más asignaturas con sus notas
  ];

  constructor(private modalCtrl: ModalController) {}

  async mostrarDetalle(asignatura: Asignatura) {
    // Implementa la ventana emergente de detalles aquí, si es necesario
    // Puedes usar un modal para mostrar los detalles con una animación
  }

  calcularNotaFinal(asignatura: Asignatura) {
    const promedioParciales = (asignatura.parcial1 + asignatura.parcial2 + asignatura.parcial3) / 3;
    return parseFloat((promedioParciales * 0.4 + asignatura.examen * 0.6).toFixed(1));
  }
  getColor(nota: number) {
    if (nota >= 5.3) {
      return 'green';
    } else if (nota >= 4.0) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
