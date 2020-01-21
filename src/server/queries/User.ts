import { User } from '../entity/User';

export const getUser = (_: any, { id }: any) => User.findOne({ id });

export const getAllUsers = () => User.find();
