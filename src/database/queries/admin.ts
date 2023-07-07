import db from '../config';
import { Querie, Admin } from '@/app/api/admin/admin';
import DatabaseHelper from './databaseHelper';

export class AdminQueries implements Querie {
  private dbHelper: DatabaseHelper;

  constructor() {
    this.dbHelper = new DatabaseHelper(db);
  }

  async selectOne(id: number){
    const sql = 'SELECT * FROM Admin WHERE id = ?';
    const params = [id];

    try {
      const row = await this.dbHelper.executeQuery(sql, params);
      return row;
    } catch (error) {
      throw error;
    }
  }
  
  async selectAll() {
    const sql = 'SELECT * FROM Admin';
  
    try {
      const rows = await this.dbHelper.executeQueryAll(sql, []);
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  async insert(user: Admin) {
    const sql = 'INSERT INTO Admin (username, password) VALUES (?,?)';
    const params = [user.username, user.password];

    try {
      await this.dbHelper.executeQuery(sql, params);
      return { success: "admin create" };
    } catch (error) {
      throw error;
    }
  }
  
  async delete(id:number) {
    const sql = 'DELETE FROM Admin WHERE id = ?'
    const params = [id]

    try {
      await this.dbHelper.executeQuery(sql, params);
      return { success: "admin deleted" };
    } catch (error) {
      throw error;
    }
  }
}
