import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandbookService {

  private handbookStudent: any[] = [
    {
      videoId: "cpBgMV08km8",
      handbookId: "assets/doc/student/2020_Tutotial_Estudiante_Ingresando_al_Aula_Virtual_v3Cinco.pdf",
    },
    {
      videoId: "eI6UQniaoco",
      handbookId: "assets/doc/student/2020_Tutotial_Estudiante_Cambiando_Contraseña_v3Cinco.pdf",
    },
    {
      videoId: "CfeT4x_QSjE",
      handbookId: "assets/doc/student/2020_Tutorial_Tareas_v3Cinco.pdf",
    },
  ]

  private handbookTeacher: any[] = [
    {
      videoId: "cpBgMV08km8",
      handbookId: "assets/doc/teacher/2020_Tutotial_Docente_Ingresando_al_Aula_Virtual_v3Cinco.pdf",
    },
    {
      videoId: "eI6UQniaoco",
      handbookId: "assets/doc/teacher/2020_Tutotial_Docente_Cambiando_Contraseña_v3Cinco.pdf",
    },
    {
      videoId: "JjDG5un8uEE",
      handbookId: "assets/doc/teacher/2020_Tutorial_Grupos_v3Cinco.pdf",
    },
    {
      videoId: "KxBRvdusU38",
      handbookId: "assets/doc/teacher/2020_Tutotial_CatedraCompartidaRegistrandoProfesores_v3Cinco.pdf",
    },
    {
      videoId: "l6xC0ag7rsM",
      handbookId: "assets/doc/teacher/2020_Tutorial_SubiendoArchivos_v3Cinco.pdf",
    },
    {
      videoId: "hh8EZazzzzs", //recurso url
      handbookId: "no",
    },
    {
      videoId: "ouCI7TFVOAg",
      handbookId: "assets/doc/teacher/2020_Tutorial_AgregandoTemas_v3Cinco.pdf",
    },
    {
      videoId: "Ygju5coGXwk",
      handbookId: "assets/doc/teacher/2020_Tutorial_AgregandoVideos_v3Cinco.pdf",
    },
    {
      videoId: "bjQBQfdrWPo",
      handbookId: "assets/doc/teacher/2020_Tutotial_CreandoForo_v3Cinco.pdf",
    },
    {
      videoId: "xy0oFzuDOds", //Creación y Configuración de Banco de Preguntas_v3.5
      handbookId: "assets/doc/teacher/2020_Tutorial_CreandoCuestionarioyBancodePreguntas_v3Cinco.pdf",
    },
    {
      videoId: "jMB5Ye6zltE", //Creación y Configuración de Cuestionario en el Aula Virtual_v3.5
      handbookId: "assets/doc/teacher/2020_Tutorial_CreandoCuestionarioyBancodePreguntas_v3Cinco.pdf",
    },
    {
      videoId: "JK3GOMyRZug",
      handbookId: "assets/doc/teacher/2020_Tutorial_ReporteCalificador_v3Cinco.pdf",
    },
    {
      videoId: "0oc6n3BojQc", //creando una tarea
      handbookId: "no",
    },
    {
      videoId: "LsXd7o2lkmc", //Cuestionario y Banco de Preguntas para Docentes
      handbookId: "assets/doc/teacher/2020_Tutorial_CreandoCuestionarioyBancodePreguntas_v3Cinco.pdf",
    },
    {
      videoId: "7wXTT5dBL_I", //actividad taller en moodle parte 1
      handbookId: "no",
    },
    {
      videoId: "6djJbNaeKWA", //actividad taller en moodle parte 2
      handbookId: "no",
    },
    {
      videoId: "c2bG_2pHl0Q", //calificacion avanzada en moodle rubricas
      handbookId: "no",
    },
    {
      videoId: "R7pI4hd4JA0", //evaluacion con rubricas en moodle
      handbookId: "no",
    },
  ]
  private handbookGoogle: any[] = [
    
    {
      videoId: "_WGnxtKh-Vs",
      handbookId: "assets/doc/google/2020_Google_Drive.pdf",
    },
    {
      videoId: "Z2ql_xw7p8A",
      handbookId: "assets/doc/google/2020_TutorialDocumentosGoogle.pdf",
    },
    {
      videoId: "Kv-dyUBV0_k", //presentaciones de google
      handbookId: "no",
    },
    {
      videoId: "9pQbolFaRa8", //formulario de google
      handbookId: "no",
    },
    {
      videoId: "t6lRyo2nOIo",
      handbookId: "assets/doc/google/2020_Youtube.pdf",
    },
    {
      videoId:"u2o6gOUA0jI",
      handbookId: "assets/doc/google/2020_Google_Hangouts_Meet.pdf",
    },
  ]

  constructor() { }

  gethandbookStudent() {
    return this.handbookStudent;
  }

  gethandbookGoogle() {
    return this.handbookGoogle;
  }

  gethandbookTeacher() {
    return this.handbookTeacher;
  }

}
