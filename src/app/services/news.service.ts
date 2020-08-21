import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private content: any[] = [
    {
      name: "VICERRECTORADO ACADÉMICO: Orientaciones para el trabajo virtual",
      des: "Los momentos del proceso, pueden abordarse utilizando diferentes herramientas asíncronas y sincrónicas e incluso podría usarse más de una herramienta a la vez; de esta forma adaptamos los recursos didácticos a todas las realidades de nuestro estudiantes, respecto al acceso a la educación virtual y fortalecemos el trabajo autónomo.",
      img: "assets/img/news/vicerrec.jpg",
      date: "",
      state: true,
      isnew: false,
      link: "assets/doc/orientaciones_trabajo_virtual.pdf",
    },
    {
      name: "UNESCO Y DOCENCIA VIRTUAL",
      des: "Desde su fundación, las universidades, como cualquier otra institución social, han tenido que enfrentarse a epidemias devastadoras que han impactado en su funcionamiento cotidiano. Y han sobrevivido y continuado con su misión aun con las puertas cerradas. En 1665, la Universidad de Cambridge cerró por causa de una epidemia de peste negra que azotó Inglaterra. Isaac Newton tuvo que volver...",
      img: "assets/img/news/unesco14062020.png",
      date: "30/05/2020",
      state: true,
      isnew: false,
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "Observatorio de Innovación Educativa",
      des: "El Observatorio de Innovación Educativa de la Universidad de Los Lagos realizará un ciclo de 4 webinars en donde participarán expertos nacionales e internacionales. Link de inscripción: https://reuna.zoom.us/webinar/register/WN_Y1fmDvTTQOOXZGob6TB0OQ",
      img: "assets/img/news/innovacion.png",
      date: "",
      state: true,
      isnew: false,
      link: "https://www.facebook.com/Observatoriodeinnovacioneducativa/photos/a.239129649453078/3361796670519678",
    },
    {
      name: "De lo presencial a lo virtual: encuentro de experiencias docentes en la Educación Superior",
      des: "",
      img: "assets/img/news/new11.png",
      date: "",
      state: false,     
      isnew: false,
      link: "assets/doc/news/Programa_asistentes.pdf",
    },
    {
      name: "Ciclo gratuito: De lo presencial a lo virtual",
      des: "Ofrecer a los participantes una formación práctica sobre cómo organizar sus actividades y procesos académicos a través de entornos virtuales. para poder mantener en el corto plazo sus compromisos institucionales y académicos",
      img: "assets/img/news/presencialavirtual.jpg",
      date: "",
      state: false,     
      isnew: false,
      link: "assets/doc/news/Ciclo_De_lo_presencial_a_lo_virtual_Peru.pdf",
    },
    {
      name: "Dialogo PUCP y Tecnologico de Monterrey",
      des: "En este diálogo, expertos del Tecnológico de Monterrey PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU y Universitat Oberta de Catalunya (UOC) conversarán sobre los retos de la educación a distancia ante la pandemia...",
      img: "assets/img/news/monterrey.png",
      date: "04/06/2020",
      state: false,
      isnew: false,
      link: "https://www.facebook.com/watch/live/?v=1044527619283099&ref=watch_permalink",
    },
    {
      name: "RPU presenta el catálogo de herramientas digitales para la enseñanza",
      des: "Herramientas digitales para la enseñanza es el primer material de un conjunto que viene preparando la Dirección Académica de Planeamiento y Evaluación (DAPE) y la Dirección Académica de Responsabilidad Social (DARS) de la Pontificia Universidad Católica del Perú, en coordinación con la Secretaría Técnica de la Red Peruana de Universidades (RPU)",
      img: "assets/img/news/rpu14062020.jpg",
      date: "",
      state: false,
      isnew: false,
      link: "http://rpu.edu.pe/2020/05/21/rpu-presenta-catalogo-herramientas-digitales-la-ensenanza/",
    },
    {
      name: "El cambio de la enseñanza presencial a la remota",
      des: "La Rédum (Red de Expertos) en colaboración con al Pontificia Universidad Católica del Perú desarrollarán la Conferencia en Línea: “El cambio en la enseñanza presencial remota” a cargo del docente Raúl Santiago de la Universidad de la Rioja (España).Este evenot se realizo el 09/06/2020",
      img: "assets/img/news/pucp14062020.png",
      date: "09/06/2020",
      state: false,
      isnew: false,
      link: "https://www.facebook.com/novedadesacademicaspucp/videos/688303838619527/?embtrk=9j3a-R-31018422-R-6c5-R-5c1%2Co46",
    },
    
  ];

  constructor() { }

  getNews() {
    return this.content;
  }
}
