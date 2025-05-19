import { mocksUsers } from "../utils/user.utils.js";
import { mocksPets } from "../utils/pets.utils.js";
import { UserModel } from "../model/user.model.js";
import { PetsModel } from "../model/pets.model.js";

export const dataMock = async (cant = 100) => {
  try {
    const users = [];
    const pets = [];

    for (let i = 0; i < cant; i++) {
      const user = mocksUsers();
      users.push(user);

      const pet = mocksPets();
      pets.push(pet);
    }
    return (await UserModel.create(users)) && (await PetsModel.create(pets));
  } catch (error) {
    throw new Error(error);
  }
};
