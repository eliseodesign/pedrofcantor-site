import db from '../config';
import { Querie, Admin } from '@/app/api/admin/admin';
import DatabaseHelper from './databaseHelper';

export class AdminQueries implements Querie {
  private dbHelper: DatabaseHelper;

  constructor() {
    this.dbHelper = new DatabaseHelper(db);
  }

  async selectOne(id: number): Promise<Admin | undefined> {
    const sql = 'SELECT * FROM Admin WHERE id = ?';
    const params = [id];

    const row = await this.dbHelper.executeQuery<Admin>({sql, params});
    return row[0];
  }

  async selectAll(): Promise<Admin[]> {
    const sql = 'SELECT * FROM Admin';

    const rows = await this.dbHelper.executeQuery<Admin>({sql, params:[]});
    return rows;
  }

  async insert(user: Admin): Promise<{ success: string }> {
    const sql = 'INSERT INTO Admin (username, password, enable) VALUES (?,?,?)';
    const params = [user.username, user.password, user.enable];
    console.log(params)
    
    await this.dbHelper.executeNonQuery({sql, params});
    return { success: "admin create" };
  }

  async delete(id: number): Promise<{ success: string }> {
    const sql = 'DELETE FROM Admin WHERE id = ?';
    const params = [id];

    await this.dbHelper.executeNonQuery({sql, params});
    return { success: "admin deleted" };
  }
}
