import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineWorkshopsService {

  private tvunsa: any[] = [
    {
      name: "Lineamientos y Acceso al Aula Virtual",
      sesion: "1",
      speaker: "Mg. Elizabeth Vidal",
      date: "30/05/2020",
      state: false,
      link: "https://www.youtube.com/watch?v=4YUV9j2UYXI",
    },
    {
      name: "Compartiendo Material",
      sesion: "2",
      speaker: "Mg. Elizabeth Vidal",
      date: "30/05/2020",
      state: false,
      link: "https://www.youtube.com/watch?v=bFku0u1i888",
    },
    {
      name: "Comunicación: foros, mensajes, videollamadas",
      sesion: "3",
      speaker: "Sr. Jorge Vizcarra",
      date: "30/05/2020",
      state: false,
      link: "https://www.youtube.com/watch?v=2duDsc5rr_U",
    },
    {
      name: "Estudiantes, foros y tareas",
      sesion: "4",
      speaker: "",
      date: "30/05/2020",
      state: false,
      link: "https://www.youtube.com/watch?v=CpQGpltSLa4",
    },
    {
      name: "Evaluaciones",
      sesion: "5",
      speaker: "Mg. Elizabeth Vidal",
      date: "30/05/2020",
      state: false,
      link: "https://www.youtube.com/watch?v=CpQGpltSLa4",
    },
  ];

  private videoconferences: any[] = [
    {
      name: "Educación Universitaria en tiempos de pandemia: Estrategias de superación",
      speaker: "Dr. Ángel Hernando Gómez",
      nationality: "España",
      category: "Educación",
      date: "25/05/2020",
      hour: "",
      state: false,
      link: "https://www.facebook.com/tvunsa/videos/700496077187054/",
    },
    {
      name: "Educación Universitaria en tiempos de pandemia: Estrategias de superación",
      speaker: "Dr. Francisco Javier Vázquez Ramos",
      nationality: "España",
      category: "Educación",
      date: "27/05/2020",
      hour: "",
      state: false,
      link: "https://www.facebook.com/tvunsa/videos/277792936692614/",
    },
    {
      name: "Educación Universitaria en tiempos de pandemia: Estrategias de superación",
      speaker: "Dra. Juliana Elisa Raffaglelli",
      nationality: "España",
      category: "Educación",
      date: "29/05/2020",
      hour: "",
      state: false,
      link: "https://www.facebook.com/tvunsa/videos/3519694388045792/",
    },
    {
      name: "Evaluacién del aprendizaje en entornos vrituales y remotos",
      speaker: "Dr. Adolfo Ignacio Calderón Flores",
      nationality: "Brasil",
      category: "Educacién",
      date: "29/05/2020",
      hour: "",
      state: true,
      link: "https://www.facebook.com/tvunsa/videos/3519694388045792/",
    },
    {
      name: "Recursos y estrategias para el aprendizaje en línea",
      speaker: "Dra. María Soledad Ramírez Montoya",
      nationality: "México",
      category: "Educacién",
      date: "29/05/2020",
      hour: "",
      state: true,
      link: "https://www.facebook.com/tvunsa/videos/3519694388045792/",
    },
    {
      name: "Recursos y estrategias para el aprendizaje en línea",
      speaker: " Dra. Nora Liliana Dari",
      nationality: "Argentina",
      category: "Educación",
      date: "29/05/2020",
      hour: "",
      state: true,
      link: "https://www.facebook.com/tvunsa/videos/3519694388045792/",
    },
    {
      name: "Recursos y estrategias para el aprendizaje en línea",
      speaker: "Dra. Claudia Pontón Ramos",
      nationality: "México",
      category: "Educación",
      date: "29/05/2020",
      hour: "",
      state: true,
      link: "https://www.facebook.com/tvunsa/videos/3519694388045792/",
    },
  ];

  constructor() { }

  getTvunsaList():Observable<any[]>{
    return of(this.tvunsa);
  }

  getVideoconferencesList():Observable<any[]>{
    return of(this.videoconferences);
  }

}
