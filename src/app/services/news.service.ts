import { Injectable } from '@angular/core';
import { TrainingStudentsComponent } from 'app/components/trainings/training-students/training-students.component';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private content: any[] = [
    {
      name: "Políticas digitales educativas frente a la Covid-19",
      des: "El presente documento tiene como propósito presentar y analizar las políticas de educación remota de los países latinoamericanos que buscaron asegurar la continuidad educativa frente a la pandemia por la COVID-19. Se presenta un panorama regional a la vez que se analizan diferentes estrategias y acciones desarrolladas por un grupo de países seleccionados (desde marzo a octubre de 2020).",
      img: "assets/img/news/n2.png",
      date: "",
      state: true,
      isnew: false,
      link: "https://unesdoc.unesco.org/ark:/48223/pf0000378636",
    },
    {
      name: "Marco de competencias de los docentes enmateria de TIC UNESCO",
      des: "Aborda las repercusiones de los recientes avances tecnológicos en materia de educación y aprendizaje, como la inteligencia artificial (IA), las tecnologías móviles, la Internet de las cosas y los recursos educativos abiertos, en apoyo a la creación de sociedades del conocimiento inclusivas.",
      img: "assets/img/news/n3.png",
      date: "30/05/2020",
      state: true,
      isnew: false,
      link: "https://unesdoc.unesco.org/ark:/48223/pf0000371024",
    },
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
      name: "El sistema universitario frente al COVID-19 durante 2020 y 2021",
      des: "Los retos y las oportunidades están sobre la mesa, y la universidad pública, con el apoyo del Minedu, ha decidido asumirlos. Este documento revela el trabajo realizado durante el 2020 y el primer semestre del 2021, y plantea el camino que le toca recorrer al sistema universitario peruano.",
      img: "assets/img/news/n1.png",
      date: "",
      state: true,
      isnew: false,
      link: "https://www.minedu.gob.pe/conectados/pdf/universidad-publica-covid-19-minedu.pdf",
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
      name: "RPU presenta el catálogo de herramientas digitales para la enseñanza",
      des: "Herramientas digitales para la enseñanza es el primer material de un conjunto que viene preparando la Dirección Académica de Planeamiento y Evaluación (DAPE) y la Dirección Académica de Responsabilidad Social (DARS) de la Pontificia Universidad Católica del Perú, en coordinación con la Secretaría Técnica de la Red Peruana de Universidades (RPU)",
      img: "assets/img/news/rpu14062020.jpg",
      date: "",
      state: false,
      isnew: false,
      link: "http://rpu.edu.pe/2020/05/21/rpu-presenta-catalogo-herramientas-digitales-la-ensenanza/",
    },
  ];

  constructor() { }

  getNews() {
    return this.content;
  }
}
