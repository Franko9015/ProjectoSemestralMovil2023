import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../interface/alumno';
import { Notas } from '../interface/notas';
import { Comunicado } from '../interface/comunicados';
import { Profesor} from '../interface/profesor';
import { Materias} from '../interface/materias';
import { Anotaciones } from '../interface/anotaciones';
import { Observable } from 'rxjs';

import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPIDjangoService {
  constructor (private http: HttpClient) {}

  url:string="https://lushoooc.pythonanywhere.com/api/notas/"
  private comunicadosUrl = 'https://lushoooc.pythonanywhere.com/api/comunicados/';
  private ProfesorUrl = 'https://lushoooc.pythonanywhere.com/api/profesor/';
  private MateriasUrl = 'https://lushoooc.pythonanywhere.com/api/materias/';
  private AnotacionesUrl = 'http://lushoooc.pythonanywhere.com/api/anotaciones/';
  private AlumnosUrl = 'http://lushoooc.pythonanywhere.com/api/alumnos/';
  private AlumnoDetailUrl = 'http://lushoooc.pythonanywhere.com/api/alumnos/';


    // Obtener detalles de un alumno por ID
    getAlumnoDetail(id: number): Observable<Alumno> {
      const url = `${this.AlumnoDetailUrl}${id}/`;
      return this.http.get<Alumno>(url);
    }
  
    // Modificar la asistencia de un alumno por ID
    modificarAsistencia(id: number, nuevaAsistencia: string): Observable<any> {
      const url = `${this.AlumnoDetailUrl}${id}/`;
      const body = { asistencia: nuevaAsistencia };
      return this.http.put(url, body);
    }

  listar(){
    return this.http.get<Notas[]>(this.url);
    }

  listaralumnos(){
    return this.http.get<Alumno[]>(this.AlumnosUrl);
     }

  listarComunicados() {
    return this.http.get<Comunicado[]>(this.comunicadosUrl);
    }

  listarProfesor() {
    return this.http.get<Profesor[]>(this.ProfesorUrl);
    }  

  listarMaterias() {
    return this.http.get<Materias[]>(this.MateriasUrl);
    } 


  listarAnotaciones() {
    return this.http.get<Anotaciones[]>(this.AnotacionesUrl);
    } 
  

}
