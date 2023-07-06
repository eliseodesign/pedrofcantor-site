import sqlite3 from "sqlite3";
import { tables } from './tables'

const DBNAME = "db.sqlite"
const db = new sqlite3.Database(DBNAME, (err)=>{
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("CONNECTED TO DB")
  // create tables
  tables.forEach((table)=>{
    db.run(table)
  })
})
export default db;
