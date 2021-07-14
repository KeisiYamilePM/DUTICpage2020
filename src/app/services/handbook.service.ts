import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandbookService {

  private handbookStudent: any[] = [
    {
      videoId: "E0wyTT2Ngpg",
      handbookId: "assets/doc/TUTORIAL_Ingresando a la plataforma_c.pdf",
    },
    {
      videoId: "xxSDV82R5v0",
      handbookId: "assets/doc/TUTORIAL_Ingresando a mi perfil en el Aula virtual_c.pdf",
    },
    {
      videoId: "W5gUO9K4cqI",
      handbookId: "assets/doc/student/TUTORIAL_Ingresando a mis cursos_Estudiante_c.pdf",
    },
    {
      videoId: "Tv-k0w4d2ug",
      handbookId: "assets/doc/student/TUTORIAL_Marcar Asistencia_c.pdf",
    },
    {
      videoId: "FbpmveY-Ti4",
      handbookId: "assets/doc/student/TUTORIAL_Resolviendo Cuestionario en el Aula virtual_c.pdf",
    },
    {
      videoId: "bnQFTRKuayk",
      handbookId: "assets/doc/student/TUTORIAL_Revisar Foro_Estudiante_c.pdf",
    },
    {
      videoId: "USyCjt1C_oM",
      handbookId: "TUTORIAL_Revisar y enviar tareas_ Estudiante_c.pdf",
    },
  ]

  private handbookTeacher: any[] = [
    {
      videoId: "E0wyTT2Ngpg",
      handbookId: "assets/doc/TUTORIAL_Ingresando a la plataforma_c.pdf",
    },
    {
      videoId: "xxSDV82R5v0",
      handbookId: "assets/doc/TUTORIAL_Ingresando a mi perfil en el Aula virtual_c.pdf",
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
      videoId: "",
      handbookId: "assets/doc/google/2020_TutorialDocumentosGoogle.pdf",
    },
    {
      videoId: "Kv-dyUBV0_k", //presentaciones de google
      handbookId: "assets/doc/google/2020_TutorialPresentacionesGoogle_v3.5_compressed.pdf",
    },
    {
      videoId: "9pQbolFaRa8", //formulario de google
      handbookId: "assets/doc/google/FORMULARIO DE GOOGLE_c.pdf",
    },
    {
      videoId: "EwrebA2ZBa4",
      handbookId: "assets/doc/google/2020_TutorialDocumentosGoogle_v3.5_c.pdf",
    },
    {
      videoId: "yniA6nDYIPo",
      handbookId: "assets/doc/google/CALENDARIO DE GOOGLE_c.pdf",
    },
    {
      videoId: "t6lRyo2nOIo",
      handbookId: "assets/doc/google/2020_Youtube.pdf",
    },
    {
      videoId:"u2o6gOUA0jI",
      handbookId: "assets/doc/google/2020_Google_Hangouts_Meet.pdf",
    },
    {
      videoId:"1Hd5nNR5MJM",
      handbookId: "assets/doc/google/2021_Manual_Mentimeter.pdf",
    },
    {
      videoId:"sBeLgsVBSbo",
      handbookId: "assets/doc/google/TUTORIAL_Creacion_y_uso_de_QRs_c.pdf",
    },
    {
      videoId:"B5dzxEd_WdM",
      handbookId: "assets/doc/google/TUTORIAL_corubrics_c.pdf",
    },
    {
      videoId:"FGzPly7R5zQ",
      handbookId: "assets/doc/google/Tutorial_KAHOOT_c.pdf",
    },
    {
      videoId:"gxJR3f3BNco",
      handbookId: "assets/doc/google/TUTORIAL_Quizizz_c.pdf",
    },
    {
      videoId:"0iePnFYgZCo",
      handbookId: "assets/doc/google/Manual Trello_c.pdf",
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
