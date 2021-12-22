import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  
  private questions: any[] = [
    {
      title: "No puedo ingresar a mi aula virtual ¿Qué hago?",
      code: "Docente - Estudiante",
      des: "Recuerda que el proceso de sincronización de matrículas se actualiza cada día, en caso su usuario aún no se encuentre registrado en el aula virtual. Por favor comunicarse con dufa@unsa.edu.pe. Si no recuerda la contraseña de su correo institucional, por favor comunicarse con ouis@unsa.edu.pe.",
    },
    {
      title: "Al ingresar a mi Aula Virtual DUTIC, ¿Cómo ubico mis cursos?",
      code: "Docente - Estudiante",
      des: "Encontrará sus cursos en el menú lateral izquierdo. También podrá encontrarlos desplazándose a la parte inferior del Área Personal o en el Inicio del sitio.",
    },
    {
      title: "No logro acceder a mi correo institucional ¿Qué puedo hacer, DUTIC tiene acceso  a las cuentas institucionales?",
      code: "Docente - Estudiante",
      des: "La Dirección Universitaria de Tecnologías de Información y Comunicación  brinda asesoría sobre el uso de las Aulas virtuales así como accesos a la plataforma virtual, para temas y/o inconvenientes de acceso a su cuenta institucional deberá escribir a la Oficina de Informática siendo el correo ouis@unsa.edu.pe",
    },
    {
      title: "¿Cómo acceder a mis aulas virtuales de semestres anteriores?",
      code: "Docente - Estudiante",
      des: "Desde la página web DUTIC usted podrá acceder a las aulas del semestre 2020A, 2020B, y 2020C. Desde el aula virtual actual en el menú superior se tiene una opción “Aulas anteriores” en la cual encontrará enlaces a las aulas virtuales anteriores.",
    },
    {
      title: "¿Cómo accedo a la plataforma virtual desde mi teléfono?",
      code: "Docente - Estudiante",
      des: "Deberás descargar la aplicación moodle desde el siguiente enlace: https://play.google.com/store/apps/details?id=com.moodle.moodlemobile Una vez descargada la aplicación, ingresa el siguiente enlace: https://aulavirtual.unsa.edu.pe/aulavirtual/ Ingresa con tu correo institucional",
    },
    {
      title: "¿Cómo puedo enviar un comunicado a mis estudiantes de una asignatura?",
      code: "Docente",
      des: "Para enviar un anuncio a los estudiantes del curso deberá ingresar al bloque izquierdo del aula virtual elegir la opción de participantes, seleccionar a los usuarios que se desee enviar el mensaje y luego seleccionar la opción mensaje.",
    },     
    {
      title: "¿Cómo realizo una copia de seguridad y restauro mi curso? ",
      code: "Docente",
      des: "En la página web puedes encontrar videotutoriales que te orientarán en el proceso de descargar una copia de seguridad y restaurarla en tu curso. https://dutic.unsa.edu.pe/#/videoandresources/teachers",
    },
    {
      title: "¿Qué significa un usuario “Suspendido” en mi aula virtual?",
      code: "Docente",
      des: "El aula virtual está integrada con el DUFA por lo que se realizan actualizaciones periódicas en el día. Un usuario suspendido puede deberse a que el usuario ha sido retirado del curso. Un usuario suspendido no puede acceder al contenido del curso.",
    },
    {
      title: "¿Cómo me puedo comunicar con mi docente?",
      code: "Estudiante",
      des: "Como estudiante al ingresar a un curso en el menú encontrarás el botón “Este curso”, al darle clic te mostrará una ventana con los profesores del curso, sus correos electrónicos y una opción para enviar un mensaje a través de la plataforma virtual.",
    },
    {
      title: "¿Cómo revisar mis calificaciones en el aula virtual?",
      code: "Estudiante",
      des: "Deberás  ingresar a tu curso. Luego, en el panel a la izquierda debes elegir la opción de calificaciones. Seguidamente, mostrará un resumen de sus calificaciones de acuerdo a sus tareas anteriormente asignadas.",
    },
  ]

  private dutips: any[] = [
       
    {
      title: "Visita la nueva plataforma de investigación de la UNSA.",
      code: "Docente - Estudiante",
      des: "Recuerda que ya está disponible la plataforma de investigación PURE, donde podrás encontrar proyectos, laboratorios de investigación, resultados de investigación y actividades de investigación realizada por docentes y alumnos de la UNSA. Mas información aqui https://pure.unsa.edu.pe/",
    },
    {
      title: "Accede al material digital que ofrece la UNSA ",
      code: "Docente - Estudiante",
      des: "En nuestra web, en la pestaña “Aprendizaje virtual” podrás encontrar los enlaces de acceso a la Biblioteca Virtual, Repositorio Institucional y Videos de Investigación científica y tecnológica.",
    },
    {
      title: "¿Cómo recuperar un recurso borrado de mi aula virtual?",
      code: "Docente",
      des: "Para poder recuperar un recurso borrado accidentalmente de un curso, se tiene que realizar lo siguiente: Ingresar a gestión de tu curso, Ingresar a la configuración del curso, Elegir la opción de Papelera de reciclaje.",
    },
    {
      title: "Coloca archivos rápidamente en tu aula virtual",
      code: "Docente",
      des: "Puedes colocar documentos o imágenes de forma rápida arrastrándolos directamente a la sección que desees, una vez activada la opción de edición en tu curso, ubica la pestaña donde se encuentra tu archivo, arrástralo y ¡listo!",
    },
    {
      title: "¿Borraste un archivo accidentalmente en Google Drive? Hay una cantidad de maneras de recuperarlo.",
      code: "Docente - Estudiante",
      des: "Si has borrado algo recientemente de Google Drive o de la aplicación Google Drive para ordenador, es posible que puedas recuperarlo restaurandolo de la papelera. En un ordenador, ve a drive.google.y ubica en el menú lateral izquierdo la opción “Papelera”. Haz clic con el botón derecho del ratón en el archivo que quieras recuperar. Haz clic en Restaurar.",
    },
    {
      title: "Como subir una carpeta a mi aula virtual",
      code: "Docente",
      des: "Debes comprimir tu carpeta antes de subirla. Ubica el archivo en tu PC. Activa la edición de tu curso, arrastra y suelta la carpeta en el tema que desees.",
    }
  ]
  
  getQuestions(): Observable<any[]> {
    return of(this.questions);
  }

  getDutips(): Observable<any[]> {
    return of(this.dutips);
  }

}
