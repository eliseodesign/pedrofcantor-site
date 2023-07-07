import db from '../config';
import { Querie, Admin } from '@/app/api/admin/admin';
import DatabaseHelper from './databaseHelper';

export class AdminQueries implements Querie {
  private dbHelper: DatabaseHelper;

  constructor() {
    this.dbHelper = new DatabaseHelper(db);
  }

  async insert(user: Admin) {
    const sql = 'INSERT INTO Admin (username, password) VALUES (?,?)';
    const params = [user.username, user.password];

    return this.dbHelper.executeQuery(sql, params)
      .then(() => ({ success: "admin create" }));
  }
  // todo: delete
}
