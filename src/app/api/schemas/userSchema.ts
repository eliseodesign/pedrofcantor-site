import { z } from 'zod';

// Campos
const userId = z.number().nonnegative();
const fullName = z.string();
const username = z.string();
const password = z.string().min(6); 
const roleId = z.number().nonnegative();
const isActive = z.boolean();

export const getUser = z.object({
  id: userId,
}).strict();

export const createUser = z.object({
  fullName: fullName.min(3), 
  username: username.nonempty(),
  password: password.nonempty(),
  roleId,
}).strict();

export const deleteUser = z.object({
  id: userId,
});

export const updateUser = z.object({
  fullName: fullName.optional(),
  username: username.optional(),
  password: password.optional(),
  roleId: roleId.optional(),
  isActive: isActive.optional()
}).strict();

const UserSchema = createUser.merge(getUser);

export type UserType = z.infer<typeof UserSchema>;