import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private content: any[] = [
    {
      name: "INFORMATIC - Octubre",
      id: "6",
      category: "General",
      file: "assets/doc/lineamientos.pdf",
      date: "Mar 15,2021",
    },
    {
      name: "INFORMATIC - Agt, Set",
      id: "6",
      category: "General",
      file: "assets/doc/lineamientos.pdf",
      date: "Mar 15,2021",
    },
    {
      name: "INFORMATIC - Julio",
      id: "5",
      category: "General",
      file: "assets/doc/lineamientos.pdf",
      date: "Mar 15,2021",
    },
    {
      name: "INFORMATIC - Junio",
      id: "4",
      category: "General",
      file: "assets/doc/lineamientos.pdf",
      date: "Mar 15,2021",
    },
    {
      name: "INFORMATIC - Mayo",
      id: "3",
      category: "General",
      file: "assets/doc/lineamientos.pdf",
      date: "Mar 15,2021",
    },
    {
      name: "INFORMATIC - Abril",
      id: "2",
      category: "General",
      file: "assets/doc/lineamientos.pdf",
      date: "Mar 15,2021",
    },
    {
      name: "INFORMATIC - Marzo",
      id: "1",
      category: "General",
      file: "assets/doc/lineamientos.pdf",
      date: "Mar 15,2021",
    },
    {
      name: "INFORMATIC - Febrero",
      id: "0",
      category: "General",
      file: "assets/newsletter/BoletinDUTIC_Febrero_compressed.pdf",
      date: "Feb 10,2021",
    },
    
    /*
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
    },*/
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
