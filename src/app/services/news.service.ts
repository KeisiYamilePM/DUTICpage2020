import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private content: any[] = [
    {
      name: "UNESCO Y DOCENCIA VIRTUAL",
      des: "Desde su fundación, las universidades, como cualquier otra institución social, han tenido que enfrentarse a epidemias devastadoras que han impactado en su funcionamiento cotidiano. Y han sobrevivido y continuado con su misión aun con las puertas cerradas. En 1665, la Universidad de Cambridge cerró por causa de una epidemia de peste negra que azotó Inglaterra. Isaac Newton tuvo que volver...",
      img: "../../../../assets/img/moodleInterm.jpg",
      date: "30/05/2020",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "OBSERVATORIO MONTERREY",
      des: "·En este diálogo, expertos del Tecnológico de Monterrey PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU y Universitat Oberta de Catalunya (UOC) conversarán sobre los retos de la educación a distancia ante la pandemia...",
      img: "../../../../assets/img/moodleAvanzado.jpg",
      date: "15/06/2020",
      link: "https://www.facebook.com/210703745629002/posts/3243630179002995/?d=n",
    },
  ];

  constructor() { }

  getNews() {
    return this.content;
  }
}
