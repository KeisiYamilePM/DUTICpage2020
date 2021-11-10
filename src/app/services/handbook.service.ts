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
    //GESTION DEL AULA
    {
      videoId: "E0wyTT2Ngpg",
      handbookId: "assets/doc/TUTORIAL_Ingresando a la plataforma_c.pdf",
    },
    {
      videoId: "xxSDV82R5v0",
      handbookId: "assets/doc/TUTORIAL_Ingresando a mi perfil en el Aula virtual_c.pdf",
    },
    {
      videoId: "JjDG5un8uEE", //video 2020
      handbookId: "assets/doc/teacher/gestion/Creacion_De_Grupos_Y_Agrupamientos_Docentes.03082021_c.pdf",
    },
    {
      videoId: "jOv_xsQbxwo",
      handbookId: "assets/doc/teacher/gestion/Copia_de_seguridad.02082021_c.pdf",
    },
    {
      videoId: "rtUkSL75_KM",
      handbookId: "assets/doc/teacher/gestion/Restaurar_un_curso.02082021_c.pdf",
    },
    {
      videoId: "AzuZURmY7Ws",
      handbookId: "assets/doc/teacher/gestion/Gestion_de_Usuarios.30072021_c.pdf",
    },
    {
      videoId: "FcjbzXMSXO8",
      handbookId: "assets/doc/teacher/gestion/Recuperar_archivos_eliminados.09082021_c.pdf",
    },
    // DISEÑO DEL AULA
    {
      videoId: "l6xC0ag7rsM", //video2020
      handbookId: "assets/doc/teacher/diseño/Guia_Subiendo_Archivos.30072021_c.pdf",
    },
    {
      videoId: "Ygju5coGXwk", //video2020
      handbookId: "assets/doc/teacher/diseño/Guia_Agregando_Videos.22072021_c.pdf",
    },
    {
      videoId: "hlhxWd6auSg",
      handbookId: "assets/doc/teacher/diseño/Creando_carpeta.05082021_c.pdf",
    },
    {
      videoId: "kfmjnNd0mTA",
      handbookId: "assets/doc/teacher/diseño/Foro_Docentes.22072021_c.pdf",
    },
    {
      videoId: "3v4t5abGEAI",
      handbookId: "assets/doc/teacher/diseño/Gestion_Temas.23072021_c.pdf",
    },
    // EVALUACION DEL AULA
    {
      videoId: "sTNHxKkRjaE", 
      handbookId: "assets/doc/teacher/evaluacion/Categorias_en_Banco_de_Preguntas.05082021_c.pdf",
    },
    {
      videoId: "zRTB1Ozu2iw", 
      handbookId: "assets/doc/teacher/evaluacion/CreaciónYEdiciónDeBancoDePreguntas_Docentes.30082021_c.pdf",
    },
    {
      videoId: "-QhQzDK1uyY", 
      handbookId: "assets/doc/teacher/evaluacion/Cuestionario_Docentes.24072021_c.pdf",
    },
    {
      videoId: "SdfnQaqwWME", 
      handbookId: "assets/doc/teacher/evaluacion/Guia_Reporte_Calificador.26072021_c.pdf",
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
      videoId: "iQ4ixFy1eek", //presentaciones de google
      handbookId: "assets/doc/google/2020_TutorialPresentacionesGoogle_v3.5_compressed.pdf",
    },
    {
      videoId: "ApoaUpCmci8", //formulario de google
      handbookId: "assets/doc/google/FORMULARIO DE GOOGLE_c.pdf",
    },
    {
      videoId: "zuQ79rDtSsM", //formulario de google
      handbookId: "assets/doc/google/FORMULARIO DE GOOGLE_c.pdf",
    },
    {
      videoId: "s0fevpLrDvM",
      handbookId: "assets/doc/google/2020_TutorialDocumentosGoogle_v3.5_c.pdf",
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
