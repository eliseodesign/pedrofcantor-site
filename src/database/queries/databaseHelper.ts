import { RunResult, Database } from "sqlite3";

class DatabaseHelper {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  executeQuery(sql: string, params: any[] = []): Promise<RunResult> {
    return new Promise<RunResult>((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this);
        }
      });
    });
  }

  executeQueryAll(sql: string, params: any[] = []): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.db.all(sql, params, function (err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default DatabaseHelper;
