-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_articleId_fkey";

-- AlterTable
ALTER TABLE "Evento" ALTER COLUMN "articleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Articulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
