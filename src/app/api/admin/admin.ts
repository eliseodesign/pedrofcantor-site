import { User } from '@/shared/interfaces'

export interface Admin extends User{
  enable: boolean
}

export interface Querie {
  selectOne(username: string): Promise<Admin | undefined>;
  selectAll(): Promise<Admin[]>;
  insert(user: Admin): Promise<{ success: string }>;
  delete(id: number): Promise<{ success: string }>;
}
