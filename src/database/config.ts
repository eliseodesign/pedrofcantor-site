import sqlite3 from "sqlite3";

const DBNAME = "db.sqlite"
const db = new sqlite3.Database(DBNAME, (err)=>{
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("CONNECTED TO DB")
  db.run(`
  CREATE TABLE Admin(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    password TEXT NOT NULL,
    username TEXT NOT NULL
  );
  `)

})
export default db;
