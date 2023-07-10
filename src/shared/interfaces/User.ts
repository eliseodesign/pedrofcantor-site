export interface User{
  id: number,
  fullname: string,
  username: string,
  password: string,
  createdAt: Date,
  isActive: boolean,
  roleId: number
}
