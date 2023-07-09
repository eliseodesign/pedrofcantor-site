import sqlite3 from "sqlite3";
import { tables } from './tables'

const DBNAME = "db.sqlite"
const db = new sqlite3.Database(DBNAME, (err)=>{
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("CONNECTED TO DB")
  // Verificar si las tablas existen antes de crearlas
  db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='Admin'", (err, row) => {
    if (err) {
      console.error(err.message);
      throw err;
    }
    if (!row) {
      // La tabla no existe, crearla
      tables.forEach((table)=>{
        db.run(table)
      })
    }
  });
});

export default db;
