import { Injectable } from '@angular/core';
///////////////////////librerias
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../interface/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServJsonServerService {

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Alumno>(environment.apiUrl+'/alumnos');
  }
  grabar(){}
  eliminar(){}
}
