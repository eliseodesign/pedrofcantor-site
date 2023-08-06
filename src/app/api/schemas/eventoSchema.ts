import { z } from 'zod'

// id Int @id @default(autoincrement())
const eventoId = z.number().nonnegative()
// date DateTime
const date = z.date()
// title String
const title = z.string().nonempty().min(6)
// description String
const description = z.string().nonempty()
// articleId Int
// article Articulo @relation(fields: [articleId], references: [id])
