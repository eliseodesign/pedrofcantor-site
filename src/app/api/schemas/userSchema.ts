import { z } from 'zod';

// Campos
const userId = z.number().nonnegative();
const fullName = z.string();
const username = z.string();
const password = z.string().min(6); 
const roleId = z.number().nonnegative();

export const getUser = z.object({
  id: userId,
});

export const createUser = z.object({
  fullName: fullName.min(3), 
  username: username.nonempty(),
  password: password.nonempty(),
  roleId,
});

export const deleteUser = z.object({
  id: userId,
});

export const updateUser = z.object({
  id: userId,
  fullName,
  username,
  password,
  roleId,
});

const UserSchema = createUser.merge(getUser);

export type UserType = z.infer<typeof UserSchema>;