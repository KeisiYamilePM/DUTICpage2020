import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectDesignService {

  private strategy: any[] = [
    {
      name: "ORIENTACIONES DEL TRABAJO VIRTUAL",
      des: "Los momentos del proceso, pueden abordarse utilizando diferentes herramientas asíncronas y sincrónicas e incluso podría usarse más de una herramienta a la vez; de esta forma adaptamos los recursos didácticos a todas las realidades de nuestros estudiantes, respecto al acceso a la educación virtual y fortalecemos el trabajo autónomo.",
      img: "",
      date: "",
      link: "https://drive.google.com/file/d/14pWbEbw9LNvCCv-Br629g-4dpD-0Qk4O/view?usp=sharing",
    },
  ];
  constructor() { }

  getStrategies() {
    return this.strategy;
  }
}
