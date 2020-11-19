import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private content: any[] = [
    {
      name: "INFORMATIC - Noviembre I",
      id: "0",
      category: "Sociales",
      file: "assets/newsletter/BOLETIN_INFORMATIVO.pdf",
      date: "Nov 1,2020",
    },
    {
      name: "INFORMATIC - Noviembre II",
      id: "1",
      category: "Ingenierias",
      file: "assets/newsletter/lineamientos.pdf",
      date: "Nov 1,2020",
    },
    {
      name: "INFORMATIC - Diciembre I",
      id: "2",
      category: "Biomedicas",
      file: "assets/newsletter/orientaciones_trabajo_virtual.pdf",
      date: "Nov 1,2020",
    },
    {
      name: "INFORMATIC - Diciembre II",
      id: "3",
      category: "Biomedicas",
      file: "assets/newsletter/BOLETIN_INFORMATIVO.pdf",
      date: "Nov 1,2020",
    },
    {
      name: "INFORMATIC - Enero I",
      id: "3",
      category: "Biomedicas",
      file: "assets/newsletter/lineamientos.pdf",
      date: "Nov 1,2020",
    },
  ]
  constructor() { }

  /*Funcion de prueba*/
  getEntries() {
    return this.content;
  }

  searchEntries( term: string){
    let entryArr: any[] = [];
    term = term.toLowerCase();

    for(let entry of this.content){
      let title = entry.name.toLowerCase();

      if ( title.indexOf(term) >= 0){
        entryArr.push(entry)
      }
    }
    return entryArr;
  }

}
