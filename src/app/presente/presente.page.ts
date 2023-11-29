import { Component, OnInit } from '@angular/core';
import { ServicioAPIDjangoService } from '../services/servicio-apidjango.service';
import { Alumno } from '../interface/alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private servAPI: ServicioAPIDjangoService, private router: Router) { }

  ngOnInit() {
    this.listaralumnos();
  }

  listaralumnos() {
    this.servAPI.listaralumnos().subscribe((data) => {
      this.alumnos = data;
    });
  } 

  marcarPresente(id: number) {
    this.servAPI.modificarAsistencia(id, 'P').subscribe(() => {
      setTimeout(() => {
        window.location.reload();
      }, 3000); 
    });
  }
}  
