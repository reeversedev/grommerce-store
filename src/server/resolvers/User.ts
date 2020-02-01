import { User } from '../entity/User';
import * as bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const login = async (_, { email, password }, { req }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return null;
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return null;
  }

  const refreshToken = sign(
    { userId: user.id, name: user.firstName + ' ' + user.lastName },
    'damnsecret',
    {
      expiresIn: '7d'
    }
  );

  const accessToken = sign(
    {
      userId: user.id
    },
    'damnsecret',
    { expiresIn: '15min' }
  );
};

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
