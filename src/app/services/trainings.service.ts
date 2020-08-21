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
      des: "Inicio del curso: 24 de Agosto",
      silabo: "assets/img/trainings/",
      theme: [
        {
          nameTheme: "Acceso a la Plataforma Virtual Moodle",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Descripción de la Interfaz de Usuario de Moodle",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Configuración de Perfil de Usuario: Subir Foto y agregar Descripción",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Cambiar Contraseña",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Administración Básica de un curso: Ajustes del Curso, Usuarios Matriculados",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Agregar Archivos, URL, Etiquetas",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Agregar Tareas. Configuración General de una tarea. Revisar, Calificar y Retroalimentar una tarea",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Agregar Foros. Agregando un foro al aula virtual. Tipos de Foros. Configuración.",
          date: "24/08/2020",
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
      des: "Inicio del curso: 10 de Agosto",
      silabo: "assets/img/trainings/Sílabo_Moodle_Intermedio.pdf",
      theme: [
        {
          nameTheme: "Banco de Preguntas: Creación y configuración General, Tipos de preguntas más comunes, Crear un banco de preguntas.",
          date: "10/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Cuestionarios: Crear y configurar Cuestionarios, Agregar preguntas del banco de preguntas, Previsualización de Cuestionarios.",
          date: "11/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Evaluación por pares: Creación y configuración de Talleres",
          date: "12/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Taller de desarrollo e implementación I",
          date: "13/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Taller de desarrollo e implementación II",
          date: "14/08/2020",
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
      des: "Inicio del curso: 24 de Agosto",
      silabo: "assets/img/trainings/",
      theme: [
        {
          nameTheme: "Grupos: Creación de grupos. Gestión de Grupos y Agrupamiento de grupos",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Configuración de restricciones de acceso por grupos para Actividades y Recursos",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Informe de Calificaciones: Informe de Calificaciones. Exportar Calificaciones.",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Copia de Seguridad y Restauración",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Glosario y Wikis",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Base de Datos",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Lecciones: Creación de Lecciones",
          date: "24/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Paquetes SCORM",
          date: "24/08/2020",
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
      des: "Inicio del curso: 17 de Agosto",
      silabo: "assets/img/trainings/Sílabo_Aplicaciones_Google.pdf",
      theme: [
        {
          nameTheme: "Generalidades y acceso a Google Apps desde cuenta institucional.",
          date: "17/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Documentos y hoja de cálculo.",
          date: "18/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Presentaciones y formularios.",
          date: "19/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Google Calendar y Hangouts Meet",
          date: "20/08/2020",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "YouTube",
          date: "21/08/2020",
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
