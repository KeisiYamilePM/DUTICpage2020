import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private content: any[] = [
    {
      name: "UNESCO Y DOCENCIA VIRTUAL",
      des: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "../../../../assets/img/moodleInterm.jpg",
      date: "30/05/2020",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "OBSERVATORIO MONTERREY",
      des: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
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
