export interface Articulo {
  shortname: string, // será la url y el nombre del archivo markdown
  metadata: Metadata
} 

export interface Metadata{
  title: string
  description: string
  date: Date
}