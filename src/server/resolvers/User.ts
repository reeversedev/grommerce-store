import { User } from '../entity/User';
import { hash } from 'bcryptjs';
import { initializePassport } from '../utils/passport-config';
const passport = require('passport');

initializePassport(
  passport,
  (email: string) => User.findOne(email),
  (id: string) => User.findOne(id)
);

export const signup = async (_: any, args: any) => {
  try {
    const hashedPassword = await hash(args.password, 10);

    const user = { ...args, password: hashedPassword };

    await createUser('_', user);

    return 'User Created';
  } catch (error) {
    return error.detail;
  }
};

export const createUser = async (_: any, args: any) => {
  return await User.create(args).save();
};

export const updateUser = async (_: any, { id, ...args }: any) => {
  try {
    await User.update({ id }, args);
  } catch (err) {
    return false;
  }
  return true;
};

export const deleteUser = async (_: any, { id }: any) => {
  try {
    await User.delete({ id });
  } catch (err) {
    return false;
  }
  return true;
};
