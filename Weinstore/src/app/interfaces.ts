export interface User {
    name:string,
    email: string,
    password: string
  }

  export interface Wine_lager {
    Produktnummer: string;
    Bezeichnung: string;
    Jahrgang: string;
    Region: string;
    Land: string;
    Bestand: number;
    Lagerort: string;
    Verkaufspreis: string;
    Einkaufspreis: string;
  }

  export interface Wine_versand {
    Produktnummer: string;
    Bezeichnung: string;
    Lagerort: string;
    Verkaufspreis: string;
  }

  export interface Wine_CS {
    Produktnummer: string;
    Bezeichnung: string;
    Jahrgang: string;
    Region: string;
    Land: string;
    Bestand: number;
    Verkaufspreis: string;
  }
  