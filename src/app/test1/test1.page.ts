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
    { nombre: 'Matemáticas', profesor: 'Juan Pérez', parcial1: 8.5, parcial2: 7.0, parcial3: 9.0, examen: 8.8 },
    { nombre: 'Historia', profesor: 'Maria González', parcial1: 7.2, parcial2: 6.8, parcial3: 7.5, examen: 7.0 },
    // Agrega más asignaturas con sus notas
  ];

  constructor(private modalCtrl: ModalController) {}

  async mostrarDetalle(asignatura: Asignatura) {
    // Implementa la ventana emergente de detalles aquí, si es necesario
    // Puedes usar un modal para mostrar los detalles con una animación
  }

  calcularNotaFinal(asignatura: Asignatura) {
    const promedioParciales = (asignatura.parcial1 + asignatura.parcial2 + asignatura.parcial3) / 3;
    return (promedioParciales * 0.4) + (asignatura.examen * 0.6);
  }
}
