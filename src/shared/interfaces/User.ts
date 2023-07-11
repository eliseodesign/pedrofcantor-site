export interface User{
  id: number,
  fullName: string,
  username: string,
  password: string,
  createdAt: Date,
  isActive: boolean,
  roleId: number
}