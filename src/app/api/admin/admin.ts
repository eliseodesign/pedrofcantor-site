import { User } from '@/shared/interfaces'

export interface Admin extends User{
  enable: boolean
}

export interface Querie {
  insert(user: Admin): Promise<{ success: string }>;
}
