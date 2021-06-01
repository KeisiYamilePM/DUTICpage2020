import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private moodleI: any[] = [
    {
      name: "AULAS VIRTUALES I – Moodle Básico",
      turn1: "Horario primer turno: 14:00 hrs. a 16:00 hrs.",
      turn2: "Horario segundo turno: 18:00 hrs. a 20:00 hrs.",
      coment: "*Considerar que la sesión en ambos horarios es la misma",
      sesion: 3,
      des: "Inicio del curso: 14 de Setiembre",
      silabo: "assets/img/trainings/Sílabo_Moodle_Básico.pdf",
      theme: [
        {
          nameTheme: "Actividades y recursos: Acceso a la Plataforma, Descripción de la Interfaz de Usuario de Moodle, Configuración de Perfil de Usuario: Subir Foto y agregar. Descripción. Cambiar Contraseña. Administración Básica de un curso: Ajustes del Curso, Usuarios Matriculados",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Agregar Recursos: Archivos, URL, Etiquetas",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Agregar Actividades: Tareas. Configuración General de una tarea. Revisar, Calificar y Retroalimentar una tarea. Foros. Agregando un foro al aula virtual. Tipos de Foros. Configuración.",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Taller de desarrollo e implementación I",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Taller de desarrollo e implementación II",
          date: "",
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
      turn1: "Horario primer turno: 14:00 hrs. a 16:00 hrs.",
      turn2: "Horario segundo turno: 18:00 hrs. a 20:00 hrs.",
      coment: "*Considerar que la sesión en ambos horarios es la misma",
      sesion: 3,
      des: "Inicio del curso: 17 de Mayo",
      silabo: "assets/img/trainings/Sílabo_Moodle_Intermedio.pdf",
      theme: [
        {
          nameTheme: "Banco de Preguntas: Creación y configuración General, Tipos de preguntas más comunes, Crear un banco de preguntas.",
          date: "17/05/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Cuestionarios: Crear y configurar Cuestionarios, Agregar preguntas del banco de preguntas, Previsualización de Cuestionarios.",
          date: "18/05/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Evaluación por pares: Creación y configuración de Talleres",
          date: "19/05/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Taller de desarrollo e implementación I",
          date: "20/05/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Taller de desarrollo e implementación II",
          date: "21/05/2021",
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
      turn1: "Horario: 14:00 hrs. a 16:00 hrs.",
      turn2: "",
      coment: "",
      sesion: 3,
      des: "Inicio del curso: 31 de Mayo",
      silabo: "assets/img/trainings/SILABO_MOODLE_AVANZADO_2021.pdf",
      theme: [
        {
          nameTheme: "Gestion del aula: Grupos: Creación de grupos. Gestión de Grupos y Agrupamiento de grupos. Configuración de restricciones de acceso por grupos para Actividades y Recursos. Informe de Calificaciones: Configuraciones fundamentales. Informe de Calificaciones. Exportar Calificaciones. Copia de Seguridad y Restauración",
          date: "31/05/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Actividades Avanzadas: Creación y configuración de Glosario de términos. Creación y configuración de Wikis. Creación y configuración de Base de Datos ",
          date: "01/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Actividades Avanzadas: Lecciones: Creación y configuración de Lecciones. eXe Learning: Gestor de contenidos digitales educativos. Crear Paquetes SCORM desde eXe Learning ",
          date: "02/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },{
          nameTheme: "Taller de desarrollo e implementación I",
          date: "03/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        }, {
          nameTheme: "Taller de desarrollo e implementación II",
          date: "04/06/2021",
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
      turn1: "Horario: 18:00 hrs. a 20:00 hrs.",
      turn2: "",
      coment: "",
      sesion: 5,
      des: "Inicio del curso: 31 de Mayo",
      silabo: "assets/img/trainings/SILABO_APLICACIONES_DE_GOOGLE_2021.pdf",
      theme: [
        {
          nameTheme: "Generalidades y acceso a Google Apps desde cuenta institucional.",
          date: "31/05/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Documentos y hoja de cálculo.",
          date: "01/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Presentaciones y formularios.",
          date: "02/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Google Calendar y Hangouts Meet",
          date: "03/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "YouTube y Jamboard",
          date: "04/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
      ]
    },
  ];

  private tools: any[] = [
    {
      name: "Herramientas Digitales para la docencia",
      turn1: "Horario primer turno: 14:00 hrs. a 16:00 hrs.",
      turn2: "Horario segundo turno: 18:00 hrs. a 20:00 hrs.",
      coment: "*Considerar que la sesión en ambos horarios es la misma",
      sesion: 5,
      des: "Inicio del curso: 24 de Mayo",
      silabo: "assets/img/trainings/SILABO HERRAMIENTAS DIGITALES PARA LA DOCENCIA 2021_c.pdf",
      theme: [
        {
          nameTheme: "Uso de Códigos QR y Padlet",
          date: "24/05/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Diseño de cuestionarios usando Kahoot y Quizizz",
          date: "25/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Diseño de cuetionarios utilizando la aplicacion Formularios de Google",
          date: "26/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Uso de Mentimeter",
          date: "27/06/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Diseño de rubricas utilizando el complemento Corúbrics",
          date: "28/06/2021",
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

  getTools(): Observable<any[]> {
    return of(this.tools);
  }

}
