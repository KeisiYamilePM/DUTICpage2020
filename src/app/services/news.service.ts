import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private content: any[] = [
    {
      name: "PMESUT pone a disposición recursos digitales sobre educación virtual",
      des: "PMESUT pone a disposición recursos digitales sobre educación virtual.",
      img: "assets/img/virtualearning/pmsut.jpg",
      date: "",
      state: true,
      isnew: false,
      link: "https://www.pmesut.gob.pe/biblioteca-virtual",
    },
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
      name: "Diálogo: Laboratorios Remotos",
      des: "En la séptima edición de la iniciativa “Diálogos”, tres especialistas del Tecnológico de Monterrey, Pontificia Universidad Católica del Perú (PUCP) y Universitat Oberta de Catalunya (UOC) conversarán sobre  la educación a distancia y el uso de laboratorios en estos tiempos de emergencia sanitaria.",
      img: "assets/img/news/labsremotos.jpg",
      date: "Tecnológico de Monterrey, Pontificia Universidad Católica del Perú (PUCP) y Universitat Oberta de Catalunya (UOC) jueves 17 de septiembre de 2020, 9:00 AM, hora de México (GMT-5)",
      state: false,
      isnew: false,
      link: "https://observatorio.tec.mx/dialogos-del-observatorio?fbclid=IwAR0p4kH-7LIvjhH_GzmWZwI_wEmbBJ4U3Tcpg0XW8t0JqCt6_t5FhTgDe8M",
    },
    {
      name: "La tecnología como herramienta en el desarrollo de la educación en Arequipa",
      des: "Analizar la importancia del rol adquirido por la tecnología como herramienta en el desarrollo de la educación básica y superior durante la emergencia sanitaria y recopilar información que permita mejorar la enseñanza virtual en Arequipa.",
      img: "assets/img/news/webFree.jpg",
      date: "",
      state: false,
      isnew: false,
      link: "https://forms.gle/ihdFPV3GJ11QvCLh8",
    },
    {
      name: "Lanzamiento de PROGRAMA DE ENTRENAMIENTO PARA MENTORES",
      des: "ste viernes 18 de septiembre a las 17:00 horas, se llevará a cabo el lanzamiento oficial del PROGRAMA DE ENTRENAMIENTO PARA MENTORES, que tiene como objetivo fortalecer los Soft Skill de los participantes y así lograr una comunicación efectiva en el proceso de mentoring.",
      img: "assets/img/news/jakuemprende.png",
      date: "JAKU Emprende UNSA",
      state: false,
      isnew: false,
      link: "https://www.facebook.com/hashtag/programamentores",
    },
    {
      name: "Curso Internacional Online en Cultura de la Investigación",
      des: "Este curso está dirigido a profesores de universidades públicas y privadas, investigadores en general, investigadores de CONCYTEC, gestores de la investigación, directores de grupos de investigación, líderes de centros de investigación de Perú, interesados en iniciarse y consolidar herramientas y técnicas que forman parte de la cultura internacional de la investigación. Adicionalmente, a profesionales con maestría y/o doctorado, o interesados en alguna de estas.",
      img: "assets/img/news/cursoInter.png",
      date: "",
      state: false,
      isnew: false,
      link: "assets/doc/news/Brochure_CICI_v2.pdf",
    },
    {
      name: "Observatorio de Innovación Educativa",
      des: "El Observatorio de Innovación Educativa de la Universidad de Los Lagos realizará un ciclo de 4 webinars en donde participarán expertos nacionales e internacionales. Link de inscripción: https://reuna.zoom.us/webinar/register/WN_Y1fmDvTTQOOXZGob6TB0OQ",
      img: "assets/img/news/innovacion.png",
      date: "",
      state: false,
      isnew: false,
      link: "https://www.facebook.com/Observatoriodeinnovacioneducativa/photos/a.239129649453078/3361796670519678",
    },
    {
      name: "De lo presencial a lo virtual: encuentro de experiencias docentes en la Educación Superior",
      des: "",
      img: "assets/img/news/docencia.png",
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
