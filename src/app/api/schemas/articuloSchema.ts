import { z } from 'zod';

const articuloId = z.number().nonnegative();
const shortname = z.string().nonempty().min(3);
const title = z.string().nonempty();
const description = z.string().nonempty().min(6); 
const date = z.date();
const content = z.string().nonempty()
const urlImage = z.string().nonempty()

export const getArticulo = z.object({
  id : articuloId,
})

export const createArticulo = z.object({
  shortname: shortname,
  title: title,
  description: description,
  content,
  urlImage
}).strict()

export const deleteArticulo = z.object({
  id:articuloId
})

export const updateArticulo = z.object({
  shortname: shortname.optional(),
  title: title.optional(),
  description: description.optional(),
  date: date.optional(),
  content: content.optional()
})