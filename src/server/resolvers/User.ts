import { User } from '../entity/User';

export const createUser = async (_: any, args: any) => {
  return await User.create(args).save();
};

export const updateUser = (_: any, { id, ...args }: any) => {
  try {
    User.update({ id }, args);
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};

export const deleteUser = (_: any, { id }: any) => {
  try {
    User.delete({ id });
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};
