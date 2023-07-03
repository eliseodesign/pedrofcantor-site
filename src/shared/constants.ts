interface Constants {
  readonly SIGLAS: string;
  readonly NOMBRE: string;
  readonly EMAIL: string;
  readonly CODIGO: string;
  readonly DIRECCION: string;
  readonly DESAROLLADOR: string;
  readonly FB: string[];
  readonly TEL: string;
}

export interface RoutesConstants {
  readonly INICIO: string[][];
  readonly SOBRE_NOSOTROS: string[][];
  readonly HISTORIA: string[][];
  readonly EDU: string[][];
  readonly CONTACTO: string[][];
}
/**
* @description Constantes inmutables de la aplicación
*/

export const inmutableConstants: Constants = {
  SIGLAS: "PFC",
  NOMBRE: "Complejo Educativo \"Pedro  F. Cantor\"",
  EMAIL: "@cantor10635yahoo.com",
  CODIGO:"10635",
  DIRECCION:"Calle Unión #6, Bo. Santa Cruz, Izalco",
  DESAROLLADOR:"Eliseo Arévalo ",
  FB:["@100cantor","https://"],
  TEL:"2453-5101"
};

/**
* @description Constantes de rutas
*/
export const routesContstants: RoutesConstants = {
  INICIO: [
      ["/", "inicio"]
  ],
  SOBRE_NOSOTROS: [
      ["/sobre-nosotros", "Sobre Nosotros"]
  ],
  HISTORIA:[
    ["/historia","Historia"]
  ],
  EDU:[
    ["/edu", "Talento Cantor"]
  ],
  CONTACTO: [
      ["/contacto", "Contacto"]
  ]
};