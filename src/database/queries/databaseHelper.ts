import { Database } from "sqlite3";

interface Params {
  sql:string,
  params: (string | number | boolean)[]
}

class DatabaseHelper {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  executeQuery<T>(data: Params): Promise<T[]> {

    const {sql, params } = data

    return new Promise<T[]>((res, rej) => {
      this.db.all(sql, params, (err, rows)=>
        err
        ? rej(err)
        : res(rows as T[])
      )
    });
  }

  executeNonQuery(data: Params): Promise<void> {
    const { sql, params } = data
    return new Promise<void>((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

export default DatabaseHelper;
