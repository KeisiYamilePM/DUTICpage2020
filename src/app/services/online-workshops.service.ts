import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineWorkshopsService {

  private tvunsa: any[] = [
    {
      name: "Lineamientos y Acceso al Aula Virtual",
      speaker: "Mg. Elizabeth Vidal",
      nationality: "España",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=4YUV9j2UYXI",
    },
    {
      name: "Compartiendo Material",
      speaker: "Mg. Elizabeth Vidal",
      nationality: "España",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=bFku0u1i888",
    },
    {
      name: "Comunicación: foros, mensajes, videollamadas",
      speaker: "Sr. Jorge Vizcarra",
      nationality: "España",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=2duDsc5rr_U",
    },
    {
      name: "Estudiantes, foros y tareas",
      speaker: "",
      nationality: "España",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=CpQGpltSLa4",
    },
    {
      name: "Evaluaciones",
      speaker: "Mg. Elizabeth Vidal",
      nationality: "España",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=CpQGpltSLa4",
    },
  ];

  private videoconferences: any[] = [
    {
      name: "Lineamientos y Acceso al Aula Virtual",
      speaker: "Mg. Elizabeth Vidal",
      nationality: "Perú",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=4YUV9j2UYXI",
    },
    {
      name: "Compartiendo Material",
      speaker: "Mg. Elizabeth Vidal",
      nationality: "Perú",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=bFku0u1i888",
    },
    {
      name: "Comunicación: foros, mensajes, videollamadas",
      speaker: "Sr. Jorge Vizcarra",
      nationality: "Perú",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=2duDsc5rr_U",
    },
    {
      name: "Estudiantes, foros y tareas",
      speaker: "",
      nationality: "Perú",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=CpQGpltSLa4",
    },
    {
      name: "Evaluaciones",
      speaker: "Mg. Elizabeth Vidal",
      nationality: "Perú",
      category: "Educación",
      organizedBy: "DUTIC TVUNSA",
      date: "30/05/2020",
      hour: "",
      state: false,
      link: "https://www.youtube.com/watch?v=CpQGpltSLa4",
    },
    {
      name: "Educación Universitaria en tiempos de pandemia: Estrategias de superación",
      speaker: "Dr. Ángel Hernando Gómez",
      nationality: "España",
      category: "Educación",
      organizedBy: "INEDU",
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
      organizedBy: "INEDU",
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
      organizedBy: "INEDU",
      date: "29/05/2020",
      hour: "",
      state: false,
      link: "https://www.facebook.com/tvunsa/videos/3519694388045792/",
    },
    {
      name: "Evaluacién del aprendizaje en entornos virtuales y remotos",
      speaker: "Dr. Adolfo Ignacio Calderón Flores",
      nationality: "Brasil",
      category: "Educación",
      organizedBy: "INEDU",
      date: "05/06/2020",
      hour: "13:00 a 14:15",
      state: false,
      link: "https://www.facebook.com/tvunsa/videos/3519694388045792/",
    },
    {
      name: "Recursos y estrategias para el aprendizaje en línea",
      speaker: "Dra. María Soledad Ramírez Montoya",
      nationality: "México",
      category: "Educación",
      organizedBy: "INEDU",
      date: "08/05/2020",
      hour: "13:00 a 14:15",
      state: false,
      link: "https://www.facebook.com/tvunsa/videos/3519694388045792/",
    },
    {
      name: "Recursos y estrategias para el aprendizaje en línea",
      speaker: " Dra. Nora Liliana Dari",
      nationality: "Argentina",
      category: "Educación",
      organizedBy: "INEDU",
      date: "10/05/2020",
      hour: "13:00 a 14:15",
      state: false,
      link: "",
    },
    {
      name: "Recursos y estrategias para el aprendizaje en línea",
      speaker: "Dra. Claudia Pontón Ramos",
      nationality: "México",
      category: "Educación",
      organizedBy: "INEDU",
      date: "12/05/2020",
      hour: "13:00 a 14:15",
      state: false,
      link: "",
    },
  ];

  constructor() { }

  getTvunsaList(): Observable<any[]> {
    return of(this.tvunsa);
  }

  getVideoconferencesList(): Observable<any[]> {
    return of(this.videoconferences);
  }

}
