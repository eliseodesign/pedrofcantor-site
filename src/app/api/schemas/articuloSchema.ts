import { z } from 'zod';

const articuloId = z.number().nonnegative();
const shortname = z.string().min(3);
const title = z.string();
const description = z.string().min(6); 
const date = z.date();

export const getArticulo = z.object({
  id : articuloId,
})

export const createArticulo = z.object({
  shortname: shortname.nonempty(),
  title: title.nonempty(),
  description: description.nonempty(),
  date
}).strict()

export const deleteArticulo = z.object({
  id:articuloId
})

export const updateArticulo = z.object({
  shortname: shortname.nonempty().optional(),
  title: title.nonempty().optional(),
  description: description.nonempty().optional(),
  date: date.optional()
})

const ArticuloSchema = createArticulo.merge(getArticulo)

export type ArticuloType = z.infer<typeof ArticuloSchema>