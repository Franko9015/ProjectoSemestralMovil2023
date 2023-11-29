export interface Alumno {
    id: number;
    usera: {
      first_name: string;
      last_name: string;
    };
    fecha_nacimiento: string;
    foto_alumno: string;
    curso: {
      nombre: string;
    };
    asistencias: number;
    Reprobado: boolean;
    asistencia: string;
  }