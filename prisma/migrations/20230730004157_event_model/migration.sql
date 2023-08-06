-- AlterTable
ALTER TABLE "Articulo" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'blog';

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Articulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
