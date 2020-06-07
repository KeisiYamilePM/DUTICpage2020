import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineWorkshopsService {

  private tvunsa: any[] = [
    {
      name: "TVUNSA DUTIC",
      sesion: "1",
      des: "Los rasgos principales de Batman se",
      date: "30/05/2020",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "TVUNSA DUTIC",
      sesion: "2",
      des: "Los rasgos principales de Batman se",
      date: "30/05/2020",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "TVUNSA DUTIC",
      sesion: "3",
      des: "Los rasgos principales de Batman se",
      date: "30/05/2020",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "TVUNSA DUTIC",
      sesion: "4",
      des: "Los rasgos principales de Batman se",
      date: "30/05/2020",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "TVUNSA DUTIC",
      sesion: "5",
      des: "Los rasgos principales de Batman se",
      date: "30/05/2020",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
  ];

  private videoconferences: any[] = [
    {
      name: "Educacion Universitaria en tiempos de pandemia: Estrategias de superación",
      speaker: "Dr. Angel Herrera",
      nationality: "España",
      category: "Educacion",
      date: "35/05/2020",
      hour: "",
      state: "past",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "Educacion Universitaria en tiempos de pandemia: Estrategias de superación",
      speaker: "Dr. Angel Herrera",
      nationality: "España",
      category: "Educacion",
      date: "35/05/2020",
      hour: "",
      state: "past",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
    {
      name: "Educacion Universitaria en tiempos de pandemia: Estrategias de superación",
      speaker: "Dr. Angel Herrera",
      nationality: "España",
      category: "Educacion",
      date: "35/05/2020",
      hour: "",
      state: "past",
      link: "http://www.iesalc.unesco.org/wp-content/uploads/2020/04/COVID-19-060420-ES-2.pdf",
    },
  ];

  constructor() { }

  getTvunsaList() {
    return this.tvunsa;
  }

  getVideoconferencesList() {
    return this.videoconferences;
  }

}
