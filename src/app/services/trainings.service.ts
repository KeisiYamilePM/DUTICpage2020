import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private moodleI: any[] = [
    {
      name: "AULAS VIRTUALES I – Moodle Básico",
      sesion: 3,
      des: "Inicio del curso: 14 de Setiembre",
      silabo: "assets/img/trainings/Sílabo_Moodle_Básico.pdf",
      theme: [
        {
          nameTheme: "Actividades y recursos: Acceso a la Plataforma, Descripción de la Interfaz de Usuario de Moodle, Configuración de Perfil de Usuario: Subir Foto y agregar. Descripción. Cambiar Contraseña. Administración Básica de un curso: Ajustes del Curso, Usuarios Matriculados",
          date: "14/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Agregar Recursos: Archivos, URL, Etiquetas",
          date: "15/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Agregar Actividades: Tareas. Configuración General de una tarea. Revisar, Calificar y Retroalimentar una tarea. Foros. Agregando un foro al aula virtual. Tipos de Foros. Configuración.",
          date: "16/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Taller de desarrollo e implementación I",
          date: "17/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Taller de desarrollo e implementación II",
          date: "18/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
      ]
    },
  ];

  private moodleII: any[] = [
    {
      name: "AULAS VIRTUALES II – Moodle Intermedio",
      sesion: 3,
      des: "Inicio del curso: 7 de Setiembre",
      silabo: "assets/img/trainings/Sílabo_Moodle_Intermedio.pdf",
      theme: [
        {
          nameTheme: "Banco de Preguntas: Creación y configuración General, Tipos de preguntas más comunes, Crear un banco de preguntas.",
          date: "7/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Cuestionarios: Crear y configurar Cuestionarios, Agregar preguntas del banco de preguntas, Previsualización de Cuestionarios.",
          date: "8/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Evaluación por pares: Creación y configuración de Talleres",
          date: "9/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Taller de desarrollo e implementación I",
          date: "10/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Taller de desarrollo e implementación II",
          date: "11/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
      ]
    },
  ];

  private moodleIII: any[] = [
    {
      name: "AULAS VIRTUALES III – Moodle Avanzado",
      sesion: 3,
      des: "Inicio del curso: 7 de Setiembre",
      silabo: "assets/img/trainings/Sílabo_Moodle_Avanzado.pdf",
      theme: [
        {
          nameTheme: "Gestion del aula: Grupos: Creación de grupos. Gestión de Grupos y Agrupamiento de grupos. Configuración de restricciones de acceso por grupos para Actividades y Recursos. Informe de Calificaciones: Configuraciones fundamentales. Informe de Calificaciones. Exportar Calificaciones. Copia de Seguridad y Restauración",
          date: "7/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Actividades Avanzadas: Creación y configuración de Glosario de términos. Creación y configuración de Wikis. Creación y configuración de Base de Datos ",
          date: "8/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Actividades Avanzadas: Lecciones: Creación y configuración de Lecciones. eXe Learning: Gestor de contenidos digitales educativos. Crear Paquetes SCORM desde eXe Learning ",
          date: "9/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },{
          nameTheme: "Taller de desarrollo e implementación I",
          date: "10/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Taller de desarrollo e implementación II",
          date: "11/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
      ]
    },
  ];

  private hgoogle: any[] = [
    {
      name: "Aplicaciones Google para la Educación",
      sesion: 5,
      des: "Inicio del curso: 14 de Setiembre",
      silabo: "assets/img/trainings/Sílabo_Aplicaciones_Google.pdf",
      theme: [
        {
          nameTheme: "Generalidades y acceso a Google Apps desde cuenta institucional.",
          date: "14/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Documentos y hoja de cálculo.",
          date: "15/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Presentaciones y formularios.",
          date: "16/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Google Calendar y Hangouts Meet",
          date: "17/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "YouTube",
          date: "18/09/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
      ]
    },
  ];

  constructor() { }

  getMoodleI(): Observable<any[]> {
    return of(this.moodleI);
  }

  getMoodleII(): Observable<any[]> {
    return of(this.moodleII);
  }

  getMoodleIII(): Observable<any[]> {
    return of(this.moodleIII);
  }

  getHGoogle(): Observable<any[]> {
    return of(this.hgoogle);
  }

}
