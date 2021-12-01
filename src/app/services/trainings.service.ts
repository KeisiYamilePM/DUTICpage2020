import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private moodleI: any[] = [
    {
      name: "AULAS VIRTUALES I – Moodle Básico",
      turn1: "Horario primer turno: 9:00 hrs. a 11:00 hrs.",
      turn2: "",
      coment: "",
      sesion: 3,
      des: "Inicio del curso: 17 de Agosto",
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
      turn1: "Horario primer turno: 9:00 hrs. a 11:00 hrs.",
      turn2: "",
      coment: "",
      sesion: 3,
      des: "Inicio del curso: 17 de Agosto",
      silabo: "assets/img/trainings/Sílabo_Moodle_Intermedio.pdf",
      theme: [
        {
          nameTheme: "Banco de Preguntas: Creación y configuración General, Tipos de preguntas más comunes, Crear un banco de preguntas.",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Cuestionarios: Crear y configurar Cuestionarios, Agregar preguntas del banco de preguntas, Previsualización de Cuestionarios.",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Evaluación por pares: Creación y configuración de Talleres",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Taller de desarrollo e implementación I",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Taller de desarrollo e implementación II",
          date: "",
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
      turn1: "Horario primer turno: 11:00 hrs. a 13:00 hrs.",
      turn2: "",
      coment: "",
      sesion: 3,
      des: "Inicio del curso: 26 Agosto",
      silabo: "assets/img/trainings/SILABO_MOODLE_AVANZADO_2021.pdf",
      theme: [
        {
          nameTheme: "Gestion del aula: Grupos: Creación de grupos. Gestión de Grupos y Agrupamiento de grupos. Configuración de restricciones de acceso por grupos para Actividades y Recursos. Informe de Calificaciones: Configuraciones fundamentales. Informe de Calificaciones. Exportar Calificaciones. Copia de Seguridad y Restauración",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Actividades Avanzadas: Creación y configuración de Glosario de términos. Creación y configuración de Wikis. Creación y configuración de Base de Datos ",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Actividades Avanzadas: Lecciones: Creación y configuración de Lecciones. eXe Learning: Gestor de contenidos digitales educativos. Crear Paquetes SCORM desde eXe Learning ",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },{
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

  private hgoogle: any[] = [
    {
      name: "Aplicaciones Google para la Educación",
      turn1: "Horario segundo turno: 17:00 hrs. a 19:00 hrs.",
      turn2: "",
      coment: "",
      sesion: 5,
      des: "Inicio del curso: 24 de Agosto",
      silabo: "assets/img/trainings/SILABO_APLICACIONES_DE_GOOGLE_2021.pdf",
      theme: [
        {
          nameTheme: "Generalidades y acceso a Google Apps desde cuenta institucional.",
          date: "04/10/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Documentos y hoja de cálculo.",
          date: "05/10/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Presentaciones y formularios.",
          date: "06/10/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "APLICACIONES GOOGLE: Google Calendar y Hangouts Meet",
          date: "07/10/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "YouTube y Jamboard",
          date: "08/10/2021",
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
      turn1: "",
      turn2: "Horario segundo turno: 17:00 hrs. a 19:00 hrs.",
      coment: "",
      sesion: 5,
      des: "Inicio del curso: ",
      silabo: "assets/img/trainings/SILABO HERRAMIENTAS DIGITALES PARA LA DOCENCIA 2021_c.pdf",
      theme: [
        {
          nameTheme: "Uso de Códigos QR y Padlet",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Diseño de cuestionarios usando Kahoot y Quizizz",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Diseño de cuetionarios utilizando la aplicacion Formularios de Google",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Uso de Mentimeter",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "Diseño de rubricas utilizando el complemento Corúbrics",
          date: "",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
      ]
    },
  ];

  private exeL: any[] = [
    {
      name: "Creación de contenidos educativos digitales",
      turn1: "",
      turn2: "Horario segundo turno: 15:00 hrs. a 17:00 hrs.",
      coment: "",
      sesion: 5,
      des: "Inicio del curso: 25 de Octubre",
      silabo: "assets/img/trainings/Sílabo_Creacion_Contenidos_Educativos_Digitales_c.pdf",
      theme: [
        {
          nameTheme: "¿Qué es exe Learning? / Proceso de Instalación / Descripción del entorno de trabajo / Estilos de presentación",
          date: "25/10/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "iDevices",
          date: "26/10/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "iDevices de presentación de información no textual (imágenes y páginas web)",
          date: "27/10/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "iDevices de actividades no interactivas",
          date: "28/10/2021",
          hour: "10am-12pm / 3pm-5pm",
          state: true,
          link: "",
        },
        {
          nameTheme: "iDevices de actividades interactivas / Formatos de Exportación",
          date: "29/10/2021",
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

  getExeL(): Observable<any[]> {
    return of(this.exeL);
  }

}
