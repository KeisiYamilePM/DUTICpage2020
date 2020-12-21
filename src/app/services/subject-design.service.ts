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

  private names: any[] = [
    {
      "ID": "1",
      "NOMBRES": "ARANA MEDINA FLOR DE MILAGRO          "
    },
    {
      "ID": "2",
      "NOMBRES": "CABRERA MELGAR PABLO ENRIQUE          "
    },
    {
      "ID": "3",
      "NOMBRES": "CASTELLANOS MORALES FATIMA ALEXANDRA  "
    },
    {
      "ID": "4",
      "NOMBRES": "CONDORI CARRILLO ALEX BERNARDINO      "
    },
    {
      "ID": "5",
      "NOMBRES": "CORIMANYA  CONDO RUDITH"
    },
    {
      "ID": "6",
      "NOMBRES": "CRUZ LIPE JOEL ANGEL                  "
    },
    {
      "ID": "7",
      "NOMBRES": "GARAY GUTIERREZ MANUEL ENRIQUE        "
    },
    {
      "ID": "8",
      "NOMBRES": "GOMEZ QUISPE KAREN YESENIA            "
    },
    {
      "ID": "9",
      "NOMBRES": "IMATA SUMIRE ADE LUZ"
    },
    {
      "ID": "10",
      "NOMBRES": "LIMA HANCCO LIZBETH KATHERIN          "
    },
    {
      "ID": "11",
      "NOMBRES": "MACHACA CENTENO ELFER JOSE            "
    },
    {
      "ID": "12",
      "NOMBRES": "OBLITAS ARENAS JEFFERSON PERCY        "
    },
    {
      "ID": "13",
      "NOMBRES": "PEREZ VIZCARRA ALDO ALEXIS"
    },
    {
      "ID": "14",
      "NOMBRES": "POSTIGO VELA MACIEL FARIDE            "
    },
    {
      "ID": "15",
      "NOMBRES": "QUILLA CRUZ DUSTIN PEDRO              "
    },
    {
      "ID": "16",
      "NOMBRES": "RAMOS JARA HERNAN YURI                "
    },
    {
      "ID": "17",
      "NOMBRES": "RIOS TANCO MARIA JOSE                 "
    },
    {
      "ID": "18",
      "NOMBRES": "ROCA  BACA FIORELLA MORAIMA          "
    },
    {
      "ID": "19",
      "NOMBRES": "RUDAS APAZA CARLOS ALBERTO            "
    },
    {
      "ID": "20",
      "NOMBRES": "TAPIA RIOS AARON ARTURO"
    },
    {
      "ID": "21",
      "NOMBRES": "TICONA LAZARO DANITZA JHUVELIZ        "
    },
    {
      "ID": "22",
      "NOMBRES": "VALVERDE HUILCA KEVIN LEOPOLDO        "
    },
    {
      "ID": "23",
      "NOMBRES": "CALDERON CARRIZALES EDER ALBERTO "
    },
    {
      "ID": "24",
      "NOMBRES": "YANQUE JUSTO JHAHAYDA SANDRA"
    },
    {
      "ID": "25",
      "NOMBRES": "CRUZ QUISPE FREDDY GREGORIO"
    },
    {
      "ID": "26",
      "NOMBRES": "VILLALBA  TAIPE THANIA PAMELA"
    },
    {
      "ID": "27",
      "NOMBRES": "CHOQUEHUAYTA ANCASI LESLIE LUCERO"
    },
    {
      "ID": "28",
      "NOMBRES": "HUARACHA GOMEL ANTHONY HUMBERTO"
    },
    {
      "ID": "29",
      "NOMBRES": "FARFAN CHOQUEHUANCA MARIA ELISABETH"
    },
    {
      "ID": "30",
      "NOMBRES": "CABRERA  MELGAR VICTOR ANDRES"
    },
    {
      "ID": "31",
      "NOMBRES": "QUINCHO MAMANI LEHI"
    },
    {
      "ID": "32",
      "NOMBRES": "TICONA BEJARANO ALEX DANIEL"
    },
    {
      "ID": "33",
      "NOMBRES": "RIVERA PÉREZ SONIA XIMENA"
    },
    {
      "ID": "34",
      "NOMBRES": "ABARCA CASTRO EDGAR MANUEL"
    },
    {
      "ID": "35",
      "NOMBRES": "CCORAHUA SANTO CARLOS PEDRITO"
    },
    {
      "ID": "36",
      "NOMBRES": "HUANATICO LUQUE KLEYSON KLAUS"
    },
    {
      "ID": "37",
      "NOMBRES": "VICTORIA ISABEL CHAHUAYO PACOMPIA"
    },
    {
      "ID": "38",
      "NOMBRES": "ROBERT ARISACA MAMANI"
    },
    {
      "ID": "39",
      "NOMBRES": "BETSY CISNEROS "
    },
    {
      "ID": "40",
      "NOMBRES": "JORGE VIZCARRA"
    },
    {
      "ID": "41",
      "NOMBRES": "ERICK SANCHEZ"
    },
    {
      "ID": "42",
      "NOMBRES": "MARIELA DIAZ"
    },
    {
      "ID": "43",
      "NOMBRES": "MILAGROS SARAYASI"
    },
    {
      "ID": "44",
      "NOMBRES": "CLAUDIO OLANDA"
    },
    {
      "ID": "45",
      "NOMBRES": "RENATO BUSTAMANTE"
    },
    {
      "ID": "46",
      "NOMBRES": "DAVID MAMANI"
    },
    {
      "ID": "47",
      "NOMBRES": "MICHAEL FLORES"
    },
    {
      "ID": "48",
      "NOMBRES": "MONICA JORDAN"
    }
  ]

  constructor() { }

  getStrategies() {
    return this.strategy;
  }

  getNamesRandom() {
    return this.names;
  }

}
