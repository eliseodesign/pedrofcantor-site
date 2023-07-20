/*
  Warnings:

  - Added the required column `urlImage` to the `Articulo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Articulo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortname" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL
);
INSERT INTO "new_Articulo" ("content", "date", "description", "id", "shortname", "title") SELECT "content", "date", "description", "id", "shortname", "title" FROM "Articulo";
DROP TABLE "Articulo";
ALTER TABLE "new_Articulo" RENAME TO "Articulo";
CREATE UNIQUE INDEX "Articulo_shortname_key" ON "Articulo"("shortname");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
