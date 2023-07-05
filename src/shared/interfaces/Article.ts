export interface Article{
  shortName:string,
  content:string,
  metaData:MetaData
} 

export interface MetaData{
  title:string
  description:string
  fecha:string
}