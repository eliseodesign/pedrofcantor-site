export interface Articulo {
  /**  será la url y el nombre del archivo markdown */
  shortname: string, 
  title: string
  description: string
  date: Date | string,
  /**Contenido markdown */
  content: string
} 