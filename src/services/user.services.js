import { UserModel } from "../model/user.model.js";
import { mocksUsers } from "../utils/user.utils.js";

export const createUsersMock = async (cant = 50) => {
  try {
    const users = [];
    for (let i = 0; i < cant; i++) {
      const user = mocksUsers();
      users.push(user);
    }
    return await UserModel.create(users);
  } catch (error) {
    throw new Error(error);
  }
};

export const getUsers = async () => {
  try {
    return await UserModel.find({});
  } catch (error) {
    throw new Error(error);
  }
};
